import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  onSubmit() {
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      activity: true,
    }
    this.todoAdd.emit(todo);
  }
}
