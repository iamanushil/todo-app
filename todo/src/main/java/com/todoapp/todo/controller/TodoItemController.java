package com.todoapp.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.todoapp.todo.entity.Subtask;
import com.todoapp.todo.entity.TodoItem;
import com.todoapp.todo.service.TodoItemService;

@Controller
@RequestMapping(value = "/api/todos")
public class TodoItemController {

	@Autowired
	TodoItemService todoItemService;

	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody TodoItem createTodoItem(@RequestBody TodoItem todoItem) {
		return todoItemService.saveTodo(todoItem);
	}

	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody List<TodoItem> findAllTodo() {
		return todoItemService.findAllTodo();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public @ResponseBody void deleteATodo(@PathVariable("id") long todoItemId) {

		// for making a recovery of todo
		TodoItem recentlyDeletedTodod = todoItemService.findTodoItemWithGivenId(todoItemId);
		todoItemService.saveDeleteTodoInRecoveryTable(recentlyDeletedTodod);

		// delete the item with id
		todoItemService.deleteTodo(todoItemId);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public @ResponseBody TodoItem updateATodo(@PathVariable("id") long todoItemId, @RequestBody TodoItem todoItem) {
		return todoItemService.updateTodo(todoItemId, todoItem);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody List<Subtask> getSubTaskForATodo(@PathVariable("id") long todoItemId) {
		return todoItemService.findSubtaskForATask(todoItemId);
	}

	@RequestMapping(value = "/recover", method = RequestMethod.GET)
	public @ResponseBody TodoItem recoverLatestDeletedTodo() {
		TodoItem recoveredTodo = todoItemService.recoverLatestDeletedTodo();
		
		List<TodoItem> todos = todoItemService.findAllTodo();
		for (TodoItem todo: todos) {
			if(todo.getId() == recoveredTodo.getId()) {
				return null;
			}
		}
		return todoItemService.saveTodo(recoveredTodo);
	}

}
