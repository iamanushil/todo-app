package com.todoapp.todo.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todoapp.todo.entity.Subtask;

@Repository
@Qualifier("subRepo")
public interface SubtaskRepository extends JpaRepository<Subtask, Long>{

}
