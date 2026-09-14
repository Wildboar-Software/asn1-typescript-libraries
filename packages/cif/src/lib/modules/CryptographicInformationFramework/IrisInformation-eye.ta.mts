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
 * @summary IrisInformation_eye
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IrisInformation-eye ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IrisInformation_eye {
    left = 0,
    right = 1,
}

/**
 * @summary IrisInformation_eye
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IrisInformation-eye ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
type IrisInformation_eye = _enum_for_IrisInformation_eye;

/**
 * @summary IrisInformation_eye
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IrisInformation-eye ::= ENUMERATED { left, right }
 * ```
 * 
 * @enum {number}
 */
export
const IrisInformation_eye = _enum_for_IrisInformation_eye;

/**
 * @summary IrisInformation_eye_left
 * @constant
 * @type {number}
 */
export
const IrisInformation_eye_left: IrisInformation_eye = IrisInformation_eye.left; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary left
 * @constant
 * @type {number}
 */
export
const left: IrisInformation_eye = IrisInformation_eye.left; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IrisInformation_eye_right
 * @constant
 * @type {number}
 */
export
const IrisInformation_eye_right: IrisInformation_eye = IrisInformation_eye.right; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary right
 * @constant
 * @type {number}
 */
export
const right: IrisInformation_eye = IrisInformation_eye.right; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IrisInformation_eye = $._decodeEnumerated;
export const _encode_IrisInformation_eye = $._encodeEnumerated;


/* eslint-enable */
