// "use client";
// import React from "react";
// import { Question } from "@prisma/client";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// type Props = {
//   questions: Question[];
// };

// const QuestionsList = ({ questions }: Props) => {
//   return (
//     <Table className="mt-4">
//       <TableCaption>End of list.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[10px]">No.</TableHead>
//           <TableHead>Question & Correct Answer</TableHead>
//           <TableHead>Your Answer</TableHead>

//           {questions[0].questionType === "open_ended" && (
//             <TableHead className="w-[10px] text-right">Accuracy</TableHead>
//           )}
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <>
//           {questions.map(
//             (
//               { answer, question, userAnswer, percentageCorrect, isCorrect },
//               index
//             ) => {
//               return (
//                 <TableRow key={index}>
//                   <TableCell className="font-medium">{index + 1}</TableCell>
//                   <TableCell>
//                     {question} <br />
//                     <br />
//                     <span className="font-semibold">{answer}</span>
//                   </TableCell>
//                   {questions[0].questionType === "open_ended" ? (
//                     <TableCell className={`font-semibold`}>
//                       {userAnswer}
//                     </TableCell>
//                   ) : (
//                     <TableCell
//                       className={`${
//                         isCorrect ? "text-green-600" : "text-red-600"
//                       } font-semibold`}
//                     >
//                       {userAnswer}
//                     </TableCell>
//                   )}

//                   {percentageCorrect && (
//                     <TableCell className="text-right">
//                       {percentageCorrect}
//                     </TableCell>
//                   )}
//                 </TableRow>
//               );
//             }
//           )}
//         </>
//       </TableBody>
//     </Table>
//   );
// };

// export default QuestionsList;


"use client";
import React from "react";
import { Question } from "@prisma/client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  questions: Question[];
};

const QuestionsList = ({ questions }: Props) => {
  if (questions.length === 0) {
    return <p>No questions available.</p>;
  }

  return (
    <Table className="mt-4">
      <TableCaption>End of list.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">No.</TableHead>
          <TableHead>Question & Correct Answer</TableHead>
          <TableHead>Your Answer</TableHead>
          {questions[0]?.questionType === "open_ended" && (
            <TableHead className="w-[10px] text-right">Accuracy</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {questions.map(
          (
            { answer, question, userAnswer, percentageCorrect, isCorrect },
            index
          ) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  {question} <br />
                  <span className="font-semibold">{answer}</span>
                </TableCell>
                {questions[0]?.questionType === "open_ended" ? (
                  <TableCell className={`font-semibold`}>{userAnswer}</TableCell>
                ) : (
                  <TableCell
                    className={`${
                      isCorrect ? "text-green-600" : "text-red-600"
                    } font-semibold`}
                  >
                    {userAnswer}
                  </TableCell>
                )}
                {percentageCorrect !== undefined && (
                  <TableCell className="text-right">{percentageCorrect}</TableCell>
                )}
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};

export default QuestionsList;

