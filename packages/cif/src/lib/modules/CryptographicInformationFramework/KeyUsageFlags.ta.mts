/* eslint-disable */
import {
    BIT_STRING,
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
 * Possible use of a key. Mapping to ISO/IEC 9594-8 certificate KeyUsage is
 * Table 2 of ISO/IEC 7816-15:2016 §8.2.9 (e.g. DataEncipherment → encipher on
 * public / decipher on private).
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
 * @description
 * Encipher data (public-key counterpart of ISO/IEC 9594-8 dataEncipherment).
 * ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Decipher data. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Sign without message recovery. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Sign with message recovery. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Encipher keys. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Decipher keys. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Verify signatures without recovery. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Verify signatures with recovery. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Key agreement / derivation. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
 * @description
 * Non-repudiation. ISO/IEC 7816-15:2016 §8.2.9 Table 2.
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
