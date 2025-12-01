import {openai} from "./ai"

export const runLLM = async({userMessage}: {userMessage: string})=>{
const reponse = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages:[
        {role: 'user', content: userMessage}
    ]
})
return reponse.choices[0].message?.content
}