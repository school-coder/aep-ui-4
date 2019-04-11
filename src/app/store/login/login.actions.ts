import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public user: string) {}
}


export type LoginActions = Login;
