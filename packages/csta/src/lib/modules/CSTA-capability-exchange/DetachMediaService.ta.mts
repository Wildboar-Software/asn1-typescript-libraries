/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DetachMediaService
 * @description
 * Capability bitmap for the Detach Media Service service (ECMA-269 C.9.2,
 * ECMA-285 §9.10). Presence of this entry in `MediaServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetachMediaService  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     fail                     ( 2),     -- initial states
 *     hold                     ( 3),     -- initial states
 *     queued                     ( 4),     -- initial states
 *     privateData                 ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     deviceIDOnly                 ( 7),     -- misc characteristics
 *     ackModelMultiStep             ( 8) }
 * ```
 */
export
type DetachMediaService = BIT_STRING;

/**
 * @summary DetachMediaService_alerting
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * Annex C).
 */
export
const DetachMediaService_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `DetachMediaService_alerting`.
 */
export
const alerting: number = DetachMediaService_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_connected
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Connected (ECMA-269
 * Annex C).
 */
export
const DetachMediaService_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 * @description
 * Alias of `DetachMediaService_connected`.
 */
export
const connected: number = DetachMediaService_connected; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_fail
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Fail (ECMA-269 Annex
 * C).
 */
export
const DetachMediaService_fail: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fail
 * @constant
 * @description
 * Alias of `DetachMediaService_fail`.
 */
export
const fail: number = DetachMediaService_fail; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_hold
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Hold (ECMA-269 Annex
 * C).
 */
export
const DetachMediaService_hold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 * @description
 * Alias of `DetachMediaService_hold`.
 */
export
const hold: number = DetachMediaService_hold; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269 Annex
 * C).
 */
export
const DetachMediaService_queued: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `DetachMediaService_queued`.
 */
export
const queued: number = DetachMediaService_queued; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const DetachMediaService_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DetachMediaService_privateData`.
 */
export
const privateData: number = DetachMediaService_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 Annex C).
 */
export
const DetachMediaService_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `DetachMediaService_privateDataInAck`.
 */
export
const privateDataInAck: number = DetachMediaService_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 Annex C).
 */
export
const DetachMediaService_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `DetachMediaService_deviceIDOnly`.
 */
export
const deviceIDOnly: number = DetachMediaService_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DetachMediaService_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 Annex C).
 */
export
const DetachMediaService_ackModelMultiStep: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `DetachMediaService_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = DetachMediaService_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DetachMediaService: $.ASN1Decoder<DetachMediaService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetachMediaService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetachMediaService (el: _Element): DetachMediaService {
    if (!_cached_decoder_for_DetachMediaService) { _cached_decoder_for_DetachMediaService = $._decodeBitString; }
    return _cached_decoder_for_DetachMediaService(el);
}

let _cached_encoder_for_DetachMediaService: $.ASN1Encoder<DetachMediaService> | null = null;

/**
 * @summary Encodes a(n) DetachMediaService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetachMediaService, encoded as an ASN.1 Element.
 */
export
function _encode_DetachMediaService (value: DetachMediaService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetachMediaService) { _cached_encoder_for_DetachMediaService = $._encodeBitString; }
    return _cached_encoder_for_DetachMediaService(value, elGetter);
}


/* eslint-enable */
