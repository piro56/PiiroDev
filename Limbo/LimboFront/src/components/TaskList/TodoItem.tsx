import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { TodoItemInterface } from "./TaskList";
import TodoUpdate from "./TodoUpdate";

interface TodoItemChildInterface extends TodoItemInterface {
    parentUpdate?: (x: void) => void;
}

export default function TodoItem(props: TodoItemChildInterface) {
    const [loading, setLoading] = useState<boolean>(false);
    const [isComplete, setComplete] = useState<boolean>(props.isComplete);

    

    useEffect(() => {}, [])
    let cardColor = "border-white-800"
    if (loading) {cardColor = "border-white-800";} 
    else cardColor = isComplete ? "border-green-800" : "border-red-800";
    
    let cardShadow = "shadow-white-800"
    if (loading) {cardShadow = "shadow-white";} 
    else cardShadow = isComplete ? "shadow-green-800" : "shadow-red-800";

    const handleButton = async () => {
        setLoading(true);
        TodoUpdate(props.id, !isComplete);
        if (props.parentUpdate) {
            await props.parentUpdate();
        }
        setComplete(!isComplete);
        setLoading(false);
    };


    return (
        <div className="flex grow p-2 text-txtcol">
            <button className={`flex flex-col h-100 justify-between grow max-w-sm p-6 bg-primary border-2 ${cardColor} 
                                    rounded-lg items-center hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700
                                    shadow-md ${cardShadow}`}
                                    onClick={handleButton}
                                    disabled={loading}>
            {!loading ?
                (   <>
                    <h1 className="grow">{props.name}</h1>
                    <p className="text-[10px]">{props.id}</p>
                    </>
                )
                : <Spinner/>
            }
            </button>
        </div>
    )
}