/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SendMulticastData
 * @description
 * Capability bitmap for the Send Multicast Data service (ECMA-269 C.17.10,
 * ECMA-285 §9.10). Presence of this entry in `IOServicesServList` means the SF
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
 * SendMulticastData  ::=  BIT STRING
 * {     ioData                     ( 0),     -- optional parameters
 *     displayAttribPhyBaseRowNumber         ( 1),     -- optional parameters
 *     displayAttribPhyBaseColumnNumber     ( 2),     -- optional parameters
 *     displayAttribOffset             ( 3),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     supportsModifyingPosition         ( 6) }
 * ```
 */
export
type SendMulticastData = BIT_STRING;

/**
 * @summary SendMulticastData_ioData
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.10).
 */
export
const SendMulticastData_ioData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ioData
 * @constant
 * @description
 * Alias of `SendMulticastData_ioData`.
 */
export
const ioData: number = SendMulticastData_ioData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_displayAttribPhyBaseRowNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.10).
 */
export
const SendMulticastData_displayAttribPhyBaseRowNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseRowNumber
 * @constant
 * @description
 * Alias of `SendMulticastData_displayAttribPhyBaseRowNumber`.
 */
export
const displayAttribPhyBaseRowNumber: number = SendMulticastData_displayAttribPhyBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_displayAttribPhyBaseColumnNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.10).
 */
export
const SendMulticastData_displayAttribPhyBaseColumnNumber: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseColumnNumber
 * @constant
 * @description
 * Alias of `SendMulticastData_displayAttribPhyBaseColumnNumber`.
 */
export
const displayAttribPhyBaseColumnNumber: number = SendMulticastData_displayAttribPhyBaseColumnNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_displayAttribOffset
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.10).
 */
export
const SendMulticastData_displayAttribOffset: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribOffset
 * @constant
 * @description
 * Alias of `SendMulticastData_displayAttribOffset`.
 */
export
const displayAttribOffset: number = SendMulticastData_displayAttribOffset; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.10).
 */
export
const SendMulticastData_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SendMulticastData_privateData`.
 */
export
const privateData: number = SendMulticastData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.10).
 */
export
const SendMulticastData_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SendMulticastData_privateDataInAck`.
 */
export
const privateDataInAck: number = SendMulticastData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SendMulticastData_supportsModifyingPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.10).
 */
export
const SendMulticastData_supportsModifyingPosition: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
 * @description
 * Alias of `SendMulticastData_supportsModifyingPosition`.
 */
export
const supportsModifyingPosition: number = SendMulticastData_supportsModifyingPosition; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SendMulticastData: $.ASN1Decoder<SendMulticastData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendMulticastData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendMulticastData (el: _Element): SendMulticastData {
    if (!_cached_decoder_for_SendMulticastData) { _cached_decoder_for_SendMulticastData = $._decodeBitString; }
    return _cached_decoder_for_SendMulticastData(el);
}

let _cached_encoder_for_SendMulticastData: $.ASN1Encoder<SendMulticastData> | null = null;

/**
 * @summary Encodes a(n) SendMulticastData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendMulticastData, encoded as an ASN.1 Element.
 */
export
function _encode_SendMulticastData (value: SendMulticastData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendMulticastData) { _cached_encoder_for_SendMulticastData = $._encodeBitString; }
    return _cached_encoder_for_SendMulticastData(value, elGetter);
}


/* eslint-enable */
