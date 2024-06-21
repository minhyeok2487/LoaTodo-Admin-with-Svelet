<script>
	import {todos} from '../store';
	export let todo;

	const handleCheckTodo = todos.checkTodo;
	const handleEditTodoItem = todos.editTodo;
	const handleChangeEditMode = todos.changeTodoEditMode;
	const handelRemoveTodo = todos.removeTodo;
</script>

<input type="checkbox" bind:checked={todo.done} on:click={() => handleCheckTodo(todo.id)} />
{#if $todos.editMode === todo.id}
	<input type="text" bind:value={todo.content} on:focusout={() => handleEditTodoItem(todo)}/>
{:else}
	<span on:dblclick={() => handleChangeEditMode(todo.id)}>{todo.content}</span>
{/if}
<a href="#null" on:click={() => handelRemoveTodo(todo.id)}>X</a>
