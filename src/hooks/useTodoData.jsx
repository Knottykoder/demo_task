import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from "../slice/todo";

const useTodoData = () => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState("All");
    const dispatch = useDispatch();

    // Fetch todo data from the Redux store
    const todoData = useSelector(state => state.todo.todo);

    // Initialize localStorage if there's no data in Redux store
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todo"));
        if (storedTodos) {
            dispatch(setTodos(storedTodos));
        }
    }, [dispatch]);

    // Add a new todo
    const addTodo = () => {
        const task = {
            id: Math.floor(Math.random() * 100),
            todo: text,
            description: description,
            status: "pending"
        };

        const updatedTodos = [...todoData, task];
        dispatch(setTodos(updatedTodos));
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
        setText(''); // Clear input fields after adding
        setDescription('');
    };

    // Edit an existing todo
    const editTodo = (id, newText, newDescription, newStatus) => {
        const updatedTodos = todoData.map(todo =>
            todo.id === id
                ? { ...todo, todo: newText, description: newDescription, status: newStatus }
                : todo
        );

        dispatch(setTodos(updatedTodos));
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
    };

    // Remove a todo
    const removeTodo = (id) => {
        const updatedTodos = todoData.filter(todo => todo.id !== id);
        dispatch(setTodos(updatedTodos));
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
    };

    // Filter todos based on status
    const filteredData = useMemo(() => {
        if (status === "All") {
            return todoData;
        }
        return todoData.filter(todo => todo.status === status);
    }, [status, todoData]);

    // Mark a todo as completed
    const onCompleteTask = (id) => {
        const updatedTodos = todoData.map(todo =>
            todo.id === id
                ? { ...todo, status: "Completed" }
                : todo
        );

        dispatch(setTodos(updatedTodos));
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
    };

    return {
        todoData: filteredData,
        text,
        description,
        addTodo,
        editTodo,
        removeTodo,
        setText,
        setDescription,
        setStatus,
        onCompleteTask
    };
};

export default useTodoData;
