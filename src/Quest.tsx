export default function Quest({ quest }: { quest: string }) {
  return (
    <div className="border-end bg-light p-3">
      {quest} <br />
      <button className="btn btn-success shadow-lg">Finish Quest</button>
    </div>
  );
}