
import SideBar from "./Sidebar";
import Quests from "./Quests";
import "./index.css"

export default function QuestLog() {
  return (
    
    <div className="d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
    <SideBar text = {"Create Quest"}/>
    <Quests/>
    </div>
    </div>
  )
}