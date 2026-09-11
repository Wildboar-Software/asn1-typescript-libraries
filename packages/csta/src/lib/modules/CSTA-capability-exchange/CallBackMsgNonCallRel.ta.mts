/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallBackMsgNonCallRel
 * @description
 * Capability bitmap for the Call Back Message Non-Call-Related service
 * (ECMA-269 C.14.2, ECMA-285 §9.10). Presence of this entry in
 * `LogicalServList` means the SF supports that service. Each set bit is an
 * optional parameter, enumerated value, initial connection state, or
 * miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMsgNonCallRel  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     additionalReqForbidden             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type CallBackMsgNonCallRel = BIT_STRING;

/**
 * @summary CallBackMsgNonCallRel_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.2).
 */
export
const CallBackMsgNonCallRel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CallBackMsgNonCallRel_privateData`.
 */
export
const privateData: number = CallBackMsgNonCallRel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMsgNonCallRel_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.2).
 */
export
const CallBackMsgNonCallRel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `CallBackMsgNonCallRel_privateDataInAck`.
 */
export
const privateDataInAck: number = CallBackMsgNonCallRel_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMsgNonCallRel_additionalReqForbidden
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.2).
 */
export
const CallBackMsgNonCallRel_additionalReqForbidden: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary additionalReqForbidden
 * @constant
 * @description
 * Alias of `CallBackMsgNonCallRel_additionalReqForbidden`.
 */
export
const additionalReqForbidden: number = CallBackMsgNonCallRel_additionalReqForbidden; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMsgNonCallRel_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.2).
 */
export
const CallBackMsgNonCallRel_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `CallBackMsgNonCallRel_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = CallBackMsgNonCallRel_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackMsgNonCallRel: $.ASN1Decoder<CallBackMsgNonCallRel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMsgNonCallRel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMsgNonCallRel (el: _Element): CallBackMsgNonCallRel {
    if (!_cached_decoder_for_CallBackMsgNonCallRel) { _cached_decoder_for_CallBackMsgNonCallRel = $._decodeBitString; }
    return _cached_decoder_for_CallBackMsgNonCallRel(el);
}

let _cached_encoder_for_CallBackMsgNonCallRel: $.ASN1Encoder<CallBackMsgNonCallRel> | null = null;

/**
 * @summary Encodes a(n) CallBackMsgNonCallRel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMsgNonCallRel, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMsgNonCallRel (value: CallBackMsgNonCallRel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMsgNonCallRel) { _cached_encoder_for_CallBackMsgNonCallRel = $._encodeBitString; }
    return _cached_encoder_for_CallBackMsgNonCallRel(value, elGetter);
}


/* eslint-enable */
