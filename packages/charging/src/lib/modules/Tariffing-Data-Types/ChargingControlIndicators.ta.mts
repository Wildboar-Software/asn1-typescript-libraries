/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxChargingControlIndicatorsLen } from "../Tariffing-Data-Types/maxChargingControlIndicatorsLen.va.mjs";
import { minChargingControlIndicatorsLen } from "../Tariffing-Data-Types/minChargingControlIndicatorsLen.va.mjs";



/**
 * @summary ChargingControlIndicators
 * @description
 *
 * Required on every CRGT and AOCRG. A CRGT or AOCRG with this field
 * absent, or with nothing but this field, is not accepted
 * (clause 6.3.9). Bits past the three named ones are not assigned.
 *
 * `subscriberCharge` (bit 0):
 *
 * - `0`: advice of charge only.
 * - `1`: subscriber charging. That information may also be used
 *   for advice of charge (clauses 6.1.5 and 6.3.7).
 *
 * In the configuration charge generation point, then charge
 * registration point, then charge determination point, the
 * registration point, after it has registered the charge, forwards
 * the information with this bit set to advice of charge
 * (clause 6.3 d).
 *
 * `immediateChangeOfActuallyAppliedTariff` (bit 1) applies only
 * when the current tariff itself changes:
 *
 * - `0`: change without restart. The new sequence is entered at
 *   the subtariff selected by the elapsed call duration. A new
 *   one-time charge is not applied. The new call-attempt and
 *   call-setup charges are not applied.
 * - `1`: change with restart. Charging closes and starts again at
 *   the first subtariff. A new one-time charge is applied. The
 *   new call-attempt and call-setup charges are still not applied.
 *
 * Replacing only the next tariff does not use this bit
 * (clause 6.3.2.2).
 *
 * `delayUntilStart` (bit 2):
 *
 * - `0`: start tariffing, if it has not started, without waiting
 *   for START.
 * - `1`: wait for START.
 *
 * A connection control point forces this bit to `1` on a CRGT it
 * forwards during call set-up (clause 6.2.1.1). The registration
 * or generation point detects that control point by a CRGT with
 * this bit set, or by STOP (clause 6.3 e). Answer starts only the
 * tariffs that are not delayed (clause 6.3.4).
 *
 * [ES 201 296 V1.3.1, clauses 6.1.5, 6.3.2.1, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingControlIndicators  ::=  BIT STRING {
 *     subscriberCharge (0),
 *     immediateChangeOfActuallyAppliedTariff (1),
 *     delayUntilStart (2) }
 *     (SIZE(minChargingControlIndicatorsLen..maxChargingControlIndicatorsLen))
 * ```
 */
export
type ChargingControlIndicators = BIT_STRING;

/**
 * Bit 0 of {@link ChargingControlIndicators}.
 * `0` is advice of charge only. `1` is subscriber charging, which
 * may also be used for advice of charge.
 * @summary ChargingControlIndicators_subscriberCharge
 * @constant
 */
export
const ChargingControlIndicators_subscriberCharge: number = 0; /* LONG_NAMED_BIT */

/**
 * Bit 0 of {@link ChargingControlIndicators}.
 * `0` is advice of charge only. `1` is subscriber charging, which
 * may also be used for advice of charge.
 * @summary subscriberCharge
 * @constant
 */
export
const subscriberCharge: number = ChargingControlIndicators_subscriberCharge; /* SHORT_NAMED_BIT */

/**
 * Bit 1 of {@link ChargingControlIndicators}.
 * `0` changes the current tariff without restart. `1` restarts
 * charging at the first subtariff. Used only for that change.
 * @summary ChargingControlIndicators_immediateChangeOfActuallyAppliedTariff
 * @constant
 */
export
const ChargingControlIndicators_immediateChangeOfActuallyAppliedTariff: number = 1; /* LONG_NAMED_BIT */

/**
 * Bit 1 of {@link ChargingControlIndicators}.
 * `0` changes the current tariff without restart. `1` restarts
 * charging at the first subtariff. Used only for that change.
 * @summary immediateChangeOfActuallyAppliedTariff
 * @constant
 */
export
const immediateChangeOfActuallyAppliedTariff: number = ChargingControlIndicators_immediateChangeOfActuallyAppliedTariff; /* SHORT_NAMED_BIT */

/**
 * Bit 2 of {@link ChargingControlIndicators}.
 * `0` starts tariffing without waiting for START. `1` waits for
 * the START signal.
 * @summary ChargingControlIndicators_delayUntilStart
 * @constant
 */
export
const ChargingControlIndicators_delayUntilStart: number = 2; /* LONG_NAMED_BIT */

/**
 * Bit 2 of {@link ChargingControlIndicators}.
 * `0` starts tariffing without waiting for START. `1` waits for
 * the START signal.
 * @summary delayUntilStart
 * @constant
 */
export
const delayUntilStart: number = ChargingControlIndicators_delayUntilStart; /* SHORT_NAMED_BIT */
export const _decode_ChargingControlIndicators = (el: _Element): ChargingControlIndicators => {
    const value = $._decodeBitString(el);
    if (value.length < Number(minChargingControlIndicatorsLen) || value.length > Number(maxChargingControlIndicatorsLen)) {
        throw new ASN1SizeError("ChargingControlIndicators violates SIZE constraint");
    }
    return value;
};
export const _encode_ChargingControlIndicators = $._encodeBitString;


/* eslint-enable */
