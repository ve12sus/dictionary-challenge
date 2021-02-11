export class FeedbackApp {
  formatFeedback(feedback : FeedBack) : string {
    /* Start here */
    return 'hello world';
  }
}

export type FeedBack = {
  word: string;
  comment: string;
  date: Date;
  rating: number;
};
