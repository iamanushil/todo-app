package com.todoapp.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.todoapp.todo.entity.Subtask;
import com.todoapp.todo.repository.SubtaskRepository;

@Service
public class SubtaskServiceImpl implements SubtaskService{
	
	@Autowired
	@Qualifier("subRepo")
	SubtaskRepository subtaskRepository;

	@Override
	public Subtask saveSubTaskToATodo(Subtask subtask) {
		System.out.println("saveSubTaskToATodo");
		
		return this.subtaskRepository.save(subtask);
	}
	
}
