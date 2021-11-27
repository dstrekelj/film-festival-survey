interface RelationshipData {
  type: string;
  id: string;
}

export interface JsonApiResource<T> {
  data: {
    id?: string;
    type: string;
    attributes: T;
    relaitonships?: {
      [relationship: string]: {
        data: RelationshipData | RelationshipData[];
      };
    };
  };
}
