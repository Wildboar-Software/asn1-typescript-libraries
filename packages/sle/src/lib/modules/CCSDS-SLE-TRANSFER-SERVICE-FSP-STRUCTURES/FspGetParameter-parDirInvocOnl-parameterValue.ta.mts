/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parDirInvocOnl-parameterValue ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspGetParameter_parDirInvocOnl_parameterValue = INTEGER;

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirInvocOnl_parameterValue_yes: FspGetParameter_parDirInvocOnl_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_yes
 * @constant
 * @type {number}
 */
export
const yes: FspGetParameter_parDirInvocOnl_parameterValue = FspGetParameter_parDirInvocOnl_parameterValue_yes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_no
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parDirInvocOnl_parameterValue_no: FspGetParameter_parDirInvocOnl_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parDirInvocOnl_parameterValue_no
 * @constant
 * @type {number}
 */
export
const no: FspGetParameter_parDirInvocOnl_parameterValue = FspGetParameter_parDirInvocOnl_parameterValue_no; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FspGetParameter_parDirInvocOnl_parameterValue: $.ASN1Decoder<FspGetParameter_parDirInvocOnl_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parDirInvocOnl_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parDirInvocOnl_parameterValue (el: _Element): FspGetParameter_parDirInvocOnl_parameterValue {
    if (!_cached_decoder_for_FspGetParameter_parDirInvocOnl_parameterValue) { _cached_decoder_for_FspGetParameter_parDirInvocOnl_parameterValue = $._decodeInteger; }
    return _cached_decoder_for_FspGetParameter_parDirInvocOnl_parameterValue(el);
}

let _cached_encoder_for_FspGetParameter_parDirInvocOnl_parameterValue: $.ASN1Encoder<FspGetParameter_parDirInvocOnl_parameterValue> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parDirInvocOnl_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parDirInvocOnl_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parDirInvocOnl_parameterValue (value: FspGetParameter_parDirInvocOnl_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parDirInvocOnl_parameterValue) { _cached_encoder_for_FspGetParameter_parDirInvocOnl_parameterValue = $._encodeInteger; }
    return _cached_encoder_for_FspGetParameter_parDirInvocOnl_parameterValue(value, elGetter);
}


/* eslint-enable */
