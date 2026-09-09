/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConnectionView
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionView  ::=  ENUMERATED
 * {    fixed                         (0),
 *     local                         (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConnectionView {
    fixed = 0,
    local = 1,
}

/**
 * @summary ConnectionView
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionView  ::=  ENUMERATED
 * {    fixed                         (0),
 *     local                         (1) }
 * ```
 * 
 * @enum {number}
 */
export
type ConnectionView = _enum_for_ConnectionView;

/**
 * @summary ConnectionView
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionView  ::=  ENUMERATED
 * {    fixed                         (0),
 *     local                         (1) }
 * ```
 * 
 * @enum {number}
 */
export
const ConnectionView = _enum_for_ConnectionView;

/**
 * @summary ConnectionView_fixed
 * @constant
 * @type {number}
 */
export
const ConnectionView_fixed: ConnectionView = ConnectionView.fixed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fixed
 * @constant
 * @type {number}
 */
export
const fixed: ConnectionView = ConnectionView.fixed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectionView_local
 * @constant
 * @type {number}
 */
export
const ConnectionView_local: ConnectionView = ConnectionView.local; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local
 * @constant
 * @type {number}
 */
export
const local: ConnectionView = ConnectionView.local; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ConnectionView: $.ASN1Decoder<ConnectionView> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionView
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionView (el: _Element): ConnectionView {
    if (!_cached_decoder_for_ConnectionView) { _cached_decoder_for_ConnectionView = $._decodeEnumerated; }
    return _cached_decoder_for_ConnectionView(el);
}

let _cached_encoder_for_ConnectionView: $.ASN1Encoder<ConnectionView> | null = null;

/**
 * @summary Encodes a(n) ConnectionView into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionView, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionView (value: ConnectionView, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionView) { _cached_encoder_for_ConnectionView = $._encodeEnumerated; }
    return _cached_encoder_for_ConnectionView(value, elGetter);
}


/* eslint-enable */
