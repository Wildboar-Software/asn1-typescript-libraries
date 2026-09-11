/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary HoldCall
 * @description
 * Capability bitmap for the Hold Call service (ECMA-269 C.5.15, ECMA-285
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
 * HoldCall  ::=  BIT STRING
 * {     connectionReservation             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     deviceIDOnly                 ( 3),     -- misc characteristics
 *     ackModelMultiStep             ( 4) }
 * ```
 */
export
type HoldCall = BIT_STRING;

/**
 * @summary HoldCall_connectionReservation
 * @constant
 * @description
 * Bit set means the SF supports the optional `connectionReservation` parameter
 * (ECMA-269 C.5.15).
 */
export
const HoldCall_connectionReservation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary connectionReservation
 * @constant
 * @description
 * Alias of `HoldCall_connectionReservation`.
 */
export
const connectionReservation: number = HoldCall_connectionReservation; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.15).
 */
export
const HoldCall_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `HoldCall_privateData`.
 */
export
const privateData: number = HoldCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.15).
 */
export
const HoldCall_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `HoldCall_privateDataInAck`.
 */
export
const privateDataInAck: number = HoldCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.15).
 */
export
const HoldCall_deviceIDOnly: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `HoldCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = HoldCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary HoldCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.15).
 */
export
const HoldCall_ackModelMultiStep: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `HoldCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = HoldCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_HoldCall: $.ASN1Decoder<HoldCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldCall (el: _Element): HoldCall {
    if (!_cached_decoder_for_HoldCall) { _cached_decoder_for_HoldCall = $._decodeBitString; }
    return _cached_decoder_for_HoldCall(el);
}

let _cached_encoder_for_HoldCall: $.ASN1Encoder<HoldCall> | null = null;

/**
 * @summary Encodes a(n) HoldCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldCall, encoded as an ASN.1 Element.
 */
export
function _encode_HoldCall (value: HoldCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldCall) { _cached_encoder_for_HoldCall = $._encodeBitString; }
    return _cached_encoder_for_HoldCall(value, elGetter);
}


/* eslint-enable */
