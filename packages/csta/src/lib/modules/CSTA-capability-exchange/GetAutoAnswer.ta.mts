/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetAutoAnswer
 * @description
 * Capability bitmap for the Get Auto Answer service (ECMA-269 C.14.6, ECMA-285
 * §9.10). Presence of this entry in `LogicalServList` means the SF supports
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
 * GetAutoAnswer  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     numberOfRingsInAck             ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type GetAutoAnswer = BIT_STRING;

/**
 * @summary GetAutoAnswer_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.6).
 */
export
const GetAutoAnswer_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetAutoAnswer_privateData`.
 */
export
const privateData: number = GetAutoAnswer_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetAutoAnswer_numberOfRingsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `numberOfRings` in the acknowledgement
 * (ECMA-269 C.14.6).
 */
export
const GetAutoAnswer_numberOfRingsInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary numberOfRingsInAck
 * @constant
 * @description
 * Alias of `GetAutoAnswer_numberOfRingsInAck`.
 */
export
const numberOfRingsInAck: number = GetAutoAnswer_numberOfRingsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetAutoAnswer_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.6).
 */
export
const GetAutoAnswer_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetAutoAnswer_privateDataInAck`.
 */
export
const privateDataInAck: number = GetAutoAnswer_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetAutoAnswer: $.ASN1Decoder<GetAutoAnswer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAutoAnswer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAutoAnswer (el: _Element): GetAutoAnswer {
    if (!_cached_decoder_for_GetAutoAnswer) { _cached_decoder_for_GetAutoAnswer = $._decodeBitString; }
    return _cached_decoder_for_GetAutoAnswer(el);
}

let _cached_encoder_for_GetAutoAnswer: $.ASN1Encoder<GetAutoAnswer> | null = null;

/**
 * @summary Encodes a(n) GetAutoAnswer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAutoAnswer, encoded as an ASN.1 Element.
 */
export
function _encode_GetAutoAnswer (value: GetAutoAnswer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAutoAnswer) { _cached_encoder_for_GetAutoAnswer = $._encodeBitString; }
    return _cached_encoder_for_GetAutoAnswer(value, elGetter);
}


/* eslint-enable */
