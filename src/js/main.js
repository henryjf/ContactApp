import angular from 'angular';

//import  Controllers
import { ListController } from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController } from './controllers/add.controller';

//import Configuration
import { config } from './config';


//Start Angular
angular
//setter for a module
  .module('app', []);
  //register configuration
  .config(config)

  //register controllers
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController)
  ;
