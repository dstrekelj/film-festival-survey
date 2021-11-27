import { QuestionTypeEnum } from "../question-type-enum";

export interface Question {
  questionId: string;
  questionType: QuestionTypeEnum;
  label: string;
  required: boolean;
  attributes: {
    min?: number;
    max?: number;
  };
}
