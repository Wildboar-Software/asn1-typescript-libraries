/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TransferCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferCall  ::=  BIT STRING
 * {    activeCallConnected             ( 0),     -- initial states
 *     activeCallHold                 ( 1),     -- initial states
 *     heldCallConnected             ( 2),     -- initial states
 *     heldCallHold                 ( 3),     -- initial states
 *     privateData                 ( 4),     -- optional parameters
 *     connectionsParameterInAck         ( 5),     -- optional parameters
 *     endpointDeviceID             ( 6),     -- optional parameters
 *     resultingConnectionInformation         ( 7),     -- optional parameters
 *     transferredCallInfoInAck         ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     deviceIDOnly                 (10),     -- misc characteristics
 *     multipleDevices             (11),     -- misc characteristics
 *     ackModelMultiStep             (12) }
 * ```
 */
export
type TransferCall = BIT_STRING;

/**
 * @summary TransferCall_activeCallConnected
 * @constant
 */
export
const TransferCall_activeCallConnected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activeCallConnected
 * @constant
 */
export
const activeCallConnected: number = TransferCall_activeCallConnected; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_activeCallHold
 * @constant
 */
export
const TransferCall_activeCallHold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary activeCallHold
 * @constant
 */
export
const activeCallHold: number = TransferCall_activeCallHold; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_heldCallConnected
 * @constant
 */
export
const TransferCall_heldCallConnected: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary heldCallConnected
 * @constant
 */
export
const heldCallConnected: number = TransferCall_heldCallConnected; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_heldCallHold
 * @constant
 */
export
const TransferCall_heldCallHold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary heldCallHold
 * @constant
 */
export
const heldCallHold: number = TransferCall_heldCallHold; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_privateData
 * @constant
 */
export
const TransferCall_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = TransferCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_connectionsParameterInAck
 * @constant
 */
export
const TransferCall_connectionsParameterInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionsParameterInAck
 * @constant
 */
export
const connectionsParameterInAck: number = TransferCall_connectionsParameterInAck; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_endpointDeviceID
 * @constant
 */
export
const TransferCall_endpointDeviceID: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary endpointDeviceID
 * @constant
 */
export
const endpointDeviceID: number = TransferCall_endpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_resultingConnectionInformation
 * @constant
 */
export
const TransferCall_resultingConnectionInformation: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary resultingConnectionInformation
 * @constant
 */
export
const resultingConnectionInformation: number = TransferCall_resultingConnectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_transferredCallInfoInAck
 * @constant
 */
export
const TransferCall_transferredCallInfoInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary transferredCallInfoInAck
 * @constant
 */
export
const transferredCallInfoInAck: number = TransferCall_transferredCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_privateDataInAck
 * @constant
 */
export
const TransferCall_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = TransferCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_deviceIDOnly
 * @constant
 */
export
const TransferCall_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = TransferCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_multipleDevices
 * @constant
 */
export
const TransferCall_multipleDevices: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary multipleDevices
 * @constant
 */
export
const multipleDevices: number = TransferCall_multipleDevices; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_ackModelMultiStep
 * @constant
 */
export
const TransferCall_ackModelMultiStep: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = TransferCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TransferCall: $.ASN1Decoder<TransferCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferCall (el: _Element): TransferCall {
    if (!_cached_decoder_for_TransferCall) { _cached_decoder_for_TransferCall = $._decodeBitString; }
    return _cached_decoder_for_TransferCall(el);
}

let _cached_encoder_for_TransferCall: $.ASN1Encoder<TransferCall> | null = null;

/**
 * @summary Encodes a(n) TransferCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferCall, encoded as an ASN.1 Element.
 */
export
function _encode_TransferCall (value: TransferCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferCall) { _cached_encoder_for_TransferCall = $._encodeBitString; }
    return _cached_encoder_for_TransferCall(value, elGetter);
}


/* eslint-enable */
