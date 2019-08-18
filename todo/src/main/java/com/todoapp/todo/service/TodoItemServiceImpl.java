package com.todoapp.todo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.todoapp.todo.entity.RecoverTodo;
import com.todoapp.todo.entity.Subtask;
import com.todoapp.todo.entity.TodoItem;
import com.todoapp.todo.repository.RecoverTodoRepository;
import com.todoapp.todo.repository.SubtaskRepository;
import com.todoapp.todo.repository.TodoItemRepository;

@Service
public class TodoItemServiceImpl implements TodoItemService {
	
	@Autowired
	@Qualifier("todoRepo")
	TodoItemRepository todoItemRepository;
	
	@Autowired
	@Qualifier("subRepo")
	SubtaskRepository subtaskRepository;

	@Autowired
	@Qualifier("recoverTodoRepo")
	RecoverTodoRepository recoverTodoRepository;	
	
	@Override
	public TodoItem saveTodo(TodoItem todoItem) {
		System.out.println("saveTodo");
		
		return this.todoItemRepository.save(todoItem);
	}

	@Override
	public List<TodoItem> findAllTodo() {
		
		return this.todoItemRepository.findAll();
	}

	@Override
	public void deleteTodo(long todoItemId) {
		System.out.println("deleteTodo");
		
		this.todoItemRepository.deleteById(todoItemId);
	}

	@Override
	public TodoItem updateTodo(long todoItemId, TodoItem todoItem) {
		System.out.println("updateTodo");
		
		TodoItem todoItemToUpdate = this.todoItemRepository.getOne(todoItemId);
		todoItemToUpdate.setDescription(todoItem.getDescription());
		
		return this.saveTodo(todoItemToUpdate);
	}

	@Override
	public List<Subtask> findSubtaskForATask(long todoItemId) {
		System.out.println("findSubtaskForATask" + todoItemId);
		
		List<Subtask> subtasks = this.subtaskRepository.findAll();
		
		List<Subtask> subtaskForId = new ArrayList<>();
		
		for (Subtask s: subtasks) {
			if(s.getTodoId() == todoItemId) {
				subtaskForId.add(s);
			}
		}
		return subtaskForId;
	}


	@Override
	public TodoItem findTodoItemWithGivenId(long todoItemId) {
		System.out.println("findTodoItemWithGivenId");
		
		return this.todoItemRepository.getOne(todoItemId);
	}

	@Override
	public void saveDeleteTodoInRecoveryTable(TodoItem todo) {
		System.out.println("saveDeleteTodoInRecoveryTable");
		
		RecoverTodo deletedTodo = new RecoverTodo();
		
		deletedTodo.setId(1);
		deletedTodo.setTodo_id(todo.getId());
		deletedTodo.setDescription(todo.getDescription());
		
		this.recoverTodoRepository.save(deletedTodo);
	}
	

	@Override
	public TodoItem recoverLatestDeletedTodo() {
		System.out.println("recoverLatestDeletedTodo");
		
		RecoverTodo recoveredTodo = this.recoverTodoRepository.getOne((long) 1);
		TodoItem todo = new TodoItem();
		
		todo.setId(recoveredTodo.getTodo_id());
		todo.setDescription(recoveredTodo.getDescription());
		
		return todo;
	}
}
