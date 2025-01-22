import { Question } from "../Components/Quiz";
import data from '../../data/example.json' assert { type: 'json' };

export function loadTemplate(path) {
  return data;
}

export function generateQuestion(template) {
  let values = template.valueRanges.map(r => randRange(r[0], r[1]));
  console.log();
  let question = template.question;
  // TODO: generate answers
  let answers = ["1", "2", "3", "4"];
  let correctIdx = 2;

  for (let i = 0; i < values.length; i++) {
      question = question.replace("{" + i + "}", expo(values[i], 3));
  } 

  return new Question(template.title, question, answers, correctIdx);
}

function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
