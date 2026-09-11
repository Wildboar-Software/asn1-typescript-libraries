/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetRouteingMode
 * @description
 * Capability bitmap for the Get Routeing Mode service (ECMA-269 C.14.14,
 * ECMA-285 §9.10). Presence of this entry in `LogicalServList` means the SF
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
 * GetRouteingMode  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type GetRouteingMode = BIT_STRING;

/**
 * @summary GetRouteingMode_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.14).
 */
export
const GetRouteingMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetRouteingMode_privateData`.
 */
export
const privateData: number = GetRouteingMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetRouteingMode_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.14).
 */
export
const GetRouteingMode_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetRouteingMode_privateDataInAck`.
 */
export
const privateDataInAck: number = GetRouteingMode_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetRouteingMode: $.ASN1Decoder<GetRouteingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRouteingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRouteingMode (el: _Element): GetRouteingMode {
    if (!_cached_decoder_for_GetRouteingMode) { _cached_decoder_for_GetRouteingMode = $._decodeBitString; }
    return _cached_decoder_for_GetRouteingMode(el);
}

let _cached_encoder_for_GetRouteingMode: $.ASN1Encoder<GetRouteingMode> | null = null;

/**
 * @summary Encodes a(n) GetRouteingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRouteingMode, encoded as an ASN.1 Element.
 */
export
function _encode_GetRouteingMode (value: GetRouteingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRouteingMode) { _cached_encoder_for_GetRouteingMode = $._encodeBitString; }
    return _cached_encoder_for_GetRouteingMode(value, elGetter);
}


/* eslint-enable */
