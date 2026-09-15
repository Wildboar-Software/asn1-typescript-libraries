/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetCSTAFeatures
 * @description
 * Capability bitmap for the Get CSTA Features service (ECMA-269 C.1.1, ECMA-285
 * §9.10). Presence of this entry in `CapExchangeServList` means the SF supports
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
 * GetCSTAFeatures  ::=  BIT STRING
 * {     privateDataInReq            ( 0),
 *     privateDataInAck            ( 1) }
 * ```
 */
export
type GetCSTAFeatures = BIT_STRING;

/**
 * @summary GetCSTAFeatures_privateDataInReq
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the service request
 * (ECMA-269 C.1.1).
 */
export
const GetCSTAFeatures_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 * @description
 * Alias of `GetCSTAFeatures_privateDataInReq`.
 */
export
const privateDataInReq: number = GetCSTAFeatures_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary GetCSTAFeatures_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.1.1).
 */
export
const GetCSTAFeatures_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetCSTAFeatures_privateDataInAck`.
 */
export
const privateDataInAck: number = GetCSTAFeatures_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetCSTAFeatures: $.ASN1Decoder<GetCSTAFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCSTAFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCSTAFeatures (el: _Element): GetCSTAFeatures {
    if (!_cached_decoder_for_GetCSTAFeatures) { _cached_decoder_for_GetCSTAFeatures = $._decodeBitString; }
    return _cached_decoder_for_GetCSTAFeatures(el);
}

let _cached_encoder_for_GetCSTAFeatures: $.ASN1Encoder<GetCSTAFeatures> | null = null;

/**
 * @summary Encodes a(n) GetCSTAFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCSTAFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_GetCSTAFeatures (value: GetCSTAFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCSTAFeatures) { _cached_encoder_for_GetCSTAFeatures = $._encodeBitString; }
    return _cached_encoder_for_GetCSTAFeatures(value, elGetter);
}


/* eslint-enable */
