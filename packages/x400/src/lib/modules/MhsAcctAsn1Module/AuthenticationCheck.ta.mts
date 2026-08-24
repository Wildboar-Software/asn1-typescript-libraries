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
 * @summary AuthenticationCheck
 * @description
 *
 * `AuthenticationCheck`. This argument provides the recipient(s) of the message, and any
 * MTA through which the message is transferred, with a means of authenticating the
 * origin of the message (to provide the Message Origin Authentication element-of-service
 * as defined in Authentication), assurance that the message content has not been
 * modified (the Content Integrity element-of-service as defined in The
 * message-origin-authentication-check… See ITU-T X.411 (1999), §8.2.1.1.1.29.
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
export const AuthenticationCheck_validated: AuthenticationCheck = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationCheck_validated
 * @constant
 * @type {number}
 */
export const validated: AuthenticationCheck = AuthenticationCheck_validated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const AuthenticationCheck_failed: AuthenticationCheck = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticationCheck_failed
 * @constant
 * @type {number}
 */
export const failed: AuthenticationCheck = AuthenticationCheck_failed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AuthenticationCheck = $._decodeInteger;


export const _encode_AuthenticationCheck = $._encodeInteger;


/* eslint-enable */
