/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetMonitors
 * @description
 * Capability bitmap for the Get Monitors service (ECMA-269 C.3.4, ECMA-285
 * §9.10). Presence of this entry in `MonitoringServList` means the SF supports
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
 * GetMonitors  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     segmentedResponseProvided        ( 2) }
 * ```
 */
export
type GetMonitors = BIT_STRING;

/**
 * @summary GetMonitors_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.3.4).
 */
export
const GetMonitors_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetMonitors_privateData`.
 */
export
const privateData: number = GetMonitors_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetMonitors_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.3.4).
 */
export
const GetMonitors_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetMonitors_privateDataInAck`.
 */
export
const privateDataInAck: number = GetMonitors_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetMonitors_segmentedResponseProvided
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.3.4).
 */
export
const GetMonitors_segmentedResponseProvided: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary segmentedResponseProvided
 * @constant
 * @description
 * Alias of `GetMonitors_segmentedResponseProvided`.
 */
export
const segmentedResponseProvided: number = GetMonitors_segmentedResponseProvided; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetMonitors: $.ASN1Decoder<GetMonitors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMonitors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMonitors (el: _Element): GetMonitors {
    if (!_cached_decoder_for_GetMonitors) { _cached_decoder_for_GetMonitors = $._decodeBitString; }
    return _cached_decoder_for_GetMonitors(el);
}

let _cached_encoder_for_GetMonitors: $.ASN1Encoder<GetMonitors> | null = null;

/**
 * @summary Encodes a(n) GetMonitors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMonitors, encoded as an ASN.1 Element.
 */
export
function _encode_GetMonitors (value: GetMonitors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMonitors) { _cached_encoder_for_GetMonitors = $._encodeBitString; }
    return _cached_encoder_for_GetMonitors(value, elGetter);
}


/* eslint-enable */
