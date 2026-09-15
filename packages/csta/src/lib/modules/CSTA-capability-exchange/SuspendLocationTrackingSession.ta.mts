/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SuspendLocationTrackingSession
 * @description
 * Capability bitmap for the Suspend Location Tracking Session service (ECMA-269
 * C.22.9, ECMA-285 §9.10). Presence of this entry in `LocationServicesServList`
 * means the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendLocationTrackingSession  ::=  BIT STRING
 * {    reason                    ( 0),
 *     privateData                ( 1),
 *     privateDataInAck            ( 2) }
 * ```
 */
export
type SuspendLocationTrackingSession = BIT_STRING;

/**
 * @summary SuspendLocationTrackingSession_reason
 * @constant
 * @description
 * Bit set means the SF supports the optional `reason` parameter (ECMA-269
 * C.22.9).
 */
export
const SuspendLocationTrackingSession_reason: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 * @description
 * Alias of `SuspendLocationTrackingSession_reason`.
 */
export
const reason: number = SuspendLocationTrackingSession_reason; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendLocationTrackingSession_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.22.9).
 */
export
const SuspendLocationTrackingSession_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SuspendLocationTrackingSession_privateData`.
 */
export
const privateData: number = SuspendLocationTrackingSession_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendLocationTrackingSession_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.22.9).
 */
export
const SuspendLocationTrackingSession_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SuspendLocationTrackingSession_privateDataInAck`.
 */
export
const privateDataInAck: number = SuspendLocationTrackingSession_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SuspendLocationTrackingSession: $.ASN1Decoder<SuspendLocationTrackingSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendLocationTrackingSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendLocationTrackingSession (el: _Element): SuspendLocationTrackingSession {
    if (!_cached_decoder_for_SuspendLocationTrackingSession) { _cached_decoder_for_SuspendLocationTrackingSession = $._decodeBitString; }
    return _cached_decoder_for_SuspendLocationTrackingSession(el);
}

let _cached_encoder_for_SuspendLocationTrackingSession: $.ASN1Encoder<SuspendLocationTrackingSession> | null = null;

/**
 * @summary Encodes a(n) SuspendLocationTrackingSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendLocationTrackingSession, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendLocationTrackingSession (value: SuspendLocationTrackingSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendLocationTrackingSession) { _cached_encoder_for_SuspendLocationTrackingSession = $._encodeBitString; }
    return _cached_encoder_for_SuspendLocationTrackingSession(value, elGetter);
}


/* eslint-enable */
