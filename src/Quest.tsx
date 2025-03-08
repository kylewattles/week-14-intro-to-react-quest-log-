export default function Quest({ quest }: { quest: string }) {
  function deleteQuest() {
    console.log("clicky click")

  }
  return (
    <div className="border-end bg-light p-3">
      {quest} <br />
      <button onClick={deleteQuest} className="btn btn-success shadow-lg">Finish Quest</button>
    </div>
  );
}