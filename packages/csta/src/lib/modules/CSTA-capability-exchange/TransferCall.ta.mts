/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TransferCall
 * @description
 * Capability bitmap for the Transfer Call service (ECMA-269 C.5.27, ECMA-285
 * §9.10). Presence of this entry in `CallControlServList` means the SF supports
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.27).
 */
export
const TransferCall_activeCallConnected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activeCallConnected
 * @constant
 * @description
 * Alias of `TransferCall_activeCallConnected`.
 */
export
const activeCallConnected: number = TransferCall_activeCallConnected; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_activeCallHold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.27).
 */
export
const TransferCall_activeCallHold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary activeCallHold
 * @constant
 * @description
 * Alias of `TransferCall_activeCallHold`.
 */
export
const activeCallHold: number = TransferCall_activeCallHold; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_heldCallConnected
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.27).
 */
export
const TransferCall_heldCallConnected: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary heldCallConnected
 * @constant
 * @description
 * Alias of `TransferCall_heldCallConnected`.
 */
export
const heldCallConnected: number = TransferCall_heldCallConnected; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_heldCallHold
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.27).
 */
export
const TransferCall_heldCallHold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary heldCallHold
 * @constant
 * @description
 * Alias of `TransferCall_heldCallHold`.
 */
export
const heldCallHold: number = TransferCall_heldCallHold; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.27).
 */
export
const TransferCall_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `TransferCall_privateData`.
 */
export
const privateData: number = TransferCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_connectionsParameterInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `connectionsParameter` in the
 * acknowledgement (ECMA-269 C.5.27).
 */
export
const TransferCall_connectionsParameterInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionsParameterInAck
 * @constant
 * @description
 * Alias of `TransferCall_connectionsParameterInAck`.
 */
export
const connectionsParameterInAck: number = TransferCall_connectionsParameterInAck; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_endpointDeviceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.27).
 */
export
const TransferCall_endpointDeviceID: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary endpointDeviceID
 * @constant
 * @description
 * Alias of `TransferCall_endpointDeviceID`.
 */
export
const endpointDeviceID: number = TransferCall_endpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_resultingConnectionInformation
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.27).
 */
export
const TransferCall_resultingConnectionInformation: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary resultingConnectionInformation
 * @constant
 * @description
 * Alias of `TransferCall_resultingConnectionInformation`.
 */
export
const resultingConnectionInformation: number = TransferCall_resultingConnectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_transferredCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `transferredCallInfo` in the
 * acknowledgement (ECMA-269 C.5.27).
 */
export
const TransferCall_transferredCallInfoInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary transferredCallInfoInAck
 * @constant
 * @description
 * Alias of `TransferCall_transferredCallInfoInAck`.
 */
export
const transferredCallInfoInAck: number = TransferCall_transferredCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.27).
 */
export
const TransferCall_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `TransferCall_privateDataInAck`.
 */
export
const privateDataInAck: number = TransferCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.27).
 */
export
const TransferCall_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `TransferCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = TransferCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_multipleDevices
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.27).
 */
export
const TransferCall_multipleDevices: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary multipleDevices
 * @constant
 * @description
 * Alias of `TransferCall_multipleDevices`.
 */
export
const multipleDevices: number = TransferCall_multipleDevices; /* SHORT_NAMED_BIT */

/**
 * @summary TransferCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.27).
 */
export
const TransferCall_ackModelMultiStep: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `TransferCall_ackModelMultiStep`.
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
