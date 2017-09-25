import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService, User} from '../services/login-service/login-service';

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(private loginService: LoginService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<User> {
    return this.loginService.getCurrentUser();
  }
}
