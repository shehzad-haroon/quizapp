import React from "react"
export type Quiz = {
    category: string
correct_answer: string
difficulty: string
incorrect_answers: string []
question: string
type: string
}
export type QuestionType ={

    question:string
    answer:string
    Option:string[]
    correct_answer: string
}
export type QueType = {
    options:string[]
    question:string
    callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
}