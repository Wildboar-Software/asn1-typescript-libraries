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
 * @summary AuthenticationGeneration
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationGeneration  ::=  INTEGER {generated(1), non-generated(2)}
 * ```
 */
export type AuthenticationGeneration = INTEGER;

/**
 * @summary AuthenticationGeneration_generated
 * @constant
 * @type {number}
 */
export const AuthenticationGeneration_generated: 1 = 1 satisfies AuthenticationGeneration; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: 1 = AuthenticationGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const AuthenticationGeneration_non_generated: 2 = 2 satisfies AuthenticationGeneration; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: 2 = AuthenticationGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AuthenticationGeneration: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AuthenticationGeneration: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
