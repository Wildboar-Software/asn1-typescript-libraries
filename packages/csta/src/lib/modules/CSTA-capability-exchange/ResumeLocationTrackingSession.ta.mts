/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ResumeLocationTrackingSession
 * @description
 * Capability bitmap for the Resume Location Tracking Session service (ECMA-269
 * C.22.5, ECMA-285 §9.10). Presence of this entry in `LocationServicesServList`
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
 * ResumeLocationTrackingSession  ::=  BIT STRING
 * {    privateData                ( 0),
 *     privateDataInAck            ( 1) }
 * ```
 */
export
type ResumeLocationTrackingSession = BIT_STRING;

/**
 * @summary ResumeLocationTrackingSession_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.22.5).
 */
export
const ResumeLocationTrackingSession_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ResumeLocationTrackingSession_privateData`.
 */
export
const privateData: number = ResumeLocationTrackingSession_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ResumeLocationTrackingSession_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.22.5).
 */
export
const ResumeLocationTrackingSession_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ResumeLocationTrackingSession_privateDataInAck`.
 */
export
const privateDataInAck: number = ResumeLocationTrackingSession_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ResumeLocationTrackingSession: $.ASN1Decoder<ResumeLocationTrackingSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeLocationTrackingSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeLocationTrackingSession (el: _Element): ResumeLocationTrackingSession {
    if (!_cached_decoder_for_ResumeLocationTrackingSession) { _cached_decoder_for_ResumeLocationTrackingSession = $._decodeBitString; }
    return _cached_decoder_for_ResumeLocationTrackingSession(el);
}

let _cached_encoder_for_ResumeLocationTrackingSession: $.ASN1Encoder<ResumeLocationTrackingSession> | null = null;

/**
 * @summary Encodes a(n) ResumeLocationTrackingSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeLocationTrackingSession, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeLocationTrackingSession (value: ResumeLocationTrackingSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeLocationTrackingSession) { _cached_encoder_for_ResumeLocationTrackingSession = $._encodeBitString; }
    return _cached_encoder_for_ResumeLocationTrackingSession(value, elGetter);
}


/* eslint-enable */
