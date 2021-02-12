export class FeedbackApp {
  formatFeedback(feedback : FeedBack) : FeedBack {
    /* Start here */
    console.log(typeof feedback.word);
    console.log(feedback.comment);
    console.log(feedback.date);
    console.log(typeof feedback.date);
    const {
      word, comment, date, rating,
    } = feedback;
    console.log(word);
    console.log(comment);
    console.log(date);
    console.log(rating);
    const instDate = new Date(date);
    const month = instDate.getMonth();
    const day = instDate.getDate();
    const year = instDate.getFullYear();
    //  (9/19/2019)
    const dateString = `(${month}/${day}/${year})`;
    console.log(dateString);
    // swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★½ (9/19/2019)

    const finalString = `${word}: ${comment} ${dateString}`;
    console.log(finalString);
    return feedback;
  }
}

export type FeedBack = {
  word: string;
  comment: string;
  date: Date;
  rating: number;
};
