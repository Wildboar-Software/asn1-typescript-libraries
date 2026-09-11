/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallBackNonCallRel
 * @description
 * Capability bitmap for the Call Back Non-Call-Related service (ECMA-269
 * C.14.1, ECMA-285 §9.10). Presence of this entry in `LogicalServList` means
 * the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackNonCallRel  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     additionalReqForbidden             ( 2),     -- optional parameters
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type CallBackNonCallRel = BIT_STRING;

/**
 * @summary CallBackNonCallRel_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.1).
 */
export
const CallBackNonCallRel_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CallBackNonCallRel_privateData`.
 */
export
const privateData: number = CallBackNonCallRel_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackNonCallRel_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.1).
 */
export
const CallBackNonCallRel_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `CallBackNonCallRel_privateDataInAck`.
 */
export
const privateDataInAck: number = CallBackNonCallRel_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackNonCallRel_additionalReqForbidden
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.1).
 */
export
const CallBackNonCallRel_additionalReqForbidden: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary additionalReqForbidden
 * @constant
 * @description
 * Alias of `CallBackNonCallRel_additionalReqForbidden`.
 */
export
const additionalReqForbidden: number = CallBackNonCallRel_additionalReqForbidden; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackNonCallRel_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.1).
 */
export
const CallBackNonCallRel_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `CallBackNonCallRel_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = CallBackNonCallRel_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackNonCallRel: $.ASN1Decoder<CallBackNonCallRel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackNonCallRel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackNonCallRel (el: _Element): CallBackNonCallRel {
    if (!_cached_decoder_for_CallBackNonCallRel) { _cached_decoder_for_CallBackNonCallRel = $._decodeBitString; }
    return _cached_decoder_for_CallBackNonCallRel(el);
}

let _cached_encoder_for_CallBackNonCallRel: $.ASN1Encoder<CallBackNonCallRel> | null = null;

/**
 * @summary Encodes a(n) CallBackNonCallRel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackNonCallRel, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackNonCallRel (value: CallBackNonCallRel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackNonCallRel) { _cached_encoder_for_CallBackNonCallRel = $._encodeBitString; }
    return _cached_encoder_for_CallBackNonCallRel(value, elGetter);
}


/* eslint-enable */
