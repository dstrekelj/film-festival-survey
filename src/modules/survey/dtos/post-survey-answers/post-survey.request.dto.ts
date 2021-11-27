import { JsonApiResource } from "../../../../common/json-api/json-api-resource";

interface PostSurveyAnswersRequest {
  answers: Array<{
    questionId: string;
    answer: string | number;
  }>;
}

export type PostSurveyAnswersRequestDto =
  JsonApiResource<PostSurveyAnswersRequest>;
