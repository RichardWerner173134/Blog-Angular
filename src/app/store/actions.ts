import { createAction, props } from "@ngrx/store";
import { IBeitragResponse } from "../model/beitrag-model";

export const FetchAction = createAction(
    'Fetch Beitraege',
    props<{ 
        payload: {
            beitraege: IBeitragResponse[]; 
        }
    }>()
);

export const LoginAction = createAction(
    'User Login',
    props<{
        payload: {
            user: string,
            token: string
        }
    }>()
);

export const LogoutAction = createAction(
    'User Logout'
);