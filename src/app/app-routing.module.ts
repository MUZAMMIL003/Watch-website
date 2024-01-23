import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BrandsComponent } from './brands/brands.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RepairComponent } from './repair/repair.component';
import { RolexComponent } from './rolex/rolex.component';
import { WatchfComponent } from './watchf/watchf.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path :'rolex',component:RolexComponent},
    {path :'watchf',component:WatchfComponent},
    {path :'repair',component:RepairComponent},
    {path :'accessories',component:AccessoriesComponent},
    {path :'guide',component:GuideComponent},
    {path :'loginpage',component:LoginpageComponent},
    {path :'wishlist',component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
