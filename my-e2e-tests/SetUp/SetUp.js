import {test as base,expect} from '@playwright/test'
import { ActionsPage } from '../pages/ActionsPage';
import { DropDown } from '../pages/DropDown';
import { WebTableDate } from '../pages/WebTableDate';


export const test = base.extend({
    ActionsPage : async({page},use)=>{
        await use(new ActionsPage (page))
    },
    DropDown : async({page},use)=>{
        await use(new DropDown(page))
    },
    WebTableDate: async({page},use)=>{
        await use(new WebTableDate(page))
    }

});

export {expect} ;