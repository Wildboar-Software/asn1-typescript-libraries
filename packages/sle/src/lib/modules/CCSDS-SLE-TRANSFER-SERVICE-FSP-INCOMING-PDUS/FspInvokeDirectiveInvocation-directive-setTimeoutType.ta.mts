/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType
 * @description
 * 
 * Timeout_Type value carried by the `setTimeoutType` directive. Table 3-11
 * describes the managed timeout-type parameter as FOP behavior of either Alert
 * or AD service suspension. Annex A names the directive codes `terminateAD` and
 * `suspendAD`, and names the reported parameter values `generateAlert` and
 * `suspendSequenceControlled`. Sections 3.12.2.6 and 3.10.2.5 do not state
 * which directive code is Alert and which is AD service suspension. Section
 * 1.6.1.5 names Timeout_Type as a term of CCSDS 232.1-B-2.
 * 
 * CCSDS 912.3-B-3, sections 3.12.2.6, 3.10.2.5, 1.6.1.5, and annex A2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspInvokeDirectiveInvocation-directive-setTimeoutType ::= INTEGER
 *       {  terminateAD                         (0)
 *       ,  suspendAD                           (1)
 *       }
 * ```
 */
export
type FspInvokeDirectiveInvocation_directive_setTimeoutType = INTEGER;

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD
 * @description
 * 
 * Directive timeout-type code 0. Annex A names it `terminateAD`. Table 3-11
 * describes timeout type as Alert or AD service suspension. This issue does not
 * state which of those two this code is.
 * 
 * CCSDS 912.3-B-3, annex A2.6 and section 3.10.2.5 (table 3-11).
 * @constant
 * @type {number}
 */
export
const FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD
 * @description
 * 
 * Directive timeout-type code 0, named `terminateAD`
 * (CCSDS 912.3-B-3, annex A2.6).
 * @constant
 * @type {number}
 */
export
const terminateAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD
 * @description
 * 
 * Directive timeout-type code 1. Annex A names it `suspendAD`. Table 3-11
 * describes timeout type as Alert or AD service suspension. This issue does not
 * state which of those two this code is.
 * 
 * CCSDS 912.3-B-3, annex A2.6 and section 3.10.2.5 (table 3-11).
 * @constant
 * @type {number}
 */
export
const FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD
 * @description
 * 
 * Directive timeout-type code 1, named `suspendAD`
 * (CCSDS 912.3-B-3, annex A2.6).
 * @constant
 * @type {number}
 */
export
const suspendAD: FspInvokeDirectiveInvocation_directive_setTimeoutType = FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspInvokeDirectiveInvocation_directive_setTimeoutType: $.ASN1Decoder<FspInvokeDirectiveInvocation_directive_setTimeoutType> = $._decodeInteger;
export const _encode_FspInvokeDirectiveInvocation_directive_setTimeoutType: $.ASN1Encoder<FspInvokeDirectiveInvocation_directive_setTimeoutType> = $._encodeInteger;


/* eslint-enable */
