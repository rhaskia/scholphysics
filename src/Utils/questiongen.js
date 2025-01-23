import { Question } from "../Components/Quiz";
import data from '../../data/example.json' assert { type: 'json' };

export function loadTemplate(path) {
  return data;
}

export function generateQuestion(template) {
    let values = template.valueRanges.map(r => randRange(r[0], r[1]));
    let question = format(template.question, values);
    let answers = [];
    let correctIdx = 0;
    let answersAmount = 4;

    if (template.questionType == "number") {
        const eq = format(template.answer, values);
        let answer = eval(eq);
        const randomIndex = Math.floor(Math.random() * answersAmount);
        correctIdx = randomIndex;

        for (let i = 0; i < answersAmount; i++) {
            answers[i] = i == randomIndex ? answer : expo(randRange(0, 10), 3); 
        }
    } else if (template.questionType == "input") {
        answers = [template.answer];
    } else {
        answers = template.answers;
        correctIdx = template.correctIdx;
    }

    return new Question(template.title, question, answers, correctIdx, template.explanation, template.questionType);
}

export function generateQuestionSet(topic, amount) {
    let questions = [];
    let templates = data.questions;

    for (let i = 0; i < amount; i++) {
        const randomIndex = Math.floor(Math.random() * templates.length);
        questions.push(generateQuestion(templates[randomIndex]));
    }

    return questions;
}

export default generateQuestionSet;

function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

function format(template, values) {
  let result = template;

  for (let i = 0; i < values.length; i++) {
          result = result.replace("{" + i + "}", values[i]);
  } 

    return result;
}
