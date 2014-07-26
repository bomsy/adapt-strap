/**
 * adapt-strap
 * @version v0.0.3 - 2014-07-26
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/tablelite.tpl.html', '<div class="adap-table-lite-container"><table class="%=tableClasses%"><tr><th data-ng-repeat="definition in %=columnDefinition%">{{ definition.columnHeaderDisplayName }}</th></tr><tr data-ng-repeat="item in %=tableName%.items"><td data-ng-repeat="definition in %=columnDefinition%"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="!definition.templateUrl">{{ formatValue(item[definition.displayProperty], definition.cellFilter) }}</div></td></tr></table></div>');
  }
]);