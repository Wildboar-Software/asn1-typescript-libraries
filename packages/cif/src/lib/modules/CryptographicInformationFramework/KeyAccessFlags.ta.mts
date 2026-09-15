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
 * @summary KeyAccessFlags
 * @description
 * 
 * How key material may leave the card. ISO/IEC 7816-15:2016 §8.2.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyAccessFlags  ::=  BIT STRING {
 *     sensitive           (0),
 *     extractable         (1),
 *     alwaysSensitive     (2),
 *     neverExtractable    (3),
 *     cardGenerated       (4)
 * }
 * ```
 */
export
type KeyAccessFlags = BIT_STRING;

/**
 * @summary KeyAccessFlags_sensitive
 * @description
 * Key material cannot be revealed in plaintext outside the card. ISO/IEC
 * 7816-15:2016 §8.2.9.
 * @constant
 */
export
const KeyAccessFlags_sensitive: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary sensitive
 * @constant
 */
export
const sensitive: number = KeyAccessFlags_sensitive; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_extractable
 * @description
 * If not set, the key cannot be extracted even in encrypted form. ISO/IEC
 * 7816-15:2016 §8.2.9.
 * @constant
 */
export
const KeyAccessFlags_extractable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary extractable
 * @constant
 */
export
const extractable: number = KeyAccessFlags_extractable; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_alwaysSensitive
 * @description
 * The key has always been sensitive. ISO/IEC 7816-15:2016 §8.2.9.
 * @constant
 */
export
const KeyAccessFlags_alwaysSensitive: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary alwaysSensitive
 * @constant
 */
export
const alwaysSensitive: number = KeyAccessFlags_alwaysSensitive; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_neverExtractable
 * @description
 * The key has never been extractable. ISO/IEC 7816-15:2016 §8.2.9.
 * @constant
 */
export
const KeyAccessFlags_neverExtractable: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary neverExtractable
 * @constant
 */
export
const neverExtractable: number = KeyAccessFlags_neverExtractable; /* SHORT_NAMED_BIT */

/**
 * @summary KeyAccessFlags_cardGenerated
 * @description
 * The key was randomly generated on the card. ISO/IEC 7816-15:2016 §8.2.9.
 * @constant
 */
export
const KeyAccessFlags_cardGenerated: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary cardGenerated
 * @constant
 */
export
const cardGenerated: number = KeyAccessFlags_cardGenerated; /* SHORT_NAMED_BIT */
export const _decode_KeyAccessFlags = $._decodeBitString;
export const _encode_KeyAccessFlags = $._encodeBitString;


/* eslint-enable */
