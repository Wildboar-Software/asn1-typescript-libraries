/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ResumeLocationTrackingSession
 * @description
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
 */
export
const ResumeLocationTrackingSession_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ResumeLocationTrackingSession_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ResumeLocationTrackingSession_privateDataInAck
 * @constant
 */
export
const ResumeLocationTrackingSession_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
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
