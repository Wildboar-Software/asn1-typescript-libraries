/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StartCDRTransmission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartCDRTransmission  ::=  BIT STRING
 * {     transferModeTransferAtEndOfCall     ( 0),     -- optional parameters
 *     transferModeTransferOnRequest         ( 1),     -- optional parameters
 *     transferModeTransferOnThresholdReached     ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     privateDataInAck             ( 4) }
 * ```
 */
export
type StartCDRTransmission = BIT_STRING;

/**
 * @summary StartCDRTransmission_transferModeTransferAtEndOfCall
 * @constant
 */
export
const StartCDRTransmission_transferModeTransferAtEndOfCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary transferModeTransferAtEndOfCall
 * @constant
 */
export
const transferModeTransferAtEndOfCall: number = StartCDRTransmission_transferModeTransferAtEndOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary StartCDRTransmission_transferModeTransferOnRequest
 * @constant
 */
export
const StartCDRTransmission_transferModeTransferOnRequest: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary transferModeTransferOnRequest
 * @constant
 */
export
const transferModeTransferOnRequest: number = StartCDRTransmission_transferModeTransferOnRequest; /* SHORT_NAMED_BIT */

/**
 * @summary StartCDRTransmission_transferModeTransferOnThresholdReached
 * @constant
 */
export
const StartCDRTransmission_transferModeTransferOnThresholdReached: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary transferModeTransferOnThresholdReached
 * @constant
 */
export
const transferModeTransferOnThresholdReached: number = StartCDRTransmission_transferModeTransferOnThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary StartCDRTransmission_privateData
 * @constant
 */
export
const StartCDRTransmission_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StartCDRTransmission_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StartCDRTransmission_privateDataInAck
 * @constant
 */
export
const StartCDRTransmission_privateDataInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = StartCDRTransmission_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StartCDRTransmission: $.ASN1Decoder<StartCDRTransmission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartCDRTransmission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartCDRTransmission (el: _Element): StartCDRTransmission {
    if (!_cached_decoder_for_StartCDRTransmission) { _cached_decoder_for_StartCDRTransmission = $._decodeBitString; }
    return _cached_decoder_for_StartCDRTransmission(el);
}

let _cached_encoder_for_StartCDRTransmission: $.ASN1Encoder<StartCDRTransmission> | null = null;

/**
 * @summary Encodes a(n) StartCDRTransmission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartCDRTransmission, encoded as an ASN.1 Element.
 */
export
function _encode_StartCDRTransmission (value: StartCDRTransmission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartCDRTransmission) { _cached_encoder_for_StartCDRTransmission = $._encodeBitString; }
    return _cached_encoder_for_StartCDRTransmission(value, elGetter);
}


/* eslint-enable */
