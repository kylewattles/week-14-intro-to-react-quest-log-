import { useState } from "react";

export default function Quest({ quest, deleteQuest }: { quest: string, deleteQuest: () => void }) {
const [isActive, setIsActive] = useState(false);

const handleActiveQuest = () => {
  setIsActive(!isActive)
}
  return (
    <div id="questbody" className="border-end bg-light p-3">
      <div>
      {quest}

      </div>
      <button onClick={deleteQuest} className="btn btn-success shadow-lg">Finish Quest</button>
      <button onClick={handleActiveQuest} className={`btn ${isActive ? "btn-success" : "btn-secondary"}
      {isActive ? "Inactive" : "Active}`}>set as active quest</button>
    </div>
  );
}