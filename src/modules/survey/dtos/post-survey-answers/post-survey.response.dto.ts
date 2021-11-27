import { JsonApiResource } from "../../../../common/json-api/json-api-resource";

interface PostSurveyAnswersResponse {
  answers: Array<{
    questionId: string;
    answer: string | number;
  }>;
}

export type PostSurveyAnswersResponseDto =
  JsonApiResource<PostSurveyAnswersResponse>;
