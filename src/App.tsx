import SideBar from "./sidebar";
import Slider from "./Slider";
import "./App.css"

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