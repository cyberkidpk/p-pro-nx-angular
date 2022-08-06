import { TestBed } from '@angular/core/testing';
import { AppComponentRemote } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponentRemote, NxWelcomeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponentRemote);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'p-pro-ng-nx-remote'`, () => {
    const fixture = TestBed.createComponent(AppComponentRemote);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('p-pro-ng-nx-remote');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponentRemote);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome p-pro-ng-nx-remote'
    );
  });
});
