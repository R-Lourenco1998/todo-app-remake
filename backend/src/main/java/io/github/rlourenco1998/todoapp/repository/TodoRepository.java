package io.github.rlourenco1998.todoapp.repository;

import io.github.rlourenco1998.todoapp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository <Todo, Long> {

}
