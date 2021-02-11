export class FeedbackApp {
  formatFeedback(feedback : FeedBack) : FeedBack {
    /* Start here */
    console.log(typeof feedback.word);
    console.log(feedback.word);
    console.log(feedback.comment);
    console.log(feedback.date);
    console.log(typeof feedback.date);
    const dateObjStr = feedback.date;
    const instDate = new Date(dateObjStr);
    const month = instDate.getMonth();
    const day = instDate.getDate();
    const year = instDate.getFullYear();
    //  (9/19/2019)
    const dateString = `(${month}/${day}/${year})`;

    console.log(dateString);
    return feedback;
  }
}

export type FeedBack = {
  word: string;
  comment: string;
  date: Date;
  rating: number;
};
