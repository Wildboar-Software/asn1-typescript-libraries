/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetAutoAnswer
 * @description
 * Capability bitmap for the Set Auto Answer service (ECMA-269 C.14.16,
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
 * SetAutoAnswer  ::=  BIT STRING
 * {     numberOfRings                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type SetAutoAnswer = BIT_STRING;

/**
 * @summary SetAutoAnswer_numberOfRings
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 Annex C).
 */
export
const SetAutoAnswer_numberOfRings: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary numberOfRings
 * @constant
 * @description
 * Alias of `SetAutoAnswer_numberOfRings`.
 */
export
const numberOfRings: number = SetAutoAnswer_numberOfRings; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoAnswer_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const SetAutoAnswer_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetAutoAnswer_privateData`.
 */
export
const privateData: number = SetAutoAnswer_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoAnswer_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 Annex C).
 */
export
const SetAutoAnswer_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetAutoAnswer_privateDataInAck`.
 */
export
const privateDataInAck: number = SetAutoAnswer_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetAutoAnswer_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 Annex C).
 */
export
const SetAutoAnswer_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetAutoAnswer_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetAutoAnswer_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetAutoAnswer: $.ASN1Decoder<SetAutoAnswer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAutoAnswer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAutoAnswer (el: _Element): SetAutoAnswer {
    if (!_cached_decoder_for_SetAutoAnswer) { _cached_decoder_for_SetAutoAnswer = $._decodeBitString; }
    return _cached_decoder_for_SetAutoAnswer(el);
}

let _cached_encoder_for_SetAutoAnswer: $.ASN1Encoder<SetAutoAnswer> | null = null;

/**
 * @summary Encodes a(n) SetAutoAnswer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAutoAnswer, encoded as an ASN.1 Element.
 */
export
function _encode_SetAutoAnswer (value: SetAutoAnswer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAutoAnswer) { _cached_encoder_for_SetAutoAnswer = $._encodeBitString; }
    return _cached_encoder_for_SetAutoAnswer(value, elGetter);
}


/* eslint-enable */
