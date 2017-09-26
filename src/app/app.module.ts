import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent }       from './login.component';
import { LoginRoutingModule }   from './login-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService), 
		PokemonsModule, // L'odre de chargement des modules est très important
		LoginRoutingModule,
		AppRoutingModule// pour l'ordre de déclaration des routes !
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PageNotFoundComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }