/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingControlIndicators
 * @description
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
 * @summary ChargingControlIndicators_subscriberCharge
 * @constant
 */
export
const ChargingControlIndicators_subscriberCharge: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary subscriberCharge
 * @constant
 */
export
const subscriberCharge: number = ChargingControlIndicators_subscriberCharge; /* SHORT_NAMED_BIT */

/**
 * @summary ChargingControlIndicators_immediateChangeOfActuallyAppliedTariff
 * @constant
 */
export
const ChargingControlIndicators_immediateChangeOfActuallyAppliedTariff: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary immediateChangeOfActuallyAppliedTariff
 * @constant
 */
export
const immediateChangeOfActuallyAppliedTariff: number = ChargingControlIndicators_immediateChangeOfActuallyAppliedTariff; /* SHORT_NAMED_BIT */

/**
 * @summary ChargingControlIndicators_delayUntilStart
 * @constant
 */
export
const ChargingControlIndicators_delayUntilStart: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary delayUntilStart
 * @constant
 */
export
const delayUntilStart: number = ChargingControlIndicators_delayUntilStart; /* SHORT_NAMED_BIT */
export const _decode_ChargingControlIndicators = $._decodeBitString;
export const _encode_ChargingControlIndicators = $._encodeBitString;


/* eslint-enable */
