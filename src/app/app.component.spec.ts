import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SampleService } from './sample.service';
let app:any;
let child:any;
//let service:any;

describe('AppComponent', () => {
  //to load again n again
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,ChildComponent
      ],
    }).compileComponents(); //provide Appcomponent details like load and compile it

    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    const fixture1 = TestBed.createComponent(ChildComponent);
    child = fixture1.componentInstance;

    //const fixture2 = TestBed.createComponent(SampleService);
    //service = fixture2.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; //app is reference of Appcomponent
    expect(app).toBeTruthy();   //app reference created
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing'); //testing variable value
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //load the HTML Page
    const compiled = fixture.nativeElement as HTMLElement; //Dom reference ..compile is equal to document
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
  });

  it(`Angular property & function testing`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.id).toEqual(100); //testing variable value
    expect(app.name).toEqual("Ravi Sharma");
    expect(app.result).toBeTruthy();
    expect(app.num.length).toEqual(6);
    expect(app.num[0]).toEqual(10);

    let result = app.sayHello("Ravi");
    expect(result).toContain("Ravi");


  });

  it(`Child component testing from app component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(child.msg).toEqual("child-component"); //testing variable value
    
  });

  /*it('addition of two numbers testing',()=>{
    let result = service.addNumber(10,20);
    expect(30).toEqual(result);
  });
  */

});
