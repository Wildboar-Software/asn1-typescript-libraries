/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectionOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionOperation  ::= 
 *     INTEGER {
 *         absolute   (0),  -- default. sources contains absolute information
 *         connect    (1),  -- nToN only. sources contains sources to add to connection
 *         disconnect (2)   -- nToN only. sources contains sources to remove from connection
 *     }
 * ```
 */
export
type ConnectionOperation = INTEGER;

/**
 * @summary ConnectionOperation_absolute
 * @constant
 * @type {number}
 */
export
const ConnectionOperation_absolute: ConnectionOperation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionOperation_absolute
 * @constant
 * @type {number}
 */
export
const absolute: ConnectionOperation = ConnectionOperation_absolute; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionOperation_connect
 * @constant
 * @type {number}
 */
export
const ConnectionOperation_connect: ConnectionOperation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionOperation_connect
 * @constant
 * @type {number}
 */
export
const connect: ConnectionOperation = ConnectionOperation_connect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionOperation_disconnect
 * @constant
 * @type {number}
 */
export
const ConnectionOperation_disconnect: ConnectionOperation = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectionOperation_disconnect
 * @constant
 * @type {number}
 */
export
const disconnect: ConnectionOperation = ConnectionOperation_disconnect; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ConnectionOperation: $.ASN1Decoder<ConnectionOperation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionOperation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionOperation (el: _Element): ConnectionOperation {
    if (!_cached_decoder_for_ConnectionOperation) { _cached_decoder_for_ConnectionOperation = $._decodeInteger; }
    return _cached_decoder_for_ConnectionOperation(el);
}

let _cached_encoder_for_ConnectionOperation: $.ASN1Encoder<ConnectionOperation> | null = null;

/**
 * @summary Encodes a(n) ConnectionOperation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionOperation, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionOperation (value: ConnectionOperation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionOperation) { _cached_encoder_for_ConnectionOperation = $._encodeInteger; }
    return _cached_encoder_for_ConnectionOperation(value, elGetter);
}


/* eslint-enable */
