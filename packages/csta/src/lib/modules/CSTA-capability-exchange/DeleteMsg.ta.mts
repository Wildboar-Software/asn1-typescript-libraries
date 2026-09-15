/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DeleteMsg
 * @description
 * Capability bitmap for the Delete Message service (ECMA-269 C.19.5, ECMA-285
 * §9.10). Presence of this entry in `VoiceUnitServList` means the SF supports
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
 * DeleteMsg  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type DeleteMsg = BIT_STRING;

/**
 * @summary DeleteMsg_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.5).
 */
export
const DeleteMsg_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DeleteMsg_privateData`.
 */
export
const privateData: number = DeleteMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DeleteMsg_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.5).
 */
export
const DeleteMsg_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `DeleteMsg_privateDataInAck`.
 */
export
const privateDataInAck: number = DeleteMsg_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeleteMsg: $.ASN1Decoder<DeleteMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteMsg (el: _Element): DeleteMsg {
    if (!_cached_decoder_for_DeleteMsg) { _cached_decoder_for_DeleteMsg = $._decodeBitString; }
    return _cached_decoder_for_DeleteMsg(el);
}

let _cached_encoder_for_DeleteMsg: $.ASN1Encoder<DeleteMsg> | null = null;

/**
 * @summary Encodes a(n) DeleteMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteMsg, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteMsg (value: DeleteMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteMsg) { _cached_encoder_for_DeleteMsg = $._encodeBitString; }
    return _cached_encoder_for_DeleteMsg(value, elGetter);
}


/* eslint-enable */
