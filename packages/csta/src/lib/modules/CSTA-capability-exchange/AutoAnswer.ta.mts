/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AutoAnswer
 * @description
 * Capability bitmap for the Auto Answer event (ECMA-269 C.15.7, ECMA-285
 * §9.10). Presence of this entry in `LogicalEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoAnswer  ::=  BIT STRING
 * {     numberOfRings                 ( 0),     -- optional parameters
 *     privateData                 ( 1) }
 * ```
 */
export
type AutoAnswer = BIT_STRING;

/**
 * @summary AutoAnswer_numberOfRings
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.15.7).
 */
export
const AutoAnswer_numberOfRings: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary numberOfRings
 * @constant
 * @description
 * Alias of `AutoAnswer_numberOfRings`.
 */
export
const numberOfRings: number = AutoAnswer_numberOfRings; /* SHORT_NAMED_BIT */

/**
 * @summary AutoAnswer_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.7).
 */
export
const AutoAnswer_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AutoAnswer_privateData`.
 */
export
const privateData: number = AutoAnswer_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AutoAnswer: $.ASN1Decoder<AutoAnswer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoAnswer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoAnswer (el: _Element): AutoAnswer {
    if (!_cached_decoder_for_AutoAnswer) { _cached_decoder_for_AutoAnswer = $._decodeBitString; }
    return _cached_decoder_for_AutoAnswer(el);
}

let _cached_encoder_for_AutoAnswer: $.ASN1Encoder<AutoAnswer> | null = null;

/**
 * @summary Encodes a(n) AutoAnswer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoAnswer, encoded as an ASN.1 Element.
 */
export
function _encode_AutoAnswer (value: AutoAnswer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoAnswer) { _cached_encoder_for_AutoAnswer = $._encodeBitString; }
    return _cached_encoder_for_AutoAnswer(value, elGetter);
}


/* eslint-enable */
