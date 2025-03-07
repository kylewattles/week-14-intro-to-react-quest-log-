import Quest from "./Quest.tsx";

export default function Quests() {
    return (
    <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center bg-light">   
            <div className="bg-info m-3 w-75 shadow-lg p-3 border rounded">Quest Log</div>
        </div>
        <div id="questbody">
           
            
            <Quest/>
        </div>
        </div>
    )
  }