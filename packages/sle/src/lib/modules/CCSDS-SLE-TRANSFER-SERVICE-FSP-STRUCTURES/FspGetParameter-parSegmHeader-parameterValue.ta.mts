/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parSegmHeader_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parSegmHeader-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parSegmHeader_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_present
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parSegmHeader_parameterValue_present: FspGetParameter_parSegmHeader_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_present
 * @constant
 * @type {number}
 */
export
const present: FspGetParameter_parSegmHeader_parameterValue = FspGetParameter_parSegmHeader_parameterValue_present; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_absent
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parSegmHeader_parameterValue_absent: FspGetParameter_parSegmHeader_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parSegmHeader_parameterValue_absent
 * @constant
 * @type {number}
 */
export
const absent: FspGetParameter_parSegmHeader_parameterValue = FspGetParameter_parSegmHeader_parameterValue_absent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FspGetParameter_parSegmHeader_parameterValue: $.ASN1Decoder<FspGetParameter_parSegmHeader_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parSegmHeader_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parSegmHeader_parameterValue (el: _Element): FspGetParameter_parSegmHeader_parameterValue {
    if (!_cached_decoder_for_FspGetParameter_parSegmHeader_parameterValue) { _cached_decoder_for_FspGetParameter_parSegmHeader_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_FspGetParameter_parSegmHeader_parameterValue(el);
}

let _cached_encoder_for_FspGetParameter_parSegmHeader_parameterValue: $.ASN1Encoder<FspGetParameter_parSegmHeader_parameterValue> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parSegmHeader_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parSegmHeader_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parSegmHeader_parameterValue (value: FspGetParameter_parSegmHeader_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parSegmHeader_parameterValue) { _cached_encoder_for_FspGetParameter_parSegmHeader_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_FspGetParameter_parSegmHeader_parameterValue(value, elGetter);
}


/* eslint-enable */
