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

let _cached_decoder_for_StopCharging_stopIndicators: $.ASN1Decoder<StopCharging_stopIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopCharging_stopIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopCharging_stopIndicators (el: _Element): StopCharging_stopIndicators {
    if (!_cached_decoder_for_StopCharging_stopIndicators) { _cached_decoder_for_StopCharging_stopIndicators = $._decodeBitString; }
    return _cached_decoder_for_StopCharging_stopIndicators(el);
}

let _cached_encoder_for_StopCharging_stopIndicators: $.ASN1Encoder<StopCharging_stopIndicators> | null = null;

/**
 * @summary Encodes a(n) StopCharging_stopIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopCharging_stopIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_StopCharging_stopIndicators (value: StopCharging_stopIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopCharging_stopIndicators) { _cached_encoder_for_StopCharging_stopIndicators = $._encodeBitString; }
    return _cached_encoder_for_StopCharging_stopIndicators(value, elGetter);
}


/* eslint-enable */
