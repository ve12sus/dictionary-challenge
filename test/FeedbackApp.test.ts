import assert from 'assert';
import { FeedbackApp } from '../src/FeedbackApp';

// let assert = require("assert");
// let FeedbackApp = require("../../src/FeedbackApp.js");

describe("FeedbackApp", function() {
  const app = new FeedbackApp();

  describe("#formatFeedback", function() {
    it("should format the feedback to one line", function() {
      assert.strictEqual(
        app.formatFeedback(swashbucklerFeedback),
        "swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★½ (9/19/2019)"
      );
    });

    describe("when formatted feedback would be over 80 characters", function() {
      it("removes the date", function() {
        assert.strictEqual(
          app.formatFeedback(slubberFeedback),
          "slubber: Slubber sounds like slobber. So gross! More pretty words, please! ★½"
        );
      });
    });

    describe("when date is removed and when formatted feedback is still over 80 characters", function() {
      it("truncates the comment until the formatted feedback is 80 characters", function() {
        assert.strictEqual(
          app.formatFeedback(textlationshipFeedback),
          "textlationship: I'm in a textlationship with my friend! We text all the ... ★★★"
        );
      });
    });

    describe("when the rating is omitted", function() {
      it("omits the rating", function() {
        assert.strictEqual(
          app.formatFeedback(hyperbolicFeedback),
          "hyperbolic: How come teethpaste isn't in the dictionary? (8/22/2019)"
        );
      });
    });
  });
});

const swashbucklerFeedback = {
  word: "swashbuckler",
  comment: "Yar, a good word, matey! Shiver me timbers!",
  date: "19 Sep 2019 12:12:00 GMT",
  rating: 85
};

const slubberFeedback = {
  word: "slubber",
  comment: "Slubber sounds like slobber. So gross! More pretty words, please!",
  date: "10 Sep 2019 04:14:00 PST",
  rating: 21
};

const textlationshipFeedback = {
  word: "textlationship",
  comment:
    "I'm in a textlationship with my friend! We text all the time! I feel like it's every second! LMAO!",
  date: "24 Aug 2019 20:54:00 GMT",
  rating: 60
};

const hyperbolicFeedback = {
  word: "hyperbolic",
  comment: "How come teethpaste isn't in the dictionary?",
  date: "22 Aug 2019 01:20:00 PST"
};
