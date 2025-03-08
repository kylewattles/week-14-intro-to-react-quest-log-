export default function Quest({ quest, deleteQuest }: { quest: string, deleteQuest: () => void }) {
 
  return (
    <div className="border-end bg-light p-3">
      <div>
      {quest}

      </div>
      <button onClick={deleteQuest} className="btn btn-success shadow-lg">Finish Quest</button>
    </div>
  );
}