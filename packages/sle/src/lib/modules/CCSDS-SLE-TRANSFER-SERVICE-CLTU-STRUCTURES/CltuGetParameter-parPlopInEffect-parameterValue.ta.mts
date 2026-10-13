/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parPlopInEffect-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CltuGetParameter_parPlopInEffect_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop1
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parPlopInEffect_parameterValue_plop1: CltuGetParameter_parPlopInEffect_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop1
 * @constant
 * @type {number}
 */
export
const plop1: CltuGetParameter_parPlopInEffect_parameterValue = CltuGetParameter_parPlopInEffect_parameterValue_plop1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop2
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parPlopInEffect_parameterValue_plop2: CltuGetParameter_parPlopInEffect_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop2
 * @constant
 * @type {number}
 */
export
const plop2: CltuGetParameter_parPlopInEffect_parameterValue = CltuGetParameter_parPlopInEffect_parameterValue_plop2; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CltuGetParameter_parPlopInEffect_parameterValue: $.ASN1Decoder<CltuGetParameter_parPlopInEffect_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parPlopInEffect_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parPlopInEffect_parameterValue (el: _Element): CltuGetParameter_parPlopInEffect_parameterValue {
    if (!_cached_decoder_for_CltuGetParameter_parPlopInEffect_parameterValue) { _cached_decoder_for_CltuGetParameter_parPlopInEffect_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_CltuGetParameter_parPlopInEffect_parameterValue(el);
}

let _cached_encoder_for_CltuGetParameter_parPlopInEffect_parameterValue: $.ASN1Encoder<CltuGetParameter_parPlopInEffect_parameterValue> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parPlopInEffect_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parPlopInEffect_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parPlopInEffect_parameterValue (value: CltuGetParameter_parPlopInEffect_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parPlopInEffect_parameterValue) { _cached_encoder_for_CltuGetParameter_parPlopInEffect_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_CltuGetParameter_parPlopInEffect_parameterValue(value, elGetter);
}


/* eslint-enable */
