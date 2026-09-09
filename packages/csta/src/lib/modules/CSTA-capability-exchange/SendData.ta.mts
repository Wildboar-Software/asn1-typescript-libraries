/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SendData
 * @description
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
 */
export
const SendData_displayAttribPhyBaseRowNumber: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseRowNumber
 * @constant
 */
export
const displayAttribPhyBaseRowNumber: number = SendData_displayAttribPhyBaseRowNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_displayAttribPhyBaseColumnNumber
 * @constant
 */
export
const SendData_displayAttribPhyBaseColumnNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribPhyBaseColumnNumber
 * @constant
 */
export
const displayAttribPhyBaseColumnNumber: number = SendData_displayAttribPhyBaseColumnNumber; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_displayAttribOffset
 * @constant
 */
export
const SendData_displayAttribOffset: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary displayAttribOffset
 * @constant
 */
export
const displayAttribOffset: number = SendData_displayAttribOffset; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseTerminationCharReceived
 * @constant
 */
export
const SendData_ioCauseTerminationCharReceived: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseTerminationCharReceived
 * @constant
 */
export
const ioCauseTerminationCharReceived: number = SendData_ioCauseTerminationCharReceived; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseCharCountReached
 * @constant
 */
export
const SendData_ioCauseCharCountReached: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseCharCountReached
 * @constant
 */
export
const ioCauseCharCountReached: number = SendData_ioCauseCharCountReached; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseTimeout
 * @constant
 */
export
const SendData_ioCauseTimeout: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseTimeout
 * @constant
 */
export
const ioCauseTimeout: number = SendData_ioCauseTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_ioCauseSfTerminated
 * @constant
 */
export
const SendData_ioCauseSfTerminated: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary ioCauseSfTerminated
 * @constant
 */
export
const ioCauseSfTerminated: number = SendData_ioCauseSfTerminated; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_privateData
 * @constant
 */
export
const SendData_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SendData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_privateDataInAck
 * @constant
 */
export
const SendData_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SendData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SendData_supportsModifyingPosition
 * @constant
 */
export
const SendData_supportsModifyingPosition: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary supportsModifyingPosition
 * @constant
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
