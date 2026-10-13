/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parNotificationMode-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CltuGetParameter_parNotificationMode_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_deferred
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parNotificationMode_parameterValue_deferred: CltuGetParameter_parNotificationMode_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_deferred
 * @constant
 * @type {number}
 */
export
const deferred: CltuGetParameter_parNotificationMode_parameterValue = CltuGetParameter_parNotificationMode_parameterValue_deferred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_immediate
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parNotificationMode_parameterValue_immediate: CltuGetParameter_parNotificationMode_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parNotificationMode_parameterValue_immediate
 * @constant
 * @type {number}
 */
export
const immediate: CltuGetParameter_parNotificationMode_parameterValue = CltuGetParameter_parNotificationMode_parameterValue_immediate; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CltuGetParameter_parNotificationMode_parameterValue: $.ASN1Decoder<CltuGetParameter_parNotificationMode_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parNotificationMode_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parNotificationMode_parameterValue (el: _Element): CltuGetParameter_parNotificationMode_parameterValue {
    if (!_cached_decoder_for_CltuGetParameter_parNotificationMode_parameterValue) { _cached_decoder_for_CltuGetParameter_parNotificationMode_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_CltuGetParameter_parNotificationMode_parameterValue(el);
}

let _cached_encoder_for_CltuGetParameter_parNotificationMode_parameterValue: $.ASN1Encoder<CltuGetParameter_parNotificationMode_parameterValue> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parNotificationMode_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parNotificationMode_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parNotificationMode_parameterValue (value: CltuGetParameter_parNotificationMode_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parNotificationMode_parameterValue) { _cached_encoder_for_CltuGetParameter_parNotificationMode_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_CltuGetParameter_parNotificationMode_parameterValue(value, elGetter);
}


/* eslint-enable */
