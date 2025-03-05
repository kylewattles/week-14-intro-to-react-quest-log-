import SideBar from "./Sidebar";
import Slider from "./Quests";
import "./index.css"

export default function ToDoList() {
  return (
    
    <div className="d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
    <SideBar text = {"Create Quest"}/>
    <Slider/>
    </div>
    </div>
  )
}