package com.todoapp.todo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="recovery")
public class RecoverTodo {
	
	@Id
	private long id;
	
	private String description;
	
	private long todo_id;
	
	public long getTodo_id() {
		return todo_id;
	}

	public void setTodo_id(long todo_id) {
		this.todo_id = todo_id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
