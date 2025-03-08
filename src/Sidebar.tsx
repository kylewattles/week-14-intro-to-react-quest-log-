import {useState} from "react";
export default function SideBar({text, setQuest, quest}: {text:string}) {
   const [questText,setQuestText] = useState();
    
    function handleSubmit(q: React.FormEvent<HTMLFormElement>){
        q.preventDefault();
        const updatedQuests = [...quest,questText];
        setQuest(updatedQuests)
        setQuestText("")
      
        
    }
    return (
        <div className="border-end bg-light p-3">
            <h2>What does the wizard request?</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                    id="questInput" 
                    className="form-control rounded shadow-lg" 
                    type="text" 
                    placeholder="what does the wizard ask of you, brave traveller?"
                    onChange={(q) => setQuestText(q.target.value)}
                    value={questText}
                    />
                </div>
                <button type="submit" className="btn btn-primary shadow-lg">{text}</button>
            </form>
        </div>
    );
}