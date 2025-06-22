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
 * @summary AuthenticationMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationMethod  ::=  INTEGER {
 *   no-authentication(0), simple-password(1), strong-authentication(2)}
 * ```
 */
export type AuthenticationMethod = INTEGER;

/**
 * @summary AuthenticationMethod_no_authentication
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_no_authentication: AuthenticationMethod = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationMethod_no_authentication
 * @constant
 * @type {number}
 */
export const no_authentication: AuthenticationMethod = AuthenticationMethod_no_authentication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationMethod_simple_password
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_simple_password: AuthenticationMethod = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationMethod_simple_password
 * @constant
 * @type {number}
 */
export const simple_password: AuthenticationMethod = AuthenticationMethod_simple_password; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationMethod_strong_authentication
 * @constant
 * @type {number}
 */
export const AuthenticationMethod_strong_authentication: AuthenticationMethod = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationMethod_strong_authentication
 * @constant
 * @type {number}
 */
export const strong_authentication: AuthenticationMethod = AuthenticationMethod_strong_authentication; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AuthenticationMethod = $._decodeInteger;


export const _encode_AuthenticationMethod = $._encodeInteger;


/* eslint-enable */
