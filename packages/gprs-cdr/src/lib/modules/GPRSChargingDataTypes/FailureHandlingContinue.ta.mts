/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FailureHandlingContinue
 * @description
 * 
 * Indicates that the Failure-Handling procedure ran and the action was
 * Continue (clause 5.3.1.4 and annex B). Continue finishes the online
 * session and keeps an ongoing IP-CAN bearer, or allows a new one to be
 * established. Failover to an alternate OCS is supported for an ongoing
 * session and is always supported for a new session. If the user is only
 * online charged, this action opens a new PGW-CDR or TDF-CDR. If the user
 * is charged both online and offline, the failure is registered in the
 * open CDR. The other actions are Terminate and Retry&Terminate, which
 * release an ongoing bearer session or refuse a new one.
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureHandlingContinue  ::=  BOOLEAN
 * ```
 */
export
type FailureHandlingContinue = BOOLEAN; // BooleanType

export
const _decode_FailureHandlingContinue: $.ASN1Decoder<FailureHandlingContinue> = $._decodeBoolean;

export
const _encode_FailureHandlingContinue: $.ASN1Encoder<FailureHandlingContinue> = $._encodeBoolean;

/* eslint-enable */
