import {test as base,expect} from '@playwright/test'
import { ActionsPage } from '../pages/ActionsPage';
import { DropDown } from '../pages/DropDown';
import { WebTableDate } from '../pages/WebTableDate';
import { WindowAlertFrame } from '../pages/WindowAlertFrame';


export const test = base.extend({
    ActionsPage : async({page},use)=>{
        await use(new ActionsPage (page))
    },
    DropDown : async({page},use)=>{
        await use(new DropDown(page))
    },
    WebTableDate: async({page},use)=>{
        await use(new WebTableDate(page))
    },
    WindowAlertFrame : async({page,context},use)=>{
        await use(new WindowAlertFrame(page,context))
    }

});

export {expect} ;