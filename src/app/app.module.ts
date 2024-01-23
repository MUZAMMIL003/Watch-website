import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BrandsComponent } from './brands/brands.component';
import { RolexComponent } from './rolex/rolex.component';
import { WatchfComponent } from './watchf/watchf.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { RepairComponent } from './repair/repair.component';
import { GuideComponent } from './guide/guide.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthserviceComponent } from './authservice/authservice.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './authservice.service';
import { environment } from 'src/environments/environment';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BrandsComponent,
    RolexComponent,
    WatchfComponent,
    AccessoriesComponent,
    RepairComponent,
    GuideComponent,
    NavbarComponent,
    HomeComponent,
    LoginpageComponent,
    AuthserviceComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
