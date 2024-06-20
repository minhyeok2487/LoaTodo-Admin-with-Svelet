<script>
    import { fade } from 'svelte/transition';
    export let fetchTodos
    export let handleCheckTodo
    export let editMode
    export let handleChangeEditMode
    export let handleEditTodoItem
    export let handelRemoveTodo
    import TodoItem from './TodoItem.svelte'
	import { flip } from 'svelte/animate';
</script>

<div class="main">
    <ul>
        {#each fetchTodos as todo, index(todo) }
            <li
                in:fade
                out:fade={{duration:100}}
                animate:flip={{duration:1000}}
            >
                <TodoItem {todo} {handleCheckTodo} {editMode} {handleChangeEditMode} {handleEditTodoItem} {handelRemoveTodo}/>
            </li>
        {/each}
    </ul>
</div>