/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parTimeoutType_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parTimeoutType-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parTimeoutType_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_generateAlert
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parTimeoutType_parameterValue_generateAlert: FspGetParameter_parTimeoutType_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_generateAlert
 * @constant
 * @type {number}
 */
export
const generateAlert: FspGetParameter_parTimeoutType_parameterValue = FspGetParameter_parTimeoutType_parameterValue_generateAlert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled: FspGetParameter_parTimeoutType_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled
 * @constant
 * @type {number}
 */
export
const suspendSequenceControlled: FspGetParameter_parTimeoutType_parameterValue = FspGetParameter_parTimeoutType_parameterValue_suspendSequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FspGetParameter_parTimeoutType_parameterValue: $.ASN1Decoder<FspGetParameter_parTimeoutType_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parTimeoutType_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parTimeoutType_parameterValue (el: _Element): FspGetParameter_parTimeoutType_parameterValue {
    if (!_cached_decoder_for_FspGetParameter_parTimeoutType_parameterValue) { _cached_decoder_for_FspGetParameter_parTimeoutType_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_FspGetParameter_parTimeoutType_parameterValue(el);
}

let _cached_encoder_for_FspGetParameter_parTimeoutType_parameterValue: $.ASN1Encoder<FspGetParameter_parTimeoutType_parameterValue> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parTimeoutType_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parTimeoutType_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parTimeoutType_parameterValue (value: FspGetParameter_parTimeoutType_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parTimeoutType_parameterValue) { _cached_encoder_for_FspGetParameter_parTimeoutType_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_FspGetParameter_parTimeoutType_parameterValue(value, elGetter);
}


/* eslint-enable */
