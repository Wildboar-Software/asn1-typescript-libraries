/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLastNumberDialed
 * @description
 * Capability bitmap for the Get Last Number Dialed service (ECMA-269 C.14.12,
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
 * GetLastNumberDialed  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type GetLastNumberDialed = BIT_STRING;

/**
 * @summary GetLastNumberDialed_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.12).
 */
export
const GetLastNumberDialed_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetLastNumberDialed_privateData`.
 */
export
const privateData: number = GetLastNumberDialed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetLastNumberDialed_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.12).
 */
export
const GetLastNumberDialed_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetLastNumberDialed_privateDataInAck`.
 */
export
const privateDataInAck: number = GetLastNumberDialed_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLastNumberDialed: $.ASN1Decoder<GetLastNumberDialed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLastNumberDialed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLastNumberDialed (el: _Element): GetLastNumberDialed {
    if (!_cached_decoder_for_GetLastNumberDialed) { _cached_decoder_for_GetLastNumberDialed = $._decodeBitString; }
    return _cached_decoder_for_GetLastNumberDialed(el);
}

let _cached_encoder_for_GetLastNumberDialed: $.ASN1Encoder<GetLastNumberDialed> | null = null;

/**
 * @summary Encodes a(n) GetLastNumberDialed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLastNumberDialed, encoded as an ASN.1 Element.
 */
export
function _encode_GetLastNumberDialed (value: GetLastNumberDialed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLastNumberDialed) { _cached_encoder_for_GetLastNumberDialed = $._encodeBitString; }
    return _cached_encoder_for_GetLastNumberDialed(value, elGetter);
}


/* eslint-enable */
