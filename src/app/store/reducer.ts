import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { FetchAction, LoginAction, LogoutAction } from "./actions";
import { initialState } from "./state";



export const reducer = createReducer(
    initialState,
    on(FetchAction, (state, { payload }) => ({
      ...state,
     beitraege: payload.beitraege
    })),
    on(LoginAction, (state, { payload }) => ({
        ...state,
        user: payload.user,
        token: payload.token
    })),
    on(LogoutAction, (state) => ({
        ...state,
        user: '',
        token: ''
    }))
);