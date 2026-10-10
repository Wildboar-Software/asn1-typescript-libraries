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
 * What to do with call-attempt charges when tariffing stops.
 *
 * `callAttemptChargesApplicable` (bit 0):
 *
 * - `0`: stop tariffing. Call-attempt charges do not apply.
 * - `1`: stop tariffing. Call-attempt charges apply.
 *
 * A connection control point sets bit 0 when its network-specific
 * conditions for a call-attempt charge are met (clause 6.2.4). On
 * receipt, charging stops for the named operators and, if this bit
 * is set, the call-attempt charge is taken (clause 6.3.5).
 *
 * [ES 201 296 V1.3.1, clauses 6.2.4, 6.3.5, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
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
 * Bit 0 of {@link StopCharging_stopIndicators}.
 * `0` stops tariffing with no call-attempt charge. `1` stops
 * tariffing and applies the call-attempt charge.
 * @summary StopCharging_stopIndicators_callAttemptChargesApplicable
 * @constant
 */
export
const StopCharging_stopIndicators_callAttemptChargesApplicable: number = 0; /* LONG_NAMED_BIT */

/**
 * Bit 0 of {@link StopCharging_stopIndicators}.
 * `0` stops tariffing with no call-attempt charge. `1` stops
 * tariffing and applies the call-attempt charge.
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
