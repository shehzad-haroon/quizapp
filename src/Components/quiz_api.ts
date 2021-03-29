import { QuestionType, Quiz } from './quiz_types'
const shuffleArray = (array:any[]) =>
    [...array].sort(() => Math.random() - 0.5)
export const allquiz = async (totalQuestion: number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`)
    let { results } = await res.json()
    const data:QuestionType[] = results.map((questionobj: Quiz, ind: number) => {
        return {
            question: questionobj.question,
            answer: questionobj.correct_answer,
            correct_answer:questionobj.correct_answer,
            Option: shuffleArray(questionobj.incorrect_answers.concat(questionobj.correct_answer)),
        }
    })
return data
}