package com.todoapp.todo.service;

import java.util.List;

import com.todoapp.todo.entity.Subtask;

public interface SubtaskService {

	public Subtask saveSubTaskToATodo(Subtask subtask);
	
	public List<Subtask> findAllSubtask();
}
