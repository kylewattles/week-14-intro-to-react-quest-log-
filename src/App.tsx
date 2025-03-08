
import SideBar from "./Sidebar";
import Quests from "./Quests";
import "./index.css"
import { useState } from "react";

export default function QuestLog() {
   const [quest, setQuest] = useState<string[]>([]);

   const deleteQuest = (questToDelete: string) => {
    setQuest(quest.filter(q => q !== questToDelete));
   };
  return (
    
    <div className="d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
    <SideBar text = {"Create Quest"} setQuest= {setQuest} quest={quest}/>
    <Quests questName={quest} deleteQuest={deleteQuest}/>
    </div>
    </div>
  )
}