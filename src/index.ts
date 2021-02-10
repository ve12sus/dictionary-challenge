import fs from 'fs';
import { FeedbackApp } from './FeedbackApp';

// let FeedbackApp = require("./FeedbackApp.js");

const feedbackApiData = JSON.parse(fs.readFileSync("feedback.json"));

const app = new FeedbackApp();

feedbackApiData.map(feedback => console.log(app.formatFeedback(feedback)));
