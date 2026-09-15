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
 * @summary CardFlags
 * @description
 * 
 * Card-wide flags. Bit 3 is reserved for historical reasons. ISO/IEC
 * 7816-15:2016 §8.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CardFlags  ::=  BIT STRING {
 *     readonly        (0),
 *     authRequired    (1),
 *     prnGeneration   (2)
 * }
 * ```
 */
export
type CardFlags = BIT_STRING;

/**
 * @summary CardFlags_readonly
 * @description
 * Card is read-only. ISO/IEC 7816-15:2016 §8.10.
 * @constant
 */
export
const CardFlags_readonly: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary readonly
 * @constant
 */
export
const readonly: number = CardFlags_readonly; /* SHORT_NAMED_BIT */

/**
 * @summary CardFlags_authRequired
 * @description
 * Some cryptographic functions require the user to be authenticated. ISO/IEC
 * 7816-15:2016 §8.10.
 * @constant
 */
export
const CardFlags_authRequired: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authRequired
 * @constant
 */
export
const authRequired: number = CardFlags_authRequired; /* SHORT_NAMED_BIT */

/**
 * @summary CardFlags_prnGeneration
 * @description
 * Card supports pseudo-random number generation. ISO/IEC 7816-15:2016 §8.10.
 * @constant
 */
export
const CardFlags_prnGeneration: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary prnGeneration
 * @constant
 */
export
const prnGeneration: number = CardFlags_prnGeneration; /* SHORT_NAMED_BIT */
export const _decode_CardFlags = $._decodeBitString;
export const _encode_CardFlags = $._encodeBitString;


/* eslint-enable */
