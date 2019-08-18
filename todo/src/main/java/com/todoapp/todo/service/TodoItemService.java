package com.todoapp.todo.service;

import java.util.List;

import com.todoapp.todo.entity.Subtask;
import com.todoapp.todo.entity.TodoItem;

public interface TodoItemService {
	
	// to save a todo 
	public TodoItem saveTodo(TodoItem todo);
	
	// to find all the todos
	public List<TodoItem> findAllTodo();
	
	// to delete a todo
	public void deleteTodo(long todoItemId);
	
	// to update a todo
	public TodoItem updateTodo(long todoItemId, TodoItem todoItem);
	
	// to find subtask of a todo
	public List<Subtask> findSubtaskForATask(long todoItemId);
	
	// Give us a todo with given id
	public TodoItem findTodoItemWithGivenId(long todoItemId);

	// For Recovery of todo
	public void saveDeleteTodoInRecoveryTable(TodoItem todo);
	public TodoItem recoverLatestDeletedTodo();
	
}
