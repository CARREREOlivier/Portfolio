import {CanActivate, Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {Injectable, NgModule} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
export const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
