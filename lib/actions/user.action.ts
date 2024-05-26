"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log("FETCHING USER ERROR: " + error);
    throw error;
  }
}

export async function createUser(params: CreateUserParams) {
  try {
    await connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log("CREATING USER ERROR: " + error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    await connectToDatabase();

    const { clerkId, updateData, path } = params;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log("CREATING USER ERROR: " + error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    await connectToDatabase();

    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // get user question ids to delete
    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );
    // delete the user questions
    await Question.deleteMany({ author: user._id });

    // delete the user
    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log("CREATING USER ERROR: " + error);
    throw error;
  }
}
