import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor  {

  constructor() {}

 
}
