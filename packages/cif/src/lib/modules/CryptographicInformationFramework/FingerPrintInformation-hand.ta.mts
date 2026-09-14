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
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FingerPrintInformation_hand {
    left = 0,
    right = 1,
}

/**
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type FingerPrintInformation_hand = _enum_for_FingerPrintInformation_hand;

/**
 * @summary FingerPrintInformation_hand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const FingerPrintInformation_hand = _enum_for_FingerPrintInformation_hand;

/**
 * @summary FingerPrintInformation_hand_left
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_hand_left: FingerPrintInformation_hand = FingerPrintInformation_hand.left; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary left
 * @constant
 * @type {number}
 */
export
const left: FingerPrintInformation_hand = FingerPrintInformation_hand.left; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FingerPrintInformation_hand_right
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_hand_right: FingerPrintInformation_hand = FingerPrintInformation_hand.right; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary right
 * @constant
 * @type {number}
 */
export
const right: FingerPrintInformation_hand = FingerPrintInformation_hand.right; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FingerPrintInformation_hand = $._decodeEnumerated;
export const _encode_FingerPrintInformation_hand = $._encodeEnumerated;


/* eslint-enable */
