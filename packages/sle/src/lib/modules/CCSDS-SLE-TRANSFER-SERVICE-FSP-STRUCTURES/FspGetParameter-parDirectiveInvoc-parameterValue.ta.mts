/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDirectiveInvoc-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parDirectiveInvoc_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_enabled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirectiveInvoc_parameterValue_enabled: FspGetParameter_parDirectiveInvoc_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_enabled
 * @constant
 * @type {number}
 */
export
const enabled: FspGetParameter_parDirectiveInvoc_parameterValue = FspGetParameter_parDirectiveInvoc_parameterValue_enabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_disabled
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirectiveInvoc_parameterValue_disabled: FspGetParameter_parDirectiveInvoc_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirectiveInvoc_parameterValue_disabled
 * @constant
 * @type {number}
 */
export
const disabled: FspGetParameter_parDirectiveInvoc_parameterValue = FspGetParameter_parDirectiveInvoc_parameterValue_disabled; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FspGetParameter_parDirectiveInvoc_parameterValue: $.ASN1Decoder<FspGetParameter_parDirectiveInvoc_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parDirectiveInvoc_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parDirectiveInvoc_parameterValue (el: _Element): FspGetParameter_parDirectiveInvoc_parameterValue {
    if (!_cached_decoder_for_FspGetParameter_parDirectiveInvoc_parameterValue) { _cached_decoder_for_FspGetParameter_parDirectiveInvoc_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_FspGetParameter_parDirectiveInvoc_parameterValue(el);
}

let _cached_encoder_for_FspGetParameter_parDirectiveInvoc_parameterValue: $.ASN1Encoder<FspGetParameter_parDirectiveInvoc_parameterValue> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parDirectiveInvoc_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parDirectiveInvoc_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parDirectiveInvoc_parameterValue (value: FspGetParameter_parDirectiveInvoc_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parDirectiveInvoc_parameterValue) { _cached_encoder_for_FspGetParameter_parDirectiveInvoc_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_FspGetParameter_parDirectiveInvoc_parameterValue(value, elGetter);
}


/* eslint-enable */
