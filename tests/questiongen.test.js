import { describe, test, it, expect } from "vitest";
import { loadTemplate, generateQuestion } from "../src/Utils/questiongen.js";

describe('load_question', () => {
    it('should return question title', () => {
        const path = "../data/example.json";

        let file = loadTemplate(path);

        console.log(generateQuestion(file));
    })
});
