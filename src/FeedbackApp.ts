function convertRating(rating : number | null | undefined) {
  if (rating == null) {
    return '';
  }
  const newRating = rating / 20;

  if (newRating >= 0.01 && newRating <= 0.74) {
    return '½';
  }
  if (newRating >= 0.75 && newRating <= 1.00) {
    return '★';
  }
  if (newRating >= 1.01 && newRating <= 1.74) {
    return '★½';
  }
  if (newRating >= 1.75 && newRating <= 2.24) {
    return '★★';
  }
  if (newRating >= 2.25 && newRating <= 2.74) {
    return '★★½';
  }
  if (newRating >= 2.75 && newRating <= 3.24) {
    return '★★★';
  }
  if (newRating >= 3.25 && newRating <= 3.74) {
    return '★★★½';
  }
  if (newRating >= 3.75 && newRating <= 4.24) {
    return '★★★★';
  }
  if (newRating >= 4.25 && newRating <= 4.74) {
    return '★★★★½';
  }
  if (newRating >= 4.75) {
    return '★★★★★';
  }
  return 'no rating';
}

export class FeedbackApp {
  formatFeedback(feedback : FeedBack) : string {
    /* Start here */
    const {
      word, comment, date, rating,
    } = feedback;
    const newRating = convertRating(rating);
    const instDate = new Date(date);
    const month = instDate.getMonth() + 1;
    const day = instDate.getDate();
    const year = instDate.getFullYear();
    //  (9/19/2019)
    const dateString = `(${month}/${day}/${year})`;
    // swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★½ (9/19/2019)

    const finalString = `${word}: ${comment} ${newRating} ${dateString}`;
    if (newRating === '') {
      const noRatingString = `${word}: ${comment} ${dateString}`;
      return noRatingString;
    }
    if (finalString.length > 80) {
      const noDateFinalString = `${word}: ${comment} ${newRating}`;
      if (noDateFinalString.length <= 80) {
        return noDateFinalString;
      }
      const charAllowed = 80 - word.length - newRating.length - 8;
      const newComment = comment.slice(0, charAllowed);
      const noDateTruncComment = `${word}: ${newComment} ... ${newRating}`;
      return noDateTruncComment;
    }
    return finalString;
  }
}

export type FeedBack = {
  word: string;
  comment: string;
  date: string;
  rating?: number;
};
