import { useState } from "react";

export default function Quest({ quest, deleteQuest }: { quest: string, deleteQuest: () => void }) {
const [isActive, setIsActive] = useState(false);
const [isStrikethrough, setIsStrikethrough] = useState(false)

const handleActiveQuest = () => {
  setIsActive(!isActive)
}

const handleDeleteQuest = () => {
  setIsStrikethrough(true)
  setTimeout(deleteQuest, 700)
}
  return (
    <div id="questbody" className="border-end bg-light p-3">
      <div className={`quest-text ${isStrikethrough ? "strikethrough" : ""}`}>
      {quest}
      </div>
      <div className="quest-buttons">
      <button onClick={handleDeleteQuest} className="btn btn-success shadow-lg">Finish Quest</button>
      <button onClick={handleActiveQuest} className={`btn ${isActive ? "btn-warning" : "btn-secondary"}
      {isActive ? "Inactive" : "Active}`}>set as active quest</button>
    </div>
    </div>
  );
}