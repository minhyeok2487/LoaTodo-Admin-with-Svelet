<script>
	export let todo;
	export let handleCheckTodo;
	export let editMode;
	export let handleChangeEditMode;
	export let handleEditTodoItem;
    export let handelRemoveTodo;
</script>

<input type="checkbox" bind:checked={todo.done} on:click={() => handleCheckTodo(todo.id)} />
{#if editMode === todo.id}
	<input type="text" bind:value={todo.content} on:focusout={() => handleEditTodoItem(todo)}/>
{:else}
	<span on:dblclick={() => handleChangeEditMode(todo.id)}>{todo.content}</span>
{/if}
<a href="#null" on:click={() => handelRemoveTodo(todo.id)}>X</a>
