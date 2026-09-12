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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalCBBOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCBBOptions  ::=  BIT STRING {
 *     des  (0),
 *     dei  (1),
 *     recl (2)
 * } (SIZE(3))
 * ```
 */
export
type AdditionalCBBOptions = BIT_STRING;

/**
 * @summary AdditionalCBBOptions_des
 * @constant
 */
export
const AdditionalCBBOptions_des: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary des
 * @constant
 */
export
const des: number = AdditionalCBBOptions_des; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_dei
 * @constant
 */
export
const AdditionalCBBOptions_dei: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dei
 * @constant
 */
export
const dei: number = AdditionalCBBOptions_dei; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_recl
 * @constant
 */
export
const AdditionalCBBOptions_recl: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary recl
 * @constant
 */
export
const recl: number = AdditionalCBBOptions_recl; /* SHORT_NAMED_BIT */
export const _decode_AdditionalCBBOptions = (el: _Element): AdditionalCBBOptions => {
    const value = $._decodeBitString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("AdditionalCBBOptions violates SIZE constraint");
    }
    return value;
};
export const _encode_AdditionalCBBOptions = $._encodeBitString;


/* eslint-enable */
