/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspInvokeDirectiveInvocation-directive-setTimeoutType ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FspInvokeDirectiveInvocation_directive_setTimeoutType = INTEGER;

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD
 * @constant
 * @type {number}
 */
export
const FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD
 * @constant
 * @type {number}
 */
export
const terminateAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD
 * @constant
 * @type {number}
 */
export
const FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD
 * @constant
 * @type {number}
 */
export
const suspendAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType: $.ASN1Decoder<FspInvokeDirectiveInvocation_directive_setTimeoutType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspInvokeDirectiveInvocation_directive_setTimeoutType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspInvokeDirectiveInvocation_directive_setTimeoutType (el: _Element): FspInvokeDirectiveInvocation_directive_setTimeoutType {
    if (!_cached_decoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType) { _cached_decoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType = $._decodeInteger; }
    return _cached_decoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType(el);
}

let _cached_encoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType: $.ASN1Encoder<FspInvokeDirectiveInvocation_directive_setTimeoutType> | null = null;

/**
 * @summary Encodes a(n) FspInvokeDirectiveInvocation_directive_setTimeoutType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspInvokeDirectiveInvocation_directive_setTimeoutType, encoded as an ASN.1 Element.
 */
export
function _encode_FspInvokeDirectiveInvocation_directive_setTimeoutType (value: FspInvokeDirectiveInvocation_directive_setTimeoutType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType) { _cached_encoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType = $._encodeInteger; }
    return _cached_encoder_for_FspInvokeDirectiveInvocation_directive_setTimeoutType(value, elGetter);
}


/* eslint-enable */
