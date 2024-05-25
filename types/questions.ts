export interface IQuestions {
  _id: number;
  title: string;
  tags: tag[];
  author: author;
  upvotes: number;
  views: number;
  answers: Array<object>;
  createAt: Date;
}

interface author {
  _id: number;
  name: string;
  picture: string;
}

interface tag {
  _id: number;
  name: string;
}
