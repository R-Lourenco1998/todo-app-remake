package io.github.rlourenco1998.todoapp.rest;

import io.github.rlourenco1998.todoapp.model.Todo;
import io.github.rlourenco1998.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:4200")
// http://localhost:4200 dev
// https://r-lourenco1998.github.io prod
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @PostMapping
    public Todo save(@RequestBody Todo todo){
        return todoRepository.save(todo);
    }

    @GetMapping("/{id}")
    public Todo getById(@PathVariable Long id){
        return todoRepository.
                findById(id).
                orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public List<Todo> getAll(){
        return todoRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        todoRepository.deleteById(id);
    }


    @PatchMapping("/{id}/done")
    public Todo markAsDone(@PathVariable Long id){
        return todoRepository.findById(id).map(todo -> {
            todo.setDone(true);
            todo.setDoneDate(LocalDateTime.now());
            todoRepository.save(todo);
            return todo;
        }).orElse(null);
    }
}
