import { createAction, createReducer, on, props } from '@ngrx/store'
import { Coffee } from '../models/coffee';
import { Page } from '../models/page';

export const updateAction = createAction('[COFFEE COMPONENT] update list', props<Page<Coffee>>())
export const selectCoffeeAction = createAction('[COFFEE COMPONENT] update selected coffee', props<Coffee>())

const initialState = new Page<Coffee>();

export const coffeeReducer = createReducer(
    initialState, 
    on(updateAction, (state, action) => action),
    on(selectCoffeeAction, (state, action) => {
        return {...state, selectedItem: action}
    }));



