/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IntrudeCall
 * @description
 * Capability bitmap for the Intrude Call service (ECMA-269 C.5.16, ECMA-285
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
 * IntrudeCall  ::=  BIT STRING
 * {     participationTypeSilent         ( 0),     -- optional parameters
 *     participationTypeActive         ( 1),     -- optional parameters
 *     userData                 ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     conferencedCallInfoInAck         ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     deviceIDOnly                 ( 6),     -- misc characteristics
 *     supportsConference             ( 7),     -- misc characteristics
 *     supportsAlternate             ( 8),     -- misc characteristics
 *     ackModelMultiStep             ( 9) }
 * ```
 */
export
type IntrudeCall = BIT_STRING;

/**
 * @summary IntrudeCall_participationTypeSilent
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.16).
 */
export
const IntrudeCall_participationTypeSilent: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeSilent
 * @constant
 * @description
 * Alias of `IntrudeCall_participationTypeSilent`.
 */
export
const participationTypeSilent: number = IntrudeCall_participationTypeSilent; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_participationTypeActive
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.16).
 */
export
const IntrudeCall_participationTypeActive: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeActive
 * @constant
 * @description
 * Alias of `IntrudeCall_participationTypeActive`.
 */
export
const participationTypeActive: number = IntrudeCall_participationTypeActive; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.16).
 */
export
const IntrudeCall_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `IntrudeCall_userData`.
 */
export
const userData: number = IntrudeCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.16).
 */
export
const IntrudeCall_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `IntrudeCall_privateData`.
 */
export
const privateData: number = IntrudeCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_conferencedCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `conferencedCallInfo` in the
 * acknowledgement (ECMA-269 C.5.16).
 */
export
const IntrudeCall_conferencedCallInfoInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary conferencedCallInfoInAck
 * @constant
 * @description
 * Alias of `IntrudeCall_conferencedCallInfoInAck`.
 */
export
const conferencedCallInfoInAck: number = IntrudeCall_conferencedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.16).
 */
export
const IntrudeCall_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `IntrudeCall_privateDataInAck`.
 */
export
const privateDataInAck: number = IntrudeCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.16).
 */
export
const IntrudeCall_deviceIDOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `IntrudeCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = IntrudeCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_supportsConference
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.16).
 */
export
const IntrudeCall_supportsConference: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary supportsConference
 * @constant
 * @description
 * Alias of `IntrudeCall_supportsConference`.
 */
export
const supportsConference: number = IntrudeCall_supportsConference; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_supportsAlternate
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.16).
 */
export
const IntrudeCall_supportsAlternate: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary supportsAlternate
 * @constant
 * @description
 * Alias of `IntrudeCall_supportsAlternate`.
 */
export
const supportsAlternate: number = IntrudeCall_supportsAlternate; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.16).
 */
export
const IntrudeCall_ackModelMultiStep: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `IntrudeCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = IntrudeCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IntrudeCall: $.ASN1Decoder<IntrudeCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntrudeCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntrudeCall (el: _Element): IntrudeCall {
    if (!_cached_decoder_for_IntrudeCall) { _cached_decoder_for_IntrudeCall = $._decodeBitString; }
    return _cached_decoder_for_IntrudeCall(el);
}

let _cached_encoder_for_IntrudeCall: $.ASN1Encoder<IntrudeCall> | null = null;

/**
 * @summary Encodes a(n) IntrudeCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntrudeCall, encoded as an ASN.1 Element.
 */
export
function _encode_IntrudeCall (value: IntrudeCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntrudeCall) { _cached_encoder_for_IntrudeCall = $._encodeBitString; }
    return _cached_encoder_for_IntrudeCall(value, elGetter);
}


/* eslint-enable */
