/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
export const SignatureGeneration_generated: SignatureGeneration = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: SignatureGeneration = SignatureGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const SignatureGeneration_non_generated: SignatureGeneration = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: SignatureGeneration = SignatureGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SignatureGeneration = $._decodeInteger;


export const _encode_SignatureGeneration = $._encodeInteger;


/* eslint-enable */
