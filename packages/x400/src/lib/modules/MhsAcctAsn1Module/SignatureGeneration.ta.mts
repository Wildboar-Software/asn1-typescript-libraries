/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SignatureGeneration
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureGeneration  ::=  INTEGER {generated(1), non-generated(2)}
 * ```
 */
export type SignatureGeneration = INTEGER;

/**
 * @summary SignatureGeneration_generated
 * @constant
 * @type {number}
 */
export const SignatureGeneration_generated: 1 = 1 satisfies SignatureGeneration; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: 1 = SignatureGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const SignatureGeneration_non_generated: 2 = 2 satisfies SignatureGeneration; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: 2 = SignatureGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SignatureGeneration: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_SignatureGeneration: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
