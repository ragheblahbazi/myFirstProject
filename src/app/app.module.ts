import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { TestClassComponent } from './test-class/test-class.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { ProductsComponent } from './Components/products/products.component';
import { ObservableTestComponent } from './Components/observable-test/observable-test.component';
import { PipetestComponent } from './Components/pipetest/pipetest.component';
import { FormtestComponent } from './Components/formtest/formtest.component';
import { Login1Component } from './Components/login1/login1.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    TestClassComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ObservableTestComponent,
    PipetestComponent,
    FormtestComponent,
    Login1Component
   


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 