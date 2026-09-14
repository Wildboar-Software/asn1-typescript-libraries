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
 * @summary KeyUsageFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyUsageFlags  ::=  BIT STRING {
 *     encipher        (0),
 *     decipher        (1),
 *     sign            (2),
 *     signRecover     (3),
 *     keyEncipher     (4),
 *     keyDecipher     (5),
 *     verify          (6),
 *     verifyRecover   (7),
 *     derive          (8),
 *     nonRepudiation  (9)
 * }
 * ```
 */
export
type KeyUsageFlags = BIT_STRING;

/**
 * @summary KeyUsageFlags_encipher
 * @constant
 */
export
const KeyUsageFlags_encipher: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary encipher
 * @constant
 */
export
const encipher: number = KeyUsageFlags_encipher; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_decipher
 * @constant
 */
export
const KeyUsageFlags_decipher: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary decipher
 * @constant
 */
export
const decipher: number = KeyUsageFlags_decipher; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_sign
 * @constant
 */
export
const KeyUsageFlags_sign: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sign
 * @constant
 */
export
const sign: number = KeyUsageFlags_sign; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_signRecover
 * @constant
 */
export
const KeyUsageFlags_signRecover: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary signRecover
 * @constant
 */
export
const signRecover: number = KeyUsageFlags_signRecover; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_keyEncipher
 * @constant
 */
export
const KeyUsageFlags_keyEncipher: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary keyEncipher
 * @constant
 */
export
const keyEncipher: number = KeyUsageFlags_keyEncipher; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_keyDecipher
 * @constant
 */
export
const KeyUsageFlags_keyDecipher: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary keyDecipher
 * @constant
 */
export
const keyDecipher: number = KeyUsageFlags_keyDecipher; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_verify
 * @constant
 */
export
const KeyUsageFlags_verify: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary verify
 * @constant
 */
export
const verify: number = KeyUsageFlags_verify; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_verifyRecover
 * @constant
 */
export
const KeyUsageFlags_verifyRecover: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary verifyRecover
 * @constant
 */
export
const verifyRecover: number = KeyUsageFlags_verifyRecover; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_derive
 * @constant
 */
export
const KeyUsageFlags_derive: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary derive
 * @constant
 */
export
const derive: number = KeyUsageFlags_derive; /* SHORT_NAMED_BIT */

/**
 * @summary KeyUsageFlags_nonRepudiation
 * @constant
 */
export
const KeyUsageFlags_nonRepudiation: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary nonRepudiation
 * @constant
 */
export
const nonRepudiation: number = KeyUsageFlags_nonRepudiation; /* SHORT_NAMED_BIT */
export const _decode_KeyUsageFlags = $._decodeBitString;
export const _encode_KeyUsageFlags = $._encodeBitString;


/* eslint-enable */
