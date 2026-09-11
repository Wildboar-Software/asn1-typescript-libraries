/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetRegistrations
 * @description
 * Capability bitmap for the Get Registrations service (ECMA-269 C.2.9, ECMA-285
 * §9.10). Presence of this entry in `SystemStatusServList` means the SF
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
 * GetRegistrations  ::=  BIT STRING
 * {    requestedReqTypes            ( 0),
 *     privateData                ( 1),
 *     privateDataInAck            ( 2),
 *     segmentedResponseProvided        ( 3) }
 * ```
 */
export
type GetRegistrations = BIT_STRING;

/**
 * @summary GetRegistrations_requestedReqTypes
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.2.9).
 */
export
const GetRegistrations_requestedReqTypes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestedReqTypes
 * @constant
 * @description
 * Alias of `GetRegistrations_requestedReqTypes`.
 */
export
const requestedReqTypes: number = GetRegistrations_requestedReqTypes; /* SHORT_NAMED_BIT */

/**
 * @summary GetRegistrations_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.2.9).
 */
export
const GetRegistrations_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetRegistrations_privateData`.
 */
export
const privateData: number = GetRegistrations_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetRegistrations_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.2.9).
 */
export
const GetRegistrations_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetRegistrations_privateDataInAck`.
 */
export
const privateDataInAck: number = GetRegistrations_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetRegistrations_segmentedResponseProvided
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.2.9).
 */
export
const GetRegistrations_segmentedResponseProvided: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary segmentedResponseProvided
 * @constant
 * @description
 * Alias of `GetRegistrations_segmentedResponseProvided`.
 */
export
const segmentedResponseProvided: number = GetRegistrations_segmentedResponseProvided; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetRegistrations: $.ASN1Decoder<GetRegistrations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRegistrations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRegistrations (el: _Element): GetRegistrations {
    if (!_cached_decoder_for_GetRegistrations) { _cached_decoder_for_GetRegistrations = $._decodeBitString; }
    return _cached_decoder_for_GetRegistrations(el);
}

let _cached_encoder_for_GetRegistrations: $.ASN1Encoder<GetRegistrations> | null = null;

/**
 * @summary Encodes a(n) GetRegistrations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRegistrations, encoded as an ASN.1 Element.
 */
export
function _encode_GetRegistrations (value: GetRegistrations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRegistrations) { _cached_encoder_for_GetRegistrations = $._encodeBitString; }
    return _cached_encoder_for_GetRegistrations(value, elGetter);
}


/* eslint-enable */
