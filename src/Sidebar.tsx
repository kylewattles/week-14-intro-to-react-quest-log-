export default function SideBar() {
    return (
        <div className="border-end bg-light p-3">
            <h2>What does the wizard request?</h2>
            <form>
                <div className="mb-3">
                    <input id="questInput" className="form-control rounded shadow-lg" type="text" placeholder="Enter quest name" />
                </div>
                <button className="btn btn-primary shadow-lg">Create Quest!</button>
            </form>
        </div>
    );
}