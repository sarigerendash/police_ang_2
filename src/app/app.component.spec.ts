import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let app: AppComponent;
    let fixture: any
    let compiled: any;

    beforeEach(() => {
        const fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        compiled = fixture.nativeElement as HTMLElement;
    })

    it('should get userName', () => {
        let userName = app.getUserName('sari');
        expect(userName).toEqual('hello sari');
    });

    it('should get userName from html', () => {
        // const fixture = TestBed.createComponent(AppComponent);
        // app = fixture.componentInstance;
        // app.getData(app.userName);
        // // fixture.detectChanges();
        // const compiled = app.nativeElement as HTMLElement;
        // expect(compiled.querySelector('.user-name')?.textContent).toContain(
        //     app.userName
        // );
    });



});
