package com.todoapp.todo.service;

import java.util.List;

import com.todoapp.todo.entity.Subtask;
import com.todoapp.todo.entity.TodoItem;

public interface TodoItemService {
	
	public TodoItem saveTodo(TodoItem todo);
	public List<TodoItem> findAllTodo();
	public void deleteTodo(long todoItemId);
	public TodoItem updateTodo(long todoItemId, TodoItem todoItem);
	public List<Subtask> findSubtaskForATask(long todoItemId);
	
}
