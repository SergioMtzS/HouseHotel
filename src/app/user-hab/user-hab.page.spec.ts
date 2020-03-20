import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserHabPage } from './user-hab.page';

describe('UserHabPage', () => {
  let component: UserHabPage;
  let fixture: ComponentFixture<UserHabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserHabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
