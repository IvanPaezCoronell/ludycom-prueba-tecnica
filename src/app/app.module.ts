import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { AreasComponent } from './components/areas/areas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from './environment/environment';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'areas', component: AreasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    AreasComponent,
    PageNotFoundComponent,
    CreateUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
