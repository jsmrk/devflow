import QuestionForm from "@/components/Forms/QuestionForm";
import React from "react";

const AskQuestion = () => {
  return (
    <div>
      <h1 className='font-extrabold text-3xl'>AskQuestion</h1>
      <div className='mt-9'>
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskQuestion;
