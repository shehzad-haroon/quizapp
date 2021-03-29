import React, { useState } from 'react';
import { QueType } from './quiz_types'
const QueRender: React.FC<QueType> = ({ question, options,callback }) => {
    let [checkanswer , setCheckAnswer] = useState("")

const handleChange = (e:any) =>{
   setCheckAnswer(e.target.value)
  }
    return (
        <div className="whole">
            <div className="inner">
                <h4>{question}</h4>
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,checkanswer)}>
                {options && options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind} className="inputs">
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        required
                                        value={opt}
                                        onChange={handleChange}
                                        checked={checkanswer === opt}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}
export default QueRender;