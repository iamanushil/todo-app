package com.todoapp.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoapp.todo.entity.TodoItem;
import com.todoapp.todo.repository.TodoItemRepository;

@Service
public class TodoItemServiceImpl implements TodoItemService {
	
	@Autowired
	TodoItemRepository todoItemRepository;
	
	@Override
	public TodoItem saveTodo(TodoItem todoItem) {
		
		return this.todoItemRepository.save(todoItem);
	}

	@Override
	public List<TodoItem> findAllTodo() {
		
		return this.todoItemRepository.findAll();
	}

	@Override
	public void deleteTodo(long todoItemId) {
		
		this.todoItemRepository.deleteById(todoItemId);
	}

	@Override
	public TodoItem updateTodo(long todoItemId, TodoItem todoItem) {
		
		TodoItem todoItemToUpdate = this.todoItemRepository.getOne(todoItemId);
		todoItemToUpdate.setDescription(todoItem.getDescription());
		
		return this.saveTodo(todoItemToUpdate);
	}
}
