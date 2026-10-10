/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StopCharging_stopIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCharging-stopIndicators ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type StopCharging_stopIndicators = BIT_STRING;

/**
 * @summary StopCharging_stopIndicators_callAttemptChargesApplicable
 * @constant
 */
export
const StopCharging_stopIndicators_callAttemptChargesApplicable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callAttemptChargesApplicable
 * @constant
 */
export
const callAttemptChargesApplicable: number = StopCharging_stopIndicators_callAttemptChargesApplicable; /* SHORT_NAMED_BIT */
export const _decode_StopCharging_stopIndicators = $._decodeBitString;
export const _encode_StopCharging_stopIndicators = $._encodeBitString;


/* eslint-enable */
