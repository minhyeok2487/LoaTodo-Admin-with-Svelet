import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';
import constant from './constant';

function setFormTodo() {
	const todoValue = '';
	const { subscribe, update, set } = writable(todoValue);

	const resetForm = () => {
		update((todoValue) => {
			todoValue = '';
			return todoValue;
		});
	};

	return {
		subscribe,
		set,
		resetForm
	};
}

function setTodoData() {
	const todoData = {
		todoLists: [
			{
				id: uuid(),
				content: '첫 번째 할일',
				done: false
			},
			{
				id: uuid(),
				content: '두 번째 할일',
				done: false
			},
			{
				id: uuid(),
				content: '세 번째 할일',
				done: true
			},
			{
				id: uuid(),
				content: '네 번째 할일',
				done: false
			}
		],
		editMode: '',
		viewMode: constant.ALL
	};

	const { subscribe, update } = writable(todoData);

	const addTodo = (content) => {
        const newTodo = {
            id:uuid(),
            content: content,
            done: false
        }

        update(
            datas => {
                const setData = [...datas.todoLists, newTodo];
                datas.todoLists = setData;
                return datas;
            }
        )
    };

	const editTodo = (editTodo) => {
        update(
            datas => {
                const setData = datas.todoLists.map(todo => {
                    if(todo.id === editTodo.id) {
                        todo = editTodo
                    }
                    return todo;
                })
                datas.todoLists = setData
                return datas;
            }
        )
    };

	const removeTodo = (id) => {
        update(
            datas => {
                const setData = datas.todoLists.filter(todo => todo.id !== id)
                datas.todoLists = setData
                return datas;
            }
        )
    };

	const checkTodo = (id) => {
        update(
            datas => {
                const setData = datas.todoLists.map(todo => {
                    if(todo.id === id) {
                        todo.done = !todo.done
                    }
                    return todo;
                })
                datas.todoLists = setData
                return datas;
            }
        )
    };

	const changeTodoEditMode = (id) => {
        update(
            datas => {
                datas.editMode = id
                return datas
            }
        )
    };

	const changeTodoView = (mode) => {
        update(
            datas => {
                datas.viewMode = mode
                return datas;
            }
        )
    };

	return {
		subscribe,
		addTodo,
		editTodo,
		removeTodo,
		checkTodo,
		changeTodoEditMode,
		changeTodoView
	};
}

export const todoForm = setFormTodo();
export const todos = setTodoData();
