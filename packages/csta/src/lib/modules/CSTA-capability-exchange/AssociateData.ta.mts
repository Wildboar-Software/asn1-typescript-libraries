/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AssociateData
 * @description
 * Capability bitmap for the Associate Data service (ECMA-269 C.7.1, ECMA-285
 * §9.10). Presence of this entry in `CallAssociatedServList` means the SF
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
 * AssociateData  ::=  BIT STRING
 * {     accountCode                 ( 0),     -- optional parameters
 *     authCode                 ( 1),     -- optional parameters
 *     correlatorData                 ( 2),     -- optional parameters
 *     callQualifyingData             ( 3),     -- optional parameters
 *     callCharacteristics            ( 9),     -- optional parameters
 *     subjectOfCall                (10),     -- optional parameters
 *     languagePreferences            (11),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     deviceIDOnly                 ( 6),     -- misc characteristics
 *     rejectsRequestsWithOldConnectionID     ( 7),     -- misc characteristics
 *     ackModelMultiStep             ( 8),     -- misc characteristics
 *     deviceInfo                (12) }
 * ```
 */
export
type AssociateData = BIT_STRING;

/**
 * @summary AssociateData_accountCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `accountCode` parameter (ECMA-269
 * C.7.1).
 */
export
const AssociateData_accountCode: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 * @description
 * Alias of `AssociateData_accountCode`.
 */
export
const accountCode: number = AssociateData_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_authCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `authCode` parameter (ECMA-269
 * C.7.1).
 */
export
const AssociateData_authCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 * @description
 * Alias of `AssociateData_authCode`.
 */
export
const authCode: number = AssociateData_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.7.1).
 */
export
const AssociateData_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `AssociateData_correlatorData`.
 */
export
const correlatorData: number = AssociateData_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_callQualifyingData
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.1).
 */
export
const AssociateData_callQualifyingData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callQualifyingData
 * @constant
 * @description
 * Alias of `AssociateData_callQualifyingData`.
 */
export
const callQualifyingData: number = AssociateData_callQualifyingData; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.7.1).
 */
export
const AssociateData_callCharacteristics: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `AssociateData_callCharacteristics`.
 */
export
const callCharacteristics: number = AssociateData_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.7.1).
 */
export
const AssociateData_subjectOfCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `AssociateData_subjectOfCall`.
 */
export
const subjectOfCall: number = AssociateData_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.7.1).
 */
export
const AssociateData_languagePreferences: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `AssociateData_languagePreferences`.
 */
export
const languagePreferences: number = AssociateData_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.7.1).
 */
export
const AssociateData_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AssociateData_privateData`.
 */
export
const privateData: number = AssociateData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.7.1).
 */
export
const AssociateData_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `AssociateData_privateDataInAck`.
 */
export
const privateDataInAck: number = AssociateData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.7.1).
 */
export
const AssociateData_deviceIDOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `AssociateData_deviceIDOnly`.
 */
export
const deviceIDOnly: number = AssociateData_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_rejectsRequestsWithOldConnectionID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.1).
 */
export
const AssociateData_rejectsRequestsWithOldConnectionID: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary rejectsRequestsWithOldConnectionID
 * @constant
 * @description
 * Alias of `AssociateData_rejectsRequestsWithOldConnectionID`.
 */
export
const rejectsRequestsWithOldConnectionID: number = AssociateData_rejectsRequestsWithOldConnectionID; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.7.1).
 */
export
const AssociateData_ackModelMultiStep: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `AssociateData_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = AssociateData_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_deviceInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.7.1).
 */
export
const AssociateData_deviceInfo: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary deviceInfo
 * @constant
 * @description
 * Alias of `AssociateData_deviceInfo`.
 */
export
const deviceInfo: number = AssociateData_deviceInfo; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AssociateData: $.ASN1Decoder<AssociateData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociateData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociateData (el: _Element): AssociateData {
    if (!_cached_decoder_for_AssociateData) { _cached_decoder_for_AssociateData = $._decodeBitString; }
    return _cached_decoder_for_AssociateData(el);
}

let _cached_encoder_for_AssociateData: $.ASN1Encoder<AssociateData> | null = null;

/**
 * @summary Encodes a(n) AssociateData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociateData, encoded as an ASN.1 Element.
 */
export
function _encode_AssociateData (value: AssociateData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociateData) { _cached_encoder_for_AssociateData = $._encodeBitString; }
    return _cached_encoder_for_AssociateData(value, elGetter);
}


/* eslint-enable */
