
import SideBar from "./Sidebar";
import Quests from "./Quests";
import "./index.css"
import { useState } from "react";

export default function QuestLog() {
   const [quest, setQuest] = useState("");
  return (
    
    <div className="d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
    <SideBar text = {"Create Quest"} setQuest= {setQuest}/>
    <Quests questName={quest}/>
    </div>
    </div>
  )
}