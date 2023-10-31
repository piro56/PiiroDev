import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import Spinner from '../Spinner';

export interface TodoItemInterface {
    id: string;
    name: string;
    isComplete: boolean;
}
export default function TaskList() {
    const [todos, setTodo] = useState<TodoItemInterface[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchList = async () => {
        await fetch('https://localhost:49157/api/TodoItem')
            .then((response) => response.json())
            .then((data: TodoItemInterface[]) => { console.log(data); setTodo(data); })
            .catch((error) => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        setLoading(true);
        fetchList();
        setLoading(false);
    });

    if (!todos) {
        return <div>Loading...</div>;
    }
    if (loading) {
        return (
            <span className="flex justify-center pt-16">
                <ul className="flex flex-col basis-56">
                    <Spinner/>
                </ul>
            </span>
        )
    }
    return (
        <span className="flex justify-center pt-16">
            <ul className="flex flex-col basis-56">
                {todos.map((todo => (
                    <li className="" key={todo.id}>
                        <TodoItem parentUpdate={fetchList} isComplete={todo.isComplete} id={todo.id} name={todo.name} />
                    </li>
                )))}
            </ul>
        </span>
    )
}