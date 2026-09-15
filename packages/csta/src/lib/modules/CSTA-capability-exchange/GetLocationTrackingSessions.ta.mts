/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLocationTrackingSessions
 * @description
 * Capability bitmap for the Get Location Tracking Sessions service (ECMA-269
 * C.22.11, ECMA-285 §9.10). Presence of this entry in
 * `LocationServicesServList` means the SF supports that service. Each set bit
 * is an optional parameter, enumerated value, initial connection state, or
 * miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingSessions  ::=  BIT STRING
 * {    privateData                ( 0),
 *     privateDataInAck            ( 1) }
 * ```
 */
export
type GetLocationTrackingSessions = BIT_STRING;

/**
 * @summary GetLocationTrackingSessions_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.22.11).
 */
export
const GetLocationTrackingSessions_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetLocationTrackingSessions_privateData`.
 */
export
const privateData: number = GetLocationTrackingSessions_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetLocationTrackingSessions_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.22.11).
 */
export
const GetLocationTrackingSessions_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetLocationTrackingSessions_privateDataInAck`.
 */
export
const privateDataInAck: number = GetLocationTrackingSessions_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLocationTrackingSessions: $.ASN1Decoder<GetLocationTrackingSessions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingSessions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingSessions (el: _Element): GetLocationTrackingSessions {
    if (!_cached_decoder_for_GetLocationTrackingSessions) { _cached_decoder_for_GetLocationTrackingSessions = $._decodeBitString; }
    return _cached_decoder_for_GetLocationTrackingSessions(el);
}

let _cached_encoder_for_GetLocationTrackingSessions: $.ASN1Encoder<GetLocationTrackingSessions> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingSessions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingSessions, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingSessions (value: GetLocationTrackingSessions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingSessions) { _cached_encoder_for_GetLocationTrackingSessions = $._encodeBitString; }
    return _cached_encoder_for_GetLocationTrackingSessions(value, elGetter);
}


/* eslint-enable */
