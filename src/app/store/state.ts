import { IBeitragResponse } from "../model/beitrag-model";

export const initialState = {
    user: '',
    token: '',
    beitraege: []
}

export interface IAppstate{
    user: string,
    token: string,
    beitraege: IBeitragResponse[]
}