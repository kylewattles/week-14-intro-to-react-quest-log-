import Quest from "./Quest.tsx";

export default function Quests({questName, deleteQuest }: { questName: string[], deleteQuest: (quest: string) => void }) {



    return (
    <div id="questlistbody" className="flex-grow-1 d-flex flex-column">
        <div id="questlogbody" className="d-flex justify-content-center align-items-center bg-light">   
            <div className="bg-info m-3 w-75 shadow-lg p-3 border rounded">Quest Log</div>
        </div>
        <div id="questbody">
            {questName.map((quest)=>{
                return (
                    <Quest key={quest} quest={quest} deleteQuest={() => deleteQuest(quest)}/>
                )
            })}
           
            
            
        </div>
        </div>
    )
  }