<script>
	import {todos, countTodo } from '../store';
	import Constant from '../constant';

	const handleFetchTodoAll = () => todos.changeTodoView(Constant.ALL);
	const handleFetchTodoActive = () => todos.changeTodoView(Constant.ACTIVE);
	const handleFetchTodoDone = () => todos.changeTodoView(Constant.DONE);
</script>

<div class="info">
	<div class="wrap">
		<span>COUNT: {$countTodo}</span>
		<div>
			<button
				class="btn"
				class:selected={$todos.viewMode === Constant.ALL}
				on:click={handleFetchTodoAll}>ALL</button
			>
			<button
				class="btn"
				class:selected={$todos.viewMode === Constant.ACTIVE}
				on:click={handleFetchTodoActive}>ACTIVE</button
			>
			<button
				class="btn"
				class:selected={$todos.viewMode === Constant.DONE}
				on:click={handleFetchTodoDone}>DONE</button
			>
		</div>
	</div>
</div>

<style>
	.selected {
		border-bottom: 2px solid #005eff;
	}
</style>
