export default function SideBar({text}: {text:string}) {
    return (
        <div className="border-end bg-light p-3">
            <h2>What does the wizard request?</h2>
            <form>
                <div className="mb-3">
                    <input id="questInput" className="form-control rounded shadow-lg" type="text" placeholder="what does the wizard ask of you, brave traveller?" />
                </div>
                <button className="btn btn-primary shadow-lg">{text}</button>
            </form>
        </div>
    );
}