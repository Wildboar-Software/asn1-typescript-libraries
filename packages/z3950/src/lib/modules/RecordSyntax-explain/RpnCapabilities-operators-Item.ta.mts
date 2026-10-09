/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RpnCapabilities_operators_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RpnCapabilities-operators-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RpnCapabilities_operators_Item = INTEGER;

/**
 * @summary RpnCapabilities_operators_Item_and
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_and: RpnCapabilities_operators_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and
 * @constant
 * @type {number}
 */
export
const and: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_and; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_or
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_or: RpnCapabilities_operators_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_or
 * @constant
 * @type {number}
 */
export
const or: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_or; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and_not
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_and_not: RpnCapabilities_operators_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_and_not
 * @constant
 * @type {number}
 */
export
const and_not: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_and_not; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_prox
 * @constant
 * @type {number}
 */
export
const RpnCapabilities_operators_Item_prox: RpnCapabilities_operators_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RpnCapabilities_operators_Item_prox
 * @constant
 * @type {number}
 */
export
const prox: RpnCapabilities_operators_Item = RpnCapabilities_operators_Item_prox; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RpnCapabilities_operators_Item: $.ASN1Decoder<RpnCapabilities_operators_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RpnCapabilities_operators_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RpnCapabilities_operators_Item (el: _Element): RpnCapabilities_operators_Item {
    if (!_cached_decoder_for_RpnCapabilities_operators_Item) { _cached_decoder_for_RpnCapabilities_operators_Item = $._decodeInteger; }
    return _cached_decoder_for_RpnCapabilities_operators_Item(el);
}

let _cached_encoder_for_RpnCapabilities_operators_Item: $.ASN1Encoder<RpnCapabilities_operators_Item> | null = null;

/**
 * @summary Encodes a(n) RpnCapabilities_operators_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RpnCapabilities_operators_Item, encoded as an ASN.1 Element.
 */
export
function _encode_RpnCapabilities_operators_Item (value: RpnCapabilities_operators_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RpnCapabilities_operators_Item) { _cached_encoder_for_RpnCapabilities_operators_Item = $._encodeInteger; }
    return _cached_encoder_for_RpnCapabilities_operators_Item(value, elGetter);
}


/* eslint-enable */
