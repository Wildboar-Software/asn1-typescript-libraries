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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EC_Class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EC-Class  ::=  INTEGER {
 *     network-triggered                   (0),
 *     monitored                           (1)
 * } (0..1)
 * ```
 */
export
type EC_Class = INTEGER;

/**
 * @summary EC_Class_network_triggered
 * @constant
 * @type {number}
 */
export
const EC_Class_network_triggered: EC_Class = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_network_triggered
 * @constant
 * @type {number}
 */
export
const network_triggered: EC_Class = EC_Class_network_triggered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_monitored
 * @constant
 * @type {number}
 */
export
const EC_Class_monitored: EC_Class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_monitored
 * @constant
 * @type {number}
 */
export
const monitored: EC_Class = EC_Class_monitored; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EC_Class = (el: _Element): EC_Class => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 1) {
        throw new ASN1OverflowError("EC_Class violates INTEGER range constraint");
    }
    return value;
};
export const _encode_EC_Class = $._encodeInteger;


/* eslint-enable */
