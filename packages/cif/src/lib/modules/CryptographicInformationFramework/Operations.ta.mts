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
 * @summary Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operations  ::=  BIT STRING {
 *     compute-checksum    (0), -- H/W computation of checksum
 *     compute-signature   (1), -- H/W computation of signature
 *     verify-checksum     (2), -- H/W verification of checksum
 *     verify-signature    (3), -- H/W verification of signature
 *     encipher            (4), -- H/W encryption of data
 *     decipher            (5), -- H/W decryption of data
 *     hash                (6), -- H/W hashing
 *     generate-key        (7), -- H/W key generation
 *     derive-key          (8) -- H/W key derivation
 * }
 * ```
 */
export
type Operations = BIT_STRING;

/**
 * @summary Operations_compute_checksum
 * @constant
 */
export
const Operations_compute_checksum: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary compute_checksum
 * @constant
 */
export
const compute_checksum: number = Operations_compute_checksum; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_compute_signature
 * @constant
 */
export
const Operations_compute_signature: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary compute_signature
 * @constant
 */
export
const compute_signature: number = Operations_compute_signature; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_verify_checksum
 * @constant
 */
export
const Operations_verify_checksum: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary verify_checksum
 * @constant
 */
export
const verify_checksum: number = Operations_verify_checksum; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_verify_signature
 * @constant
 */
export
const Operations_verify_signature: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary verify_signature
 * @constant
 */
export
const verify_signature: number = Operations_verify_signature; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_encipher
 * @constant
 */
export
const Operations_encipher: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary encipher
 * @constant
 */
export
const encipher: number = Operations_encipher; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_decipher
 * @constant
 */
export
const Operations_decipher: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary decipher
 * @constant
 */
export
const decipher: number = Operations_decipher; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_hash
 * @constant
 */
export
const Operations_hash: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary hash
 * @constant
 */
export
const hash: number = Operations_hash; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_generate_key
 * @constant
 */
export
const Operations_generate_key: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary generate_key
 * @constant
 */
export
const generate_key: number = Operations_generate_key; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_derive_key
 * @constant
 */
export
const Operations_derive_key: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary derive_key
 * @constant
 */
export
const derive_key: number = Operations_derive_key; /* SHORT_NAMED_BIT */
export const _decode_Operations = $._decodeBitString;
export const _encode_Operations = $._encodeBitString;


/* eslint-enable */
