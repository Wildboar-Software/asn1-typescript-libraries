/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary AssociateData
 * @description
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
 */
export
const AssociateData_accountCode: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = AssociateData_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_authCode
 * @constant
 */
export
const AssociateData_authCode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = AssociateData_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_correlatorData
 * @constant
 */
export
const AssociateData_correlatorData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = AssociateData_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_callQualifyingData
 * @constant
 */
export
const AssociateData_callQualifyingData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callQualifyingData
 * @constant
 */
export
const callQualifyingData: number = AssociateData_callQualifyingData; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_callCharacteristics
 * @constant
 */
export
const AssociateData_callCharacteristics: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = AssociateData_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_subjectOfCall
 * @constant
 */
export
const AssociateData_subjectOfCall: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = AssociateData_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_languagePreferences
 * @constant
 */
export
const AssociateData_languagePreferences: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = AssociateData_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_privateData
 * @constant
 */
export
const AssociateData_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AssociateData_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_privateDataInAck
 * @constant
 */
export
const AssociateData_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = AssociateData_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_deviceIDOnly
 * @constant
 */
export
const AssociateData_deviceIDOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = AssociateData_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_rejectsRequestsWithOldConnectionID
 * @constant
 */
export
const AssociateData_rejectsRequestsWithOldConnectionID: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary rejectsRequestsWithOldConnectionID
 * @constant
 */
export
const rejectsRequestsWithOldConnectionID: number = AssociateData_rejectsRequestsWithOldConnectionID; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_ackModelMultiStep
 * @constant
 */
export
const AssociateData_ackModelMultiStep: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = AssociateData_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary AssociateData_deviceInfo
 * @constant
 */
export
const AssociateData_deviceInfo: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary deviceInfo
 * @constant
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
