/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxStopIndicatorsLen } from "../Tariffing-Data-Types/maxStopIndicatorsLen.va.mjs";
import { minStopIndicatorsLen } from "../Tariffing-Data-Types/minStopIndicatorsLen.va.mjs";



/**
 * @summary StopCharging_stopIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCharging-stopIndicators ::= BIT STRING {
 *     callAttemptChargesApplicable (0)
 * } (SIZE(minStopIndicatorsLen..maxStopIndicatorsLen))
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
export const _decode_StopCharging_stopIndicators = (el: _Element): StopCharging_stopIndicators => {
    const value = $._decodeBitString(el);
    if (value.length < Number(minStopIndicatorsLen) || value.length > Number(maxStopIndicatorsLen)) {
        throw new ASN1SizeError("StopCharging.stopIndicators violates SIZE constraint");
    }
    return value;
};
export const _encode_StopCharging_stopIndicators = $._encodeBitString;


/* eslint-enable */
