import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class ApiService {
  private Api = new BehaviorSubject<string>('vivek');
  cast = this.Api.asObservable();
  constructor() {}


    editApi(newApi){
      this.Api.next(newApi)
    }
   }


