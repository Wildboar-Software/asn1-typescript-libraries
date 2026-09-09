/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallAssociatedEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedEvents  ::=  BIT STRING
 * {    callInformation                     ( 0),
 *         charging                         ( 1),
 *         dTMFDigitsDetected                     ( 2),
 *         telephonyTonesDetected                             ( 3),
 *         serviceCompletionFailure                 ( 4) }
 * ```
 */
export
type CallAssociatedEvents = BIT_STRING;

/**
 * @summary CallAssociatedEvents_callInformation
 * @constant
 */
export
const CallAssociatedEvents_callInformation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callInformation
 * @constant
 */
export
const callInformation: number = CallAssociatedEvents_callInformation; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedEvents_charging
 * @constant
 */
export
const CallAssociatedEvents_charging: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary charging
 * @constant
 */
export
const charging: number = CallAssociatedEvents_charging; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedEvents_dTMFDigitsDetected
 * @constant
 */
export
const CallAssociatedEvents_dTMFDigitsDetected: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dTMFDigitsDetected
 * @constant
 */
export
const dTMFDigitsDetected: number = CallAssociatedEvents_dTMFDigitsDetected; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedEvents_telephonyTonesDetected
 * @constant
 */
export
const CallAssociatedEvents_telephonyTonesDetected: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary telephonyTonesDetected
 * @constant
 */
export
const telephonyTonesDetected: number = CallAssociatedEvents_telephonyTonesDetected; /* SHORT_NAMED_BIT */

/**
 * @summary CallAssociatedEvents_serviceCompletionFailure
 * @constant
 */
export
const CallAssociatedEvents_serviceCompletionFailure: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary serviceCompletionFailure
 * @constant
 */
export
const serviceCompletionFailure: number = CallAssociatedEvents_serviceCompletionFailure; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallAssociatedEvents: $.ASN1Decoder<CallAssociatedEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedEvents (el: _Element): CallAssociatedEvents {
    if (!_cached_decoder_for_CallAssociatedEvents) { _cached_decoder_for_CallAssociatedEvents = $._decodeBitString; }
    return _cached_decoder_for_CallAssociatedEvents(el);
}

let _cached_encoder_for_CallAssociatedEvents: $.ASN1Encoder<CallAssociatedEvents> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedEvents, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedEvents (value: CallAssociatedEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedEvents) { _cached_encoder_for_CallAssociatedEvents = $._encodeBitString; }
    return _cached_encoder_for_CallAssociatedEvents(value, elGetter);
}


/* eslint-enable */
