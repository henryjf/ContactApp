import angular from 'angular';
import 'angular-ui-router';

//import  Controllers
import { ListController } from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController } from './controllers/add.controller';

//import Configuration
import { config } from './config';

const url = 'https://secret-forest-21470.herokuapp.com/collections/3r4td/';

//Start Angular
angular
//setter for a module
  .module('app', ['ui.router'])
  //register configuration
  .config(config)

  //app URL Constant
  .constant('URL', url)

  // register controllers
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController)
  ;
