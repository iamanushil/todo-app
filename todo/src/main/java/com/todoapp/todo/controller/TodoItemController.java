package com.todoapp.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.todoapp.todo.entity.TodoItem;
import com.todoapp.todo.service.TodoItemService;


@Controller
@RequestMapping(value="/todos")
public class TodoItemController {
	
	@Autowired
	TodoItemService todoItemService;
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public @ResponseBody TodoItem createTodoItem(@RequestBody TodoItem todoItem) {
		return todoItemService.saveTodo(todoItem);
	}

	@RequestMapping(value="", method=RequestMethod.GET)
	public @ResponseBody List<TodoItem> findAll() {
		return todoItemService.findAllTodo();
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public @ResponseBody void delete(@PathVariable("id") long todoItemId) {
		todoItemService.deleteTodo(todoItemId);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PUT)
	public @ResponseBody TodoItem update(@PathVariable("id") long todoItemId, @RequestBody TodoItem todoItem) {
		return todoItemService.updateTodo(todoItemId, todoItem);
	}

}
