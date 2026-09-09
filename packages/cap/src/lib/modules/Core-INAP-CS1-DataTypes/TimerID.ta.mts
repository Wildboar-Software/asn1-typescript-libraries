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
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID      ::=  ENUMERATED {
 *      tssf(0)
 *      -- others for further study
 *      }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TimerID {
    tssf = 0,
}

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID      ::=  ENUMERATED {
 *      tssf(0)
 *      -- others for further study
 *      }
 * ```
 * 
 * @enum {number}
 */
export
type TimerID = _enum_for_TimerID;

/**
 * @summary TimerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimerID      ::=  ENUMERATED {
 *      tssf(0)
 *      -- others for further study
 *      }
 * ```
 * 
 * @enum {number}
 */
export
const TimerID = _enum_for_TimerID;

/**
 * @summary TimerID_tssf
 * @constant
 * @type {number}
 */
export
const TimerID_tssf: TimerID = TimerID.tssf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tssf
 * @constant
 * @type {number}
 */
export
const tssf: TimerID = TimerID.tssf; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TimerID = $._decodeEnumerated;
export const _encode_TimerID = $._encodeEnumerated;


/* eslint-enable */
