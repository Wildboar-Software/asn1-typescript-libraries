/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConcatenateMsg
 * @description
 * Capability bitmap for the Concatenate Message service (ECMA-269 C.19.3,
 * ECMA-285 §9.10). Presence of this entry in `VoiceUnitServList` means the SF
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
 * ConcatenateMsg  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type ConcatenateMsg = BIT_STRING;

/**
 * @summary ConcatenateMsg_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.3).
 */
export
const ConcatenateMsg_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ConcatenateMsg_privateData`.
 */
export
const privateData: number = ConcatenateMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ConcatenateMsg_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.3).
 */
export
const ConcatenateMsg_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ConcatenateMsg_privateDataInAck`.
 */
export
const privateDataInAck: number = ConcatenateMsg_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConcatenateMsg: $.ASN1Decoder<ConcatenateMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConcatenateMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConcatenateMsg (el: _Element): ConcatenateMsg {
    if (!_cached_decoder_for_ConcatenateMsg) { _cached_decoder_for_ConcatenateMsg = $._decodeBitString; }
    return _cached_decoder_for_ConcatenateMsg(el);
}

let _cached_encoder_for_ConcatenateMsg: $.ASN1Encoder<ConcatenateMsg> | null = null;

/**
 * @summary Encodes a(n) ConcatenateMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConcatenateMsg, encoded as an ASN.1 Element.
 */
export
function _encode_ConcatenateMsg (value: ConcatenateMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConcatenateMsg) { _cached_encoder_for_ConcatenateMsg = $._encodeBitString; }
    return _cached_encoder_for_ConcatenateMsg(value, elGetter);
}


/* eslint-enable */
