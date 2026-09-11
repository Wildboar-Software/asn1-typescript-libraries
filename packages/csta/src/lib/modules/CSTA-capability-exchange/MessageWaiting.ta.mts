/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MessageWaiting
 * @description
 * Capability bitmap for the Message Waiting event (ECMA-269 C.13.6, ECMA-285
 * §9.10). Presence of this entry in `PhysDevEvtsList` means the SF supports
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
 * MessageWaiting  ::=  BIT STRING
 * {     deviceForMsg                 ( 0),     -- optional parameters
 *     privateData                 ( 1) }
 * ```
 */
export
type MessageWaiting = BIT_STRING;

/**
 * @summary MessageWaiting_deviceForMsg
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.13.6).
 */
export
const MessageWaiting_deviceForMsg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deviceForMsg
 * @constant
 * @description
 * Alias of `MessageWaiting_deviceForMsg`.
 */
export
const deviceForMsg: number = MessageWaiting_deviceForMsg; /* SHORT_NAMED_BIT */

/**
 * @summary MessageWaiting_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.6).
 */
export
const MessageWaiting_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `MessageWaiting_privateData`.
 */
export
const privateData: number = MessageWaiting_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MessageWaiting: $.ASN1Decoder<MessageWaiting> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageWaiting
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageWaiting (el: _Element): MessageWaiting {
    if (!_cached_decoder_for_MessageWaiting) { _cached_decoder_for_MessageWaiting = $._decodeBitString; }
    return _cached_decoder_for_MessageWaiting(el);
}

let _cached_encoder_for_MessageWaiting: $.ASN1Encoder<MessageWaiting> | null = null;

/**
 * @summary Encodes a(n) MessageWaiting into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageWaiting, encoded as an ASN.1 Element.
 */
export
function _encode_MessageWaiting (value: MessageWaiting, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageWaiting) { _cached_encoder_for_MessageWaiting = $._encodeBitString; }
    return _cached_encoder_for_MessageWaiting(value, elGetter);
}


/* eslint-enable */
