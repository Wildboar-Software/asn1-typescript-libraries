/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetMessageWaitingIndicator
 * @description
 * Capability bitmap for the Get Message Waiting Indicator service (ECMA-269
 * C.12.8, ECMA-285 §9.10). Presence of this entry in `PhysDevServList` means
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
 * GetMessageWaitingIndicator  ::=  BIT STRING
 * {    privateData                 ( 0),     -- optional parameter
 *     deviceForMsgInAck             ( 1),     -- optional parameter
 *     lampIsPresentInAck             ( 2),     -- optional parameter
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type GetMessageWaitingIndicator = BIT_STRING;

/**
 * @summary GetMessageWaitingIndicator_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.8).
 */
export
const GetMessageWaitingIndicator_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetMessageWaitingIndicator_privateData`.
 */
export
const privateData: number = GetMessageWaitingIndicator_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetMessageWaitingIndicator_deviceForMsgInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `deviceForMsg` in the acknowledgement
 * (ECMA-269 C.12.8).
 */
export
const GetMessageWaitingIndicator_deviceForMsgInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deviceForMsgInAck
 * @constant
 * @description
 * Alias of `GetMessageWaitingIndicator_deviceForMsgInAck`.
 */
export
const deviceForMsgInAck: number = GetMessageWaitingIndicator_deviceForMsgInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetMessageWaitingIndicator_lampIsPresentInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `lampIsPresent` in the acknowledgement
 * (ECMA-269 C.12.8).
 */
export
const GetMessageWaitingIndicator_lampIsPresentInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lampIsPresentInAck
 * @constant
 * @description
 * Alias of `GetMessageWaitingIndicator_lampIsPresentInAck`.
 */
export
const lampIsPresentInAck: number = GetMessageWaitingIndicator_lampIsPresentInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetMessageWaitingIndicator_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.8).
 */
export
const GetMessageWaitingIndicator_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetMessageWaitingIndicator_privateDataInAck`.
 */
export
const privateDataInAck: number = GetMessageWaitingIndicator_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetMessageWaitingIndicator: $.ASN1Decoder<GetMessageWaitingIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMessageWaitingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMessageWaitingIndicator (el: _Element): GetMessageWaitingIndicator {
    if (!_cached_decoder_for_GetMessageWaitingIndicator) { _cached_decoder_for_GetMessageWaitingIndicator = $._decodeBitString; }
    return _cached_decoder_for_GetMessageWaitingIndicator(el);
}

let _cached_encoder_for_GetMessageWaitingIndicator: $.ASN1Encoder<GetMessageWaitingIndicator> | null = null;

/**
 * @summary Encodes a(n) GetMessageWaitingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMessageWaitingIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_GetMessageWaitingIndicator (value: GetMessageWaitingIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMessageWaitingIndicator) { _cached_encoder_for_GetMessageWaitingIndicator = $._encodeBitString; }
    return _cached_encoder_for_GetMessageWaitingIndicator(value, elGetter);
}


/* eslint-enable */
