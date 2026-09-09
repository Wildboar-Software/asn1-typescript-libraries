/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SingleStepTransfer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SingleStepTransfer  ::=  BIT STRING
 * {     accountCode                 ( 0),     -- optional parameters
 *     authCode                 ( 1),     -- optional parameters
 *     correlatorData                 ( 2),     -- optional parameters
 *     userData                 ( 3),     -- optional parameters
 *     subjectOfCall                (13),     -- optional parameters
 *     languagePreferences            (14),     -- optional parameters
 *     reason                    (15),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     connectionParameterInAck         ( 5),     -- optional parameters
 *     endpointDeviceID             ( 6),     -- optional parameters
 *     resultionConnectionInformation         ( 7),     -- optional parameters
 *     transferredCollInfoInAck         ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     deviceIDOnly                 (10),     -- misc characteristics
 *     multipleDevices             (11),     -- misc characteristics
 *     ackModelMultiStep             (12),    -- misc characteristics
 *     callCharacteristicsinRequest        (16) }
 * ```
 */
export
type SingleStepTransfer = BIT_STRING;

/**
 * @summary SingleStepTransfer_accountCode
 * @constant
 */
export
const SingleStepTransfer_accountCode: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = SingleStepTransfer_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_authCode
 * @constant
 */
export
const SingleStepTransfer_authCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = SingleStepTransfer_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_correlatorData
 * @constant
 */
export
const SingleStepTransfer_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = SingleStepTransfer_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_userData
 * @constant
 */
export
const SingleStepTransfer_userData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = SingleStepTransfer_userData; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_subjectOfCall
 * @constant
 */
export
const SingleStepTransfer_subjectOfCall: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = SingleStepTransfer_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_languagePreferences
 * @constant
 */
export
const SingleStepTransfer_languagePreferences: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = SingleStepTransfer_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_reason
 * @constant
 */
export
const SingleStepTransfer_reason: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 */
export
const reason: number = SingleStepTransfer_reason; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_privateData
 * @constant
 */
export
const SingleStepTransfer_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SingleStepTransfer_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_connectionParameterInAck
 * @constant
 */
export
const SingleStepTransfer_connectionParameterInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary connectionParameterInAck
 * @constant
 */
export
const connectionParameterInAck: number = SingleStepTransfer_connectionParameterInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_endpointDeviceID
 * @constant
 */
export
const SingleStepTransfer_endpointDeviceID: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary endpointDeviceID
 * @constant
 */
export
const endpointDeviceID: number = SingleStepTransfer_endpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_resultionConnectionInformation
 * @constant
 */
export
const SingleStepTransfer_resultionConnectionInformation: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary resultionConnectionInformation
 * @constant
 */
export
const resultionConnectionInformation: number = SingleStepTransfer_resultionConnectionInformation; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_transferredCollInfoInAck
 * @constant
 */
export
const SingleStepTransfer_transferredCollInfoInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary transferredCollInfoInAck
 * @constant
 */
export
const transferredCollInfoInAck: number = SingleStepTransfer_transferredCollInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_privateDataInAck
 * @constant
 */
export
const SingleStepTransfer_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SingleStepTransfer_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_deviceIDOnly
 * @constant
 */
export
const SingleStepTransfer_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = SingleStepTransfer_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_multipleDevices
 * @constant
 */
export
const SingleStepTransfer_multipleDevices: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary multipleDevices
 * @constant
 */
export
const multipleDevices: number = SingleStepTransfer_multipleDevices; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_ackModelMultiStep
 * @constant
 */
export
const SingleStepTransfer_ackModelMultiStep: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SingleStepTransfer_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepTransfer_callCharacteristicsinRequest
 * @constant
 */
export
const SingleStepTransfer_callCharacteristicsinRequest: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsinRequest
 * @constant
 */
export
const callCharacteristicsinRequest: number = SingleStepTransfer_callCharacteristicsinRequest; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SingleStepTransfer: $.ASN1Decoder<SingleStepTransfer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SingleStepTransfer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SingleStepTransfer (el: _Element): SingleStepTransfer {
    if (!_cached_decoder_for_SingleStepTransfer) { _cached_decoder_for_SingleStepTransfer = $._decodeBitString; }
    return _cached_decoder_for_SingleStepTransfer(el);
}

let _cached_encoder_for_SingleStepTransfer: $.ASN1Encoder<SingleStepTransfer> | null = null;

/**
 * @summary Encodes a(n) SingleStepTransfer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingleStepTransfer, encoded as an ASN.1 Element.
 */
export
function _encode_SingleStepTransfer (value: SingleStepTransfer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SingleStepTransfer) { _cached_encoder_for_SingleStepTransfer = $._encodeBitString; }
    return _cached_encoder_for_SingleStepTransfer(value, elGetter);
}


/* eslint-enable */
