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
export const _decode_FspInvokeDirectiveInvocation_directive_setTimeoutType: $.ASN1Decoder<FspInvokeDirectiveInvocation_directive_setTimeoutType> = $._decodeInteger;
export const _encode_FspInvokeDirectiveInvocation_directive_setTimeoutType: $.ASN1Encoder<FspInvokeDirectiveInvocation_directive_setTimeoutType> = $._encodeInteger;


/* eslint-enable */
