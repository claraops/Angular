import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPostsComponent } from './list-posts.component';
import { ListTodosComponent } from '../../component/list-todos/list-todos.component';

describe('ListPostsComponent', () => {
  let component: ListPostsComponent;
  let fixture: ComponentFixture<ListPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
