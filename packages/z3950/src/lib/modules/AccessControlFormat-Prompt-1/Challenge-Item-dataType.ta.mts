/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Challenge_Item_dataType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge-Item-dataType ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Challenge_Item_dataType = INTEGER;

/**
 * @summary Challenge_Item_dataType_integer
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_integer: Challenge_Item_dataType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_integer
 * @constant
 * @type {number}
 */
export
const integer: Challenge_Item_dataType = Challenge_Item_dataType_integer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_date
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_date: Challenge_Item_dataType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_date
 * @constant
 * @type {number}
 */
export
const date: Challenge_Item_dataType = Challenge_Item_dataType_date; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_float
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_float: Challenge_Item_dataType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_float
 * @constant
 * @type {number}
 */
export
const float: Challenge_Item_dataType = Challenge_Item_dataType_float; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_alphaNumeric
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_alphaNumeric: Challenge_Item_dataType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_alphaNumeric
 * @constant
 * @type {number}
 */
export
const alphaNumeric: Challenge_Item_dataType = Challenge_Item_dataType_alphaNumeric; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_url_urn
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_url_urn: Challenge_Item_dataType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_url_urn
 * @constant
 * @type {number}
 */
export
const url_urn: Challenge_Item_dataType = Challenge_Item_dataType_url_urn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_boolean_
 * @constant
 * @type {number}
 */
export
const Challenge_Item_dataType_boolean_: Challenge_Item_dataType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Challenge_Item_dataType_boolean_
 * @constant
 * @type {number}
 */
export
const boolean_: Challenge_Item_dataType = Challenge_Item_dataType_boolean_; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Challenge_Item_dataType: $.ASN1Decoder<Challenge_Item_dataType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Challenge_Item_dataType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Challenge_Item_dataType (el: _Element): Challenge_Item_dataType {
    if (!_cached_decoder_for_Challenge_Item_dataType) { _cached_decoder_for_Challenge_Item_dataType = $._decodeInteger; }
    return _cached_decoder_for_Challenge_Item_dataType(el);
}

let _cached_encoder_for_Challenge_Item_dataType: $.ASN1Encoder<Challenge_Item_dataType> | null = null;

/**
 * @summary Encodes a(n) Challenge_Item_dataType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Challenge_Item_dataType, encoded as an ASN.1 Element.
 */
export
function _encode_Challenge_Item_dataType (value: Challenge_Item_dataType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Challenge_Item_dataType) { _cached_encoder_for_Challenge_Item_dataType = $._encodeInteger; }
    return _cached_encoder_for_Challenge_Item_dataType(value, elGetter);
}


/* eslint-enable */
