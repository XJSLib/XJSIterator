var XJSIterator = ( function ( ) {
    'use strict';
    // constructor
    function XJSIterator( items ) {
        items = Array.toArray( items );
        this.index = 0;
        this.items = items;
        return this;
    }
    // prototype
    Object.defineProperties( XJSIterator.prototype, {
        clone: {
            value: function ( sameIndex ) {
                var clone = new this.constructor( this.items );
                if ( sameIndex || arguments.length < 1 ) {
                    clone.index = this.index;
                }
                return clone;
            },
            enumerable: true
        },
        done: {
            get: function ( ) {
                return this.index >= this.length;
            },
            enumerable: true
        },
        forEach: {
            value: function ( callback, that ) {
                var index;
                do {
                    index = this.index;
                    callback.call( that, this.item, index, this );
                    if ( this.index === index ) {
                        this.increment( );
                    }
                } while ( ! this.done );
            },
            enumerable: true
        },
        increment: {
            value: function ( number ) {
                if ( arguments.length < 1 ) {
                    ++this.index;
                } else {
                    this.index += number >>> 0;
                }
                return this;
            },
            enumerable: true
        },
        item: {
            get: function ( ) {
                return this.items[ this.index ];
            },
            enumerable: true
        },
        length: {
            get: function ( ) {
                return this.items.length;
            },
            enumerable: true
        },
        next: {
            value: function ( number ) {
                return this.increment( ).item;
            },
            enumerable: true
        }
    } );
    // expose
    return XJSIterator;
} )( );