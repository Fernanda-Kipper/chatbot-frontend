import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSuggestionsComponent } from './chat-suggestions.component';

describe('ChatSuggestionsComponent', () => {
  let component: ChatSuggestionsComponent;
  let fixture: ComponentFixture<ChatSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSuggestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
