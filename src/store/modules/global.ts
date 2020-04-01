import { GetterTree } from 'vuex';
import todo from './todo';
import {ArtisanDisplay} from '../../Models/ArtisanModel'

export const state= {
    globalstate:"from global state",
    todolist:[{
        name: "saikat",
        roll:2000
    },{
        name: "niloy",
        roll:2000
    }],
    globalTodoList:null,
    showArtisan: null,
    artisanListData : [
            
        {   id:1,
            projectName:"Zaproid" ,
            technology: "Unity",
            details:"Video games are real-time experiences because they respond instantly to player input. Every image you see on your monitor or in your VR headset is built by the computer and pushed to the display in a fraction of a second, sometimes hundreds of times a second", 
        },
        {   
            id:2,
            projectName:"CRM" ,
            technology: "Angular",
            details:"AngularJs is Javascript framework and it becomes very important now days, you can create very beautiful and useful single screen pages using AngularJs.",
        },{ 
            id:3,
            projectName:"Monitoring" ,
            technology: "Vue",
            details:"Vue. js Practice Project Ideas. QR Code Generator (Beginner) There's a cool little service, QRtag.net, that lets you generate QR codes on the fly without any kind of backend process",
        }
    ]
 }

 export const getters: GetterTree<any,any> = {
     globalGetter: state=> state.globalstate,
     globalList: state=> state.todolist,
     globalTodoList: state=> state.globalTodoList,
     showArtisan: state=>state.showArtisan,
     artisanListData: state=>state.artisanListData,
 }

 export default{
     state,
     getters
 }
