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
 * @summary ParameterSupportOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterSupportOptions  ::=  BIT STRING {
 *     str1                       (0),
 *     str2                       (1),
 *     vnam                       (2),
 *     valt                       (3),
 *     vadr                       (4),
 *     -- bit 5 is reserved for the services defined in Annex E.
 *     vsca                       (5),
 *     tpy                        (6),
 *     vlis                       (7),
 *     -- bit 8 is reserved
 *     -- bit 9 is reserved
 *     cei                        (10),
 *     aco                        (11),
 *     sem                        (12),
 *     csr                        (13),
 *     csnc                       (14),
 *     csplc                      (15),
 *     cspi                       (16),
 *     char                       (17)
 * } (SIZE(18))
 * ```
 */
export
type ParameterSupportOptions = BIT_STRING;

/**
 * @summary ParameterSupportOptions_str1
 * @constant
 */
export
const ParameterSupportOptions_str1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary str1
 * @constant
 */
export
const str1: number = ParameterSupportOptions_str1; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_str2
 * @constant
 */
export
const ParameterSupportOptions_str2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary str2
 * @constant
 */
export
const str2: number = ParameterSupportOptions_str2; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vnam
 * @constant
 */
export
const ParameterSupportOptions_vnam: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary vnam
 * @constant
 */
export
const vnam: number = ParameterSupportOptions_vnam; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_valt
 * @constant
 */
export
const ParameterSupportOptions_valt: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary valt
 * @constant
 */
export
const valt: number = ParameterSupportOptions_valt; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vadr
 * @constant
 */
export
const ParameterSupportOptions_vadr: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary vadr
 * @constant
 */
export
const vadr: number = ParameterSupportOptions_vadr; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vsca
 * @constant
 */
export
const ParameterSupportOptions_vsca: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary vsca
 * @constant
 */
export
const vsca: number = ParameterSupportOptions_vsca; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_tpy
 * @constant
 */
export
const ParameterSupportOptions_tpy: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary tpy
 * @constant
 */
export
const tpy: number = ParameterSupportOptions_tpy; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_vlis
 * @constant
 */
export
const ParameterSupportOptions_vlis: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary vlis
 * @constant
 */
export
const vlis: number = ParameterSupportOptions_vlis; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_cei
 * @constant
 */
export
const ParameterSupportOptions_cei: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary cei
 * @constant
 */
export
const cei: number = ParameterSupportOptions_cei; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_aco
 * @constant
 */
export
const ParameterSupportOptions_aco: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary aco
 * @constant
 */
export
const aco: number = ParameterSupportOptions_aco; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_sem
 * @constant
 */
export
const ParameterSupportOptions_sem: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary sem
 * @constant
 */
export
const sem: number = ParameterSupportOptions_sem; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_csr
 * @constant
 */
export
const ParameterSupportOptions_csr: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary csr
 * @constant
 */
export
const csr: number = ParameterSupportOptions_csr; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_csnc
 * @constant
 */
export
const ParameterSupportOptions_csnc: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary csnc
 * @constant
 */
export
const csnc: number = ParameterSupportOptions_csnc; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_csplc
 * @constant
 */
export
const ParameterSupportOptions_csplc: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary csplc
 * @constant
 */
export
const csplc: number = ParameterSupportOptions_csplc; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_cspi
 * @constant
 */
export
const ParameterSupportOptions_cspi: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary cspi
 * @constant
 */
export
const cspi: number = ParameterSupportOptions_cspi; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterSupportOptions_char
 * @constant
 */
export
const ParameterSupportOptions_char: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary char
 * @constant
 */
export
const char: number = ParameterSupportOptions_char; /* SHORT_NAMED_BIT */
export const _decode_ParameterSupportOptions = (el: _Element): ParameterSupportOptions => {
    const value = $._decodeBitString(el);
    if (value.length !== 18) {
        throw new ASN1SizeError("ParameterSupportOptions violates SIZE constraint");
    }
    return value;
};
export const _encode_ParameterSupportOptions = $._encodeBitString;


/* eslint-enable */
