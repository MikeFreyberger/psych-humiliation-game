'use strict';

var ActionTypes = require('../constants/ActionTypes');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var StoreUtils = require('../utils/StoreUtils');

var utils = require('../utils/utils');

var createStore = StoreUtils.createStore;
var isInBag = StoreUtils.isInBag;
var mergeIntoBag = StoreUtils.mergeIntoBag;

var _storedObjects = {};

var userId;

var ObjectStore = createStore({

  saveId: function(id) {
    userId = id;
  },

  getUserId: function() {
    return userId;
  }
});

ObjectStore.dispatchToken = AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.type) {

    case ActionTypes.REQUEST_OBJECT_SUCCESS:
      mergeIntoBag(_storedObjects, action.response.id, action.response);
      ObjectStore.emitChange();
      break;

     default:
    // do nothing
  }
})

module.exports = ObjectStore;
