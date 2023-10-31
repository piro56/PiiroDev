import NavBar from "../components/NavBar/NavBar";
import TaskList from "../components/TaskList/TaskList";
export default function MainPage() {

    return (
        
        <div className="h-screen bg-primary">
            <NavBar/>
            <TaskList/>
        </div>
    )
}