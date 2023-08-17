import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { ProductsComponent } from './Components/products/products.component';
import { observable } from 'rxjs';
import { ObservableTestComponent } from './Components/observable-test/observable-test.component';
import { PipetestComponent } from './Components/pipetest/pipetest.component';
import { FormtestComponent } from './Components/formtest/formtest.component';
import { Login1Component } from './Components/login1/login1.component';

const routes: Routes = [

  {path: "user",component:UserComponent },
  {path:"register",component:RegisterComponent},
  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"products",component:ProductsComponent},
  {path:"observable",component:ObservableTestComponent},
  {path:"pipetest",component:PipetestComponent},
  {path:"formulaire",component:FormtestComponent},
  {path:"login",component:Login1Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
