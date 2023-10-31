import { useState } from "react";
import Spinner from "../Spinner";
import { TodoItemInterface } from "./TaskList";
import TodoUpdate from "./TodoUpdate";

interface TodoItemChildInterface extends TodoItemInterface {
    parentUpdate?: (x: void) => void;
}

export default function TodoItem(props: TodoItemChildInterface) {
    const [loading, setLoading] = useState<boolean>(false);

    const cardColor = props.isComplete ? "border-green-800" : "border-red-800";


    const handleButton = async () => {
        setLoading(true);
        TodoUpdate(props.id, !props.isComplete);
        if (props.parentUpdate) {
            await props.parentUpdate();
        }
        setLoading(false);
    };

    return (
        <div className="flex grow p-1 text-txtcol">
            <button className={`flex flex-col h-100 justify-between grow max-w-sm p-6 bg-primary border-2 ${cardColor} 
                                    rounded-lg items-center hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700`}
                                    onClick={handleButton}>
            {!loading ?
                (   <>
                    <h1 className="grow justify-self-start">{props.name}</h1>
                    <p className="text-xs justify-self-end">{props.id}</p>
                    </>
                )
                : <Spinner/>
            }
            </button>
        </div>
    )
}