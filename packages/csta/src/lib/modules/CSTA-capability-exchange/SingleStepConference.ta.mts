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
 * @summary SingleStepConference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SingleStepConference  ::=  BIT STRING
 * {     participationTypeActive         ( 0),     -- optional parameters
 *     participationTypeSilent         ( 1),     -- optional parameters
 *     accountCode                 ( 2),     -- optional parameters
 *     authCode                 ( 3),     -- optional parameters
 *     correlatorData                 ( 4),     -- optional parameters
 *     userData                 ( 5),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     conferencedCallInfoInAck         ( 7),     -- optional parameters
 *     privateDataInAck             ( 8),     -- optional parameters
 *     deviceIDOnly                 ( 9),     -- misc characteristics
 *     ackModelMultiStep             (10) }
 * ```
 */
export
type SingleStepConference = BIT_STRING;

/**
 * @summary SingleStepConference_participationTypeActive
 * @constant
 */
export
const SingleStepConference_participationTypeActive: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeActive
 * @constant
 */
export
const participationTypeActive: number = SingleStepConference_participationTypeActive; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_participationTypeSilent
 * @constant
 */
export
const SingleStepConference_participationTypeSilent: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeSilent
 * @constant
 */
export
const participationTypeSilent: number = SingleStepConference_participationTypeSilent; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_accountCode
 * @constant
 */
export
const SingleStepConference_accountCode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary accountCode
 * @constant
 */
export
const accountCode: number = SingleStepConference_accountCode; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_authCode
 * @constant
 */
export
const SingleStepConference_authCode: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 */
export
const authCode: number = SingleStepConference_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_correlatorData
 * @constant
 */
export
const SingleStepConference_correlatorData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = SingleStepConference_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_userData
 * @constant
 */
export
const SingleStepConference_userData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = SingleStepConference_userData; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_privateData
 * @constant
 */
export
const SingleStepConference_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SingleStepConference_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_conferencedCallInfoInAck
 * @constant
 */
export
const SingleStepConference_conferencedCallInfoInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary conferencedCallInfoInAck
 * @constant
 */
export
const conferencedCallInfoInAck: number = SingleStepConference_conferencedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_privateDataInAck
 * @constant
 */
export
const SingleStepConference_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SingleStepConference_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_deviceIDOnly
 * @constant
 */
export
const SingleStepConference_deviceIDOnly: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = SingleStepConference_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary SingleStepConference_ackModelMultiStep
 * @constant
 */
export
const SingleStepConference_ackModelMultiStep: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SingleStepConference_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SingleStepConference: $.ASN1Decoder<SingleStepConference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SingleStepConference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SingleStepConference (el: _Element): SingleStepConference {
    if (!_cached_decoder_for_SingleStepConference) { _cached_decoder_for_SingleStepConference = $._decodeBitString; }
    return _cached_decoder_for_SingleStepConference(el);
}

let _cached_encoder_for_SingleStepConference: $.ASN1Encoder<SingleStepConference> | null = null;

/**
 * @summary Encodes a(n) SingleStepConference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingleStepConference, encoded as an ASN.1 Element.
 */
export
function _encode_SingleStepConference (value: SingleStepConference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SingleStepConference) { _cached_encoder_for_SingleStepConference = $._encodeBitString; }
    return _cached_encoder_for_SingleStepConference(value, elGetter);
}


/* eslint-enable */
