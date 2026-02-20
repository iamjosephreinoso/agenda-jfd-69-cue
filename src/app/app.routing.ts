import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './sections/menu/menu.component';
import { GroupsComponent } from './sections/groups/groups.component';
import { InvestigacionComponent } from './sections/investigacion/investigacion.component';
import {TrainingComponent} from "./sections/training/training.component";
import {UnissmaComponent} from "./sections/unissma/unissma.component";
import {LineaComponent} from "./sections/linea/linea.component";
import {LalaComponent} from "./sections/lala/lala.component";
import {AcreditacionComponent} from "./sections/acreditacion/acreditacion.component";
import {AvacComponent} from "./sections/avac/avac.component";
import {FormComponent} from "./sections/form/form.component";
import {GeneralCallComponent} from "./sections/general-call/general-call.component";

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'teacher_training',     component: TrainingComponent},
    { path: 'signup',           component: MenuComponent },
    { path: 'groups',          component: GroupsComponent },
    { path: 'investigation',      component: InvestigacionComponent },
    {path: "unissma", component: UnissmaComponent},
    {path: "unadedvi", component: LineaComponent},
    {path: "lala", component: LalaComponent},
    {path: "acreditation", component: AcreditacionComponent},
    {path: "avac", component: AvacComponent},
    {path: "form", component: FormComponent},
    {path: "general_call", component: GeneralCallComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
