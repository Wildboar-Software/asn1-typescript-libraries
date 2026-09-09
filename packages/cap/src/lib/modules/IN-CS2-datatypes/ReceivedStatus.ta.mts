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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReceivedStatus {
    messageComplete = 0,
    messageInterrupted = 1,
    messageTimeOut = 2,
}

/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ReceivedStatus = _enum_for_ReceivedStatus;

/**
 * @summary ReceivedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedStatus  ::=  ENUMERATED {
 *   messageComplete(0), messageInterrupted(1), messageTimeOut(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ReceivedStatus = _enum_for_ReceivedStatus;

/**
 * @summary ReceivedStatus_messageComplete
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageComplete: ReceivedStatus = ReceivedStatus.messageComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageComplete
 * @constant
 * @type {number}
 */
export
const messageComplete: ReceivedStatus = ReceivedStatus.messageComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReceivedStatus_messageInterrupted
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageInterrupted: ReceivedStatus = ReceivedStatus.messageInterrupted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageInterrupted
 * @constant
 * @type {number}
 */
export
const messageInterrupted: ReceivedStatus = ReceivedStatus.messageInterrupted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReceivedStatus_messageTimeOut
 * @constant
 * @type {number}
 */
export
const ReceivedStatus_messageTimeOut: ReceivedStatus = ReceivedStatus.messageTimeOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageTimeOut
 * @constant
 * @type {number}
 */
export
const messageTimeOut: ReceivedStatus = ReceivedStatus.messageTimeOut; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReceivedStatus = $._decodeEnumerated;
export const _encode_ReceivedStatus = $._encodeEnumerated;


/* eslint-enable */
