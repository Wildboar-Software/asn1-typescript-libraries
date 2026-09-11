/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ParkCall
 * @description
 * Capability bitmap for the Park Call service (ECMA-269 C.5.21, ECMA-285
 * §9.10). Presence of this entry in `CallControlServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParkCall  ::=  BIT STRING
 * {    hold                     ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     correlatorData                 ( 2),     -- optional parameters
 *     subjectOfCall                ( 8),     -- optional parameters
 *     languagePreferences            ( 9),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     parkedToInAck                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     deviceIDOnly                 ( 6),     -- misc characteristics
 *     ackModelMultiStep             ( 7) }
 * ```
 */
export
type ParkCall = BIT_STRING;

/**
 * @summary ParkCall_hold
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Hold (ECMA-269
 * C.5.21).
 */
export
const ParkCall_hold: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 * @description
 * Alias of `ParkCall_hold`.
 */
export
const hold: number = ParkCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_connected
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Connected (ECMA-269
 * C.5.21).
 */
export
const ParkCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 * @description
 * Alias of `ParkCall_connected`.
 */
export
const connected: number = ParkCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.21).
 */
export
const ParkCall_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `ParkCall_correlatorData`.
 */
export
const correlatorData: number = ParkCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.5.21).
 */
export
const ParkCall_subjectOfCall: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `ParkCall_subjectOfCall`.
 */
export
const subjectOfCall: number = ParkCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.5.21).
 */
export
const ParkCall_languagePreferences: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `ParkCall_languagePreferences`.
 */
export
const languagePreferences: number = ParkCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.21).
 */
export
const ParkCall_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ParkCall_privateData`.
 */
export
const privateData: number = ParkCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_parkedToInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `parkedTo` in the acknowledgement
 * (ECMA-269 C.5.21).
 */
export
const ParkCall_parkedToInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary parkedToInAck
 * @constant
 * @description
 * Alias of `ParkCall_parkedToInAck`.
 */
export
const parkedToInAck: number = ParkCall_parkedToInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.21).
 */
export
const ParkCall_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ParkCall_privateDataInAck`.
 */
export
const privateDataInAck: number = ParkCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.21).
 */
export
const ParkCall_deviceIDOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `ParkCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = ParkCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ParkCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.21).
 */
export
const ParkCall_ackModelMultiStep: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `ParkCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = ParkCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParkCall: $.ASN1Decoder<ParkCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParkCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParkCall (el: _Element): ParkCall {
    if (!_cached_decoder_for_ParkCall) { _cached_decoder_for_ParkCall = $._decodeBitString; }
    return _cached_decoder_for_ParkCall(el);
}

let _cached_encoder_for_ParkCall: $.ASN1Encoder<ParkCall> | null = null;

/**
 * @summary Encodes a(n) ParkCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParkCall, encoded as an ASN.1 Element.
 */
export
function _encode_ParkCall (value: ParkCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParkCall) { _cached_encoder_for_ParkCall = $._encodeBitString; }
    return _cached_encoder_for_ParkCall(value, elGetter);
}


/* eslint-enable */
