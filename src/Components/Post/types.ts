export type  PostType = {
    id: number;
    imageUrl: string;
    text: string;
    publishedAt: string;
    lesson_num: number;
    title?: string;
    author: number;
  };
  export type PostProps = {
    post: PostType;

  };
  