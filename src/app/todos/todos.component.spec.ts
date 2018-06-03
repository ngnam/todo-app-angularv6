import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoModel } from '../shared/models/todo.model';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new TodoModel()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new TodoModel({
      title: 'hello',
      complete: true,
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});

