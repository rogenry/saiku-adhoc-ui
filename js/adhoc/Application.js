/*
 * DragResize.js
 * 
 * Copyright (c) 2012, Marius Giepz. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301  USA
 */
/**
 * Central object for handling global application state
 */
var Application = {
    /**
     * View which manages toolbar interactions
     */
    toolbar: {},
    
     /**
     * View which handles tabs
     */
    tabs: new TabSet(),

    /**
     * Model which handles session
     */
    session: null,
    
    /**
     * Global event bus
     */
    events: _.extend({}, Backbone.Events),
    
     /**
     * Collection of routers for page fragments
     */
    routers: [],
    
    
    /**
     * Convenience functions for blocking the UI
     */
    ui: {
        block: function(message) {
            $('.processing,.processing_container').fadeIn();
            $('.processing_message').text(message);
        },
        
        unblock: function() {
            $('.processing,.processing_container').fadeOut();
        }
    }
};

/**
 * Setting this option to true will fake PUT and DELETE requests 
 * with a HTTP POST, and pass them under the _method parameter. 
 * Setting this option will also set an X-HTTP-Method-Override header 
 * with the true method. This is required for BI server integration
 */
Backbone.emulateHTTP = true;

/**
 * Up up and away!

$(document).ready(function() {
    Application.session = new Session();
});
*/
 

/*
 * Constants
 */
var WORKSPACE_STATE_ERROR = 0;
var WORKSPACE_STATE_TABLE = 1;
var WORKSPACE_STATE_REPORT = 2;