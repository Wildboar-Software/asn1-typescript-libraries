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

let _cached_decoder_for_ChargingControlIndicators: $.ASN1Decoder<ChargingControlIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingControlIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingControlIndicators (el: _Element): ChargingControlIndicators {
    if (!_cached_decoder_for_ChargingControlIndicators) { _cached_decoder_for_ChargingControlIndicators = $._decodeBitString; }
    return _cached_decoder_for_ChargingControlIndicators(el);
}

let _cached_encoder_for_ChargingControlIndicators: $.ASN1Encoder<ChargingControlIndicators> | null = null;

/**
 * @summary Encodes a(n) ChargingControlIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingControlIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingControlIndicators (value: ChargingControlIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingControlIndicators) { _cached_encoder_for_ChargingControlIndicators = $._encodeBitString; }
    return _cached_encoder_for_ChargingControlIndicators(value, elGetter);
}


/* eslint-enable */
