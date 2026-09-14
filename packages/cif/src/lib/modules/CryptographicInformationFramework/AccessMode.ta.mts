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
 * @summary AccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessMode  ::=  BIT STRING {
 *     read        (0),
 *     update      (1),
 *     execute     (2),
 *     delete      (3),
 *     attribute   (4),
 *     pso-cds     (5),
 *     pso-verif   (6),
 *     pso-dec     (7),
 *     pso-enc     (8),
 *     int-auth    (9),
 *     ext-auth    (10)
 * }
 * ```
 */
export
type AccessMode = BIT_STRING;

/**
 * @summary AccessMode_read
 * @constant
 */
export
const AccessMode_read: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary read
 * @constant
 */
export
const read: number = AccessMode_read; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_update
 * @constant
 */
export
const AccessMode_update: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary update
 * @constant
 */
export
const update: number = AccessMode_update; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_execute
 * @constant
 */
export
const AccessMode_execute: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary execute
 * @constant
 */
export
const execute: number = AccessMode_execute; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_delete_
 * @constant
 */
export
const AccessMode_delete_: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary delete_
 * @constant
 */
export
const delete_: number = AccessMode_delete_; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_attribute
 * @constant
 */
export
const AccessMode_attribute: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary attribute
 * @constant
 */
export
const attribute: number = AccessMode_attribute; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_cds
 * @constant
 */
export
const AccessMode_pso_cds: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary pso_cds
 * @constant
 */
export
const pso_cds: number = AccessMode_pso_cds; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_verif
 * @constant
 */
export
const AccessMode_pso_verif: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary pso_verif
 * @constant
 */
export
const pso_verif: number = AccessMode_pso_verif; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_dec
 * @constant
 */
export
const AccessMode_pso_dec: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary pso_dec
 * @constant
 */
export
const pso_dec: number = AccessMode_pso_dec; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_pso_enc
 * @constant
 */
export
const AccessMode_pso_enc: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pso_enc
 * @constant
 */
export
const pso_enc: number = AccessMode_pso_enc; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_int_auth
 * @constant
 */
export
const AccessMode_int_auth: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary int_auth
 * @constant
 */
export
const int_auth: number = AccessMode_int_auth; /* SHORT_NAMED_BIT */

/**
 * @summary AccessMode_ext_auth
 * @constant
 */
export
const AccessMode_ext_auth: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ext_auth
 * @constant
 */
export
const ext_auth: number = AccessMode_ext_auth; /* SHORT_NAMED_BIT */
export const _decode_AccessMode = $._decodeBitString;
export const _encode_AccessMode = $._encodeBitString;


/* eslint-enable */
