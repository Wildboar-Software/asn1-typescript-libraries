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
 * @summary ConnectedNumberTreatmentInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedNumberTreatmentInd  ::=  ENUMERATED {
 *   noINImpact(0), presentationRestricted(1), presentCalledINNumber(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConnectedNumberTreatmentInd {
    noINImpact = 0,
    presentationRestricted = 1,
    presentCalledINNumber = 2,
}

/**
 * @summary ConnectedNumberTreatmentInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedNumberTreatmentInd  ::=  ENUMERATED {
 *   noINImpact(0), presentationRestricted(1), presentCalledINNumber(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ConnectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;

/**
 * @summary ConnectedNumberTreatmentInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectedNumberTreatmentInd  ::=  ENUMERATED {
 *   noINImpact(0), presentationRestricted(1), presentCalledINNumber(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ConnectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;

/**
 * @summary ConnectedNumberTreatmentInd_noINImpact
 * @constant
 * @type {number}
 */
export
const ConnectedNumberTreatmentInd_noINImpact: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.noINImpact; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noINImpact
 * @constant
 * @type {number}
 */
export
const noINImpact: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.noINImpact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectedNumberTreatmentInd_presentationRestricted
 * @constant
 * @type {number}
 */
export
const ConnectedNumberTreatmentInd_presentationRestricted: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentationRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presentationRestricted
 * @constant
 * @type {number}
 */
export
const presentationRestricted: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentationRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConnectedNumberTreatmentInd_presentCalledINNumber
 * @constant
 * @type {number}
 */
export
const ConnectedNumberTreatmentInd_presentCalledINNumber: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentCalledINNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presentCalledINNumber
 * @constant
 * @type {number}
 */
export
const presentCalledINNumber: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentCalledINNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ConnectedNumberTreatmentInd = $._decodeEnumerated;
export const _encode_ConnectedNumberTreatmentInd = $._encodeEnumerated;


/* eslint-enable */
