/*
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Top-level page controller for the notebook editing page
 */
/// <reference path="../../../../../../../../externs/ts/angularjs/angular.d.ts" />
/// <amd-dependency path="app/components/worksheeteditor/WorksheetEditorDirective" />
/// <amd-dependency path="app/components/notebookdata/NotebookData" />
/// <amd-dependency path="app/components/notebooktitle/NotebookTitleDirective" />
/// <amd-dependency path="app/components/notebooktoolbar/NotebookToolbarDirective" />
/// <amd-dependency path="app/components/sessions/SessionEventDispatcher" />
import actions = require('app/shared/actions');
import constants = require('app/common/Constants');
import logging = require('app/common/Logging');
import _app = require('app/App');


var log = logging.getLogger(constants.scopes.notebooks.edit.page);

export class EditPageController {
  notebookData: app.INotebookData;
  notebookPath: string; // The path of the notebook to edit
  sessionStatus: any; // FIXME: TYPE

  _rootScope: ng.IRootScopeService;
  _requestId: string;
  _sessionEventDispatcher: app.ISessionEventDispatcher;

  /**
   * Constructor and arguments for Angular to inject
   */
  static $inject: string[] = [
      '$routeParams',
      '$rootScope',
      constants.notebookData.name,
      constants.sessionEventDispatcher.name];
  constructor (
      routeParams: ng.route.IRouteParamsService,
      rootScope: ng.IRootScopeService,
      notebookData: any,
      sessionEventDispatcher: app.ISessionEventDispatcher) {
    this._rootScope = rootScope;
    this.notebookData = notebookData;
    this._sessionEventDispatcher = sessionEventDispatcher;
  }
}

_app.registrar.controller(constants.notebooks.edit.pageControllerName, EditPageController);
log.debug('Registered ', constants.notebooks.edit.pageControllerName);
