import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;
  let HttpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    //HttpClient = TestBed.get(HttpClient);
    service = TestBed.inject(SampleService); //DI for service class
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addition of two numbers testing',()=>{
    let result = service.addNumber(10,20);
    expect(30).toEqual(result);
  });

  it("Fake service Testting",()=>{
    service.getFakeRestAPI().subscribe({
      next:(data:any)=>{
        console.log(data);
        console.log(data.length);
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>console.log("completed")
    });
  });
});
