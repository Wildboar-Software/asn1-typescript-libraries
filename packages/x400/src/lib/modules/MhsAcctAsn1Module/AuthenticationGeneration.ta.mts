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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary AuthenticationGeneration
 * @description
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
export const AuthenticationGeneration_generated: AuthenticationGeneration = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: AuthenticationGeneration = AuthenticationGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const AuthenticationGeneration_non_generated: AuthenticationGeneration = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: AuthenticationGeneration = AuthenticationGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AuthenticationGeneration = $._decodeInteger;


export const _encode_AuthenticationGeneration = $._encodeInteger;


/* eslint-enable */
