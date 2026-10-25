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
 * @summary AuthenticationCheck
 * @description
 *
 * See ITU-T X.411 (1999), §8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationCheck  ::=  INTEGER {validated(1), failed(2)}
 * ```
 */
export type AuthenticationCheck = INTEGER;

/**
 * @summary AuthenticationCheck_validated
 * @constant
 * @type {number}
 */
export const AuthenticationCheck_validated = 1 satisfies AuthenticationCheck; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationCheck_validated
 * @constant
 * @type {number}
 */
export const validated = AuthenticationCheck_validated satisfies AuthenticationCheck; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const AuthenticationCheck_failed = 2 satisfies AuthenticationCheck; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const failed = AuthenticationCheck_failed satisfies AuthenticationCheck; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AuthenticationCheck = $._decodeInteger;


export const _encode_AuthenticationCheck = $._encodeInteger;


/* eslint-enable */
