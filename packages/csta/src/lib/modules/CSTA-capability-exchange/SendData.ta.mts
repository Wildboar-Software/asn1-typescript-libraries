/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SendData
 * @description
 * Capability bitmap for the Send Data service (ECMA-269 C.17.9, ECMA-285
 * §9.10). Presence of this entry in `IOServicesServList` means the SF supports
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
 * SendData  ::=  BIT STRING
 * {     displayAttribPhyBaseRowNumber         ( 0),     -- optional parameters
 *     displayAttribPhyBaseColumnNumber     ( 1),     -- optional parameters
 *     displayAttribOffset             ( 2),     -- optional parameters
 *     ioCauseTerminationCharReceived         ( 3),     -- optional parameters
 *     ioCauseCharCountReached         ( 4),     -- optional parameters
 *     ioCauseTimeout                 ( 5),     -- optional parameters
 *     ioCauseSfTerminated             ( 6),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8),     -- optional parameters
 *     supportsModifyingPosition         ( 9) }
 * ```
 */
export
type SendData = BIT_STRING;

/**
 * @summary SendData_displayAttribPhyBaseRowNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_displayAttribPhyBaseRowNumber: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseRowNumber
 * @constant
 * @description
 * Alias of `SendData_displayAttribPhyBaseRowNumber`.
 */
export
const displayAttribPhyBaseRowNumber: number = SendData_displayAttribPhyBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_displayAttribPhyBaseColumnNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_displayAttribPhyBaseColumnNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseColumnNumber
 * @constant
 * @description
 * Alias of `SendData_displayAttribPhyBaseColumnNumber`.
 */
export
const displayAttribPhyBaseColumnNumber: number = SendData_displayAttribPhyBaseColumnNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_displayAttribOffset
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_displayAttribOffset: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribOffset
 * @constant
 * @description
 * Alias of `SendData_displayAttribOffset`.
 */
export
const displayAttribOffset: number = SendData_displayAttribOffset; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseTerminationCharReceived
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_ioCauseTerminationCharReceived: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseTerminationCharReceived
 * @constant
 * @description
 * Alias of `SendData_ioCauseTerminationCharReceived`.
 */
export
const ioCauseTerminationCharReceived: number = SendData_ioCauseTerminationCharReceived; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseCharCountReached
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_ioCauseCharCountReached: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseCharCountReached
 * @constant
 * @description
 * Alias of `SendData_ioCauseCharCountReached`.
 */
export
const ioCauseCharCountReached: number = SendData_ioCauseCharCountReached; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_ioCauseTimeout: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseTimeout
 * @constant
 * @description
 * Alias of `SendData_ioCauseTimeout`.
 */
export
const ioCauseTimeout: number = SendData_ioCauseTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseSfTerminated
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_ioCauseSfTerminated: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseSfTerminated
 * @constant
 * @description
 * Alias of `SendData_ioCauseSfTerminated`.
 */
export
const ioCauseSfTerminated: number = SendData_ioCauseSfTerminated; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.9).
 */
export
const SendData_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SendData_privateData`.
 */
export
const privateData: number = SendData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.9).
 */
export
const SendData_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SendData_privateDataInAck`.
 */
export
const privateDataInAck: number = SendData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_supportsModifyingPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.9).
 */
export
const SendData_supportsModifyingPosition: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
 * @description
 * Alias of `SendData_supportsModifyingPosition`.
 */
export
const supportsModifyingPosition: number = SendData_supportsModifyingPosition; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SendData: $.ASN1Decoder<SendData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendData (el: _Element): SendData {
    if (!_cached_decoder_for_SendData) { _cached_decoder_for_SendData = $._decodeBitString; }
    return _cached_decoder_for_SendData(el);
}

let _cached_encoder_for_SendData: $.ASN1Encoder<SendData> | null = null;

/**
 * @summary Encodes a(n) SendData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendData, encoded as an ASN.1 Element.
 */
export
function _encode_SendData (value: SendData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendData) { _cached_encoder_for_SendData = $._encodeBitString; }
    return _cached_encoder_for_SendData(value, elGetter);
}


/* eslint-enable */
