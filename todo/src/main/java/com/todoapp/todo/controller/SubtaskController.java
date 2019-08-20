package com.todoapp.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.todoapp.todo.entity.Subtask;
import com.todoapp.todo.service.SubtaskService;

@Controller
@RequestMapping(value = "/api/todos/subtask")
public class SubtaskController {
	
	@Autowired
	SubtaskService subtaskService;
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody Subtask createSubtask(@RequestBody Subtask subtask) {	
		System.out.println("createSubtask");
	
		return subtaskService.saveSubTaskToATodo(subtask);
	}
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody List<Subtask> getAllSubtask() {	
		System.out.println("getAllSubtask");
	
		return subtaskService.findAllSubtask();
	}
}
