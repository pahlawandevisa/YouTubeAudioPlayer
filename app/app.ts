import {bootstrap} from 'angular2/platform/browser';
import {Component, View, NgZone} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Resultlist} from './components/resultlist/resultlist';
import {Search} from './components/search/search';
import {Player} from './components/player/player';
import {Sidebar} from './components/sidebar/sidebar';
import {ResultService} from './components/resultlist/resultservice';
import {SysCom} from './components/syscom';
import {PlaylistService} from './components/sidebar/sidebarservice';

const electron = require('electron');
const ipc = electron.ipcRenderer;

@Component({
  selector: 'app'
})
@View({
  directives: [Search, Resultlist, Player, Sidebar],
  template: `
    <div id="SearchAndResult" flex="80">
      <search></search>
      <resultlist></resultlist> 
    </div>
    <sidebar id="SidebarMain" flex=20></sidebar>
    <player id="PlayerMain"></player>
  ` ,
  styles: [`
    #SearchAndResult {
      height: calc(100% - 90px);
    }
    #SidebarMain {
      /*max-height: 270px;*/
      height: calc(100% - 90px);
    }
    #PlayerMain {
      margin: 5px;
      height: 80px;
    }
  `]
})

export class App {

  constructor() {}
}

bootstrap(App, [ResultService, SysCom, PlaylistService]);