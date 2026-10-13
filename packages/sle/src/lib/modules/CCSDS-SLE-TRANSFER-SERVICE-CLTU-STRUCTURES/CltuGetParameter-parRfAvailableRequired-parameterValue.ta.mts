/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parRfAvailableRequired-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CltuGetParameter_parRfAvailableRequired_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parRfAvailableRequired_parameterValue_yes: CltuGetParameter_parRfAvailableRequired_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const yes: CltuGetParameter_parRfAvailableRequired_parameterValue = CltuGetParameter_parRfAvailableRequired_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parRfAvailableRequired_parameterValue_no: CltuGetParameter_parRfAvailableRequired_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parRfAvailableRequired_parameterValue_no
 * @constant
 * @type {number}
 */
export
const no: CltuGetParameter_parRfAvailableRequired_parameterValue = CltuGetParameter_parRfAvailableRequired_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Decoder<CltuGetParameter_parRfAvailableRequired_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parRfAvailableRequired_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parRfAvailableRequired_parameterValue (el: _Element): CltuGetParameter_parRfAvailableRequired_parameterValue {
    if (!_cached_decoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue) { _cached_decoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue(el);
}

let _cached_encoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue: $.ASN1Encoder<CltuGetParameter_parRfAvailableRequired_parameterValue> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parRfAvailableRequired_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parRfAvailableRequired_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parRfAvailableRequired_parameterValue (value: CltuGetParameter_parRfAvailableRequired_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue) { _cached_encoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_CltuGetParameter_parRfAvailableRequired_parameterValue(value, elGetter);
}


/* eslint-enable */
