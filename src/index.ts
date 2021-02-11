import fs from 'fs';
import { FeedbackApp } from './FeedbackApp';
import type { FeedBack } from './FeedbackApp';

// let FeedbackApp = require("./FeedbackApp.js");

const feedbackApiData = JSON.parse(fs.readFileSync('feedback.json', { encoding: 'utf-8' })) as FeedBack[];

const app = new FeedbackApp();

feedbackApiData.map(feedback => console.log(app.formatFeedback(feedback)));
