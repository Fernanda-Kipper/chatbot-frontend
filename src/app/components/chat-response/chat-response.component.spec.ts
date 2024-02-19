import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatResponseComponent } from './chat-response.component';

describe('ChatResponseComponent', () => {
  let component: ChatResponseComponent;
  let fixture: ComponentFixture<ChatResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
