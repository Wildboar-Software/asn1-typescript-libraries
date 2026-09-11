/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CancelCallBack
 * @description
 * Capability bitmap for the Cancel Call Back service (ECMA-269 C.14.3, ECMA-285
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
 * CancelCallBack  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2),     -- misc characteristics
 *     supportsClearing             ( 3) }
 * ```
 */
export
type CancelCallBack = BIT_STRING;

/**
 * @summary CancelCallBack_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.3).
 */
export
const CancelCallBack_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CancelCallBack_privateData`.
 */
export
const privateData: number = CancelCallBack_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.3).
 */
export
const CancelCallBack_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `CancelCallBack_privateDataInAck`.
 */
export
const privateDataInAck: number = CancelCallBack_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.3).
 */
export
const CancelCallBack_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `CancelCallBack_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = CancelCallBack_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary CancelCallBack_supportsClearing
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.3).
 */
export
const CancelCallBack_supportsClearing: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary supportsClearing
 * @constant
 * @description
 * Alias of `CancelCallBack_supportsClearing`.
 */
export
const supportsClearing: number = CancelCallBack_supportsClearing; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CancelCallBack: $.ASN1Decoder<CancelCallBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelCallBack
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelCallBack (el: _Element): CancelCallBack {
    if (!_cached_decoder_for_CancelCallBack) { _cached_decoder_for_CancelCallBack = $._decodeBitString; }
    return _cached_decoder_for_CancelCallBack(el);
}

let _cached_encoder_for_CancelCallBack: $.ASN1Encoder<CancelCallBack> | null = null;

/**
 * @summary Encodes a(n) CancelCallBack into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelCallBack, encoded as an ASN.1 Element.
 */
export
function _encode_CancelCallBack (value: CancelCallBack, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelCallBack) { _cached_encoder_for_CancelCallBack = $._encodeBitString; }
    return _cached_encoder_for_CancelCallBack(value, elGetter);
}


/* eslint-enable */
