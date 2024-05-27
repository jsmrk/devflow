"use client";

import React, { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AnswerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { createAnswer } from "@/lib/actions/answer.action";
import { usePathname } from "next/navigation";

interface Props {
  question: string;
  questionId: string;
  authorId: string;
}

const AnswerForm = ({ question, questionId, authorId }: Props) => {
  const pathname = usePathname();
  const type = "create";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef(null);

  const form = useForm<z.infer<typeof AnswerSchema>>({
    resolver: zodResolver(AnswerSchema),
    defaultValues: {
      answer: "",
    },
  });

  const handleCreateAnswer = async (values: z.infer<typeof AnswerSchema>) => {
    setIsSubmitting(true);
    try {
      await createAnswer({
        content: values.answer,
        author: JSON.parse(authorId),
        question: JSON.parse(questionId),
        path: pathname,
      });
      form.reset();
      if (editorRef.current) {
        const editor = editorRef.current as any;
        editor.setContent("");
      }
    } catch (error) {
      console.log("handleCreateAnswer ERROR: " + error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='font-bold text-2xl mt-10 mb-3 flex justify-between items-center'>
        <h2>Write your answer here</h2>
        <Button className='flex gap-2' onClick={() => {}}>
          <Image
            src={"/assets/icons/stars.svg"}
            alt='star'
            width={12}
            height={12}
            className='object-contain'
          />
          Generate AI Answer
        </Button>
      </div>
      <Form {...form}>
        <form
          className='flex w-full flex-col gap-10'
          onSubmit={form.handleSubmit(handleCreateAnswer)}
        >
          <FormField
            control={form.control}
            name='answer'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-3'>
                <FormControl>
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(_evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    initialValue=''
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                      ],
                      toolbar:
                        "undo redo | codesample | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:15px}",
                      skin: "oxide-dark",
                      content_css: "dark",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-end mt-[-20px]'>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? (
                <>{type === "create" ? "Editing..." : "Posting..."}</>
              ) : (
                <>
                  {
                    //@ts-ignore
                    type === "edit" ? "Edit Question" : "Submit Answer"
                  }
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AnswerForm;
