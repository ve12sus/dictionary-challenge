function convertRating(rating : number) {
  const newRating = rating / 20;
  if (newRating >= 0.01 && newRating <= 0.49) {
    return '½';
  }
  if (newRating >= 0.5 && newRating <= 1.49) {
    return '★';
  }
  if (newRating >= 1.5 && newRating <= 1.99) {
    return '★½';
  }
  if (newRating >= 2 && newRating <= 2.49) {
    return '★★';
  }
  if (newRating >= 2.5 && newRating <= 2.99) {
    return '★★½';
  }
  if (newRating >= 3 && newRating <= 3.49) {
    return '★★★';
  }
  if (newRating >= 3.5 && newRating <= 3.99) {
    return '★★★½';
  }
  if (newRating >= 4 && newRating <= 4.49) {
    return '★★★★';
  }
  if (newRating >= 4.5 && newRating <= 4.99) {
    return '★★★★½';
  }
  if (newRating >= 5) {
    return '★★★★★';
  } return 'no rating';
}

export class FeedbackApp {
  formatFeedback(feedback : FeedBack) : FeedBack {
    /* Start here */
    const {
      word, comment, date, rating,
    } = feedback;
    console.log(word);
    console.log(comment);
    console.log(date);
    console.log(rating);
    const newRating = convertRating(rating);
    const instDate = new Date(date);
    const month = instDate.getMonth();
    const day = instDate.getDate();
    const year = instDate.getFullYear();
    //  (9/19/2019)
    const dateString = `(${month}/${day}/${year})`;
    console.log(dateString);
    // swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★½ (9/19/2019)

    const finalString = `${word}: ${comment} ${dateString} ${newRating}`;
    console.log(finalString);
    console.log(finalString.length);
    return feedback;
  }
}

export type FeedBack = {
  word: string;
  comment: string;
  date: Date;
  rating: number;
};
