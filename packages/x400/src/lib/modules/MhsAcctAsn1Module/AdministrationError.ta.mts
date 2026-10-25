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
 * @summary AdministrationError
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrationError  ::=  INTEGER {
 *   register-rejected(1), new-credentials-unacceptable(2),
 *   old-credentials-incorrectly-specified(3), remote-bind-error(10)}
 * ```
 */
export type AdministrationError = INTEGER;

/**
 * @summary AdministrationError_register_rejected
 * @constant
 * @type {number}
 */
export const AdministrationError_register_rejected = 1 satisfies AdministrationError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AdministrationError_register_rejected
 * @constant
 * @type {number}
 */
export const register_rejected = AdministrationError_register_rejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AdministrationError_new_credentials_unacceptable
 * @constant
 * @type {number}
 */
export const AdministrationError_new_credentials_unacceptable = 2 satisfies AdministrationError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AdministrationError_new_credentials_unacceptable
 * @constant
 * @type {number}
 */
export const new_credentials_unacceptable = AdministrationError_new_credentials_unacceptable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AdministrationError_old_credentials_incorrectly_specified
 * @constant
 * @type {number}
 */
export const AdministrationError_old_credentials_incorrectly_specified = 3 satisfies AdministrationError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AdministrationError_old_credentials_incorrectly_specified
 * @constant
 * @type {number}
 */
export const old_credentials_incorrectly_specified = AdministrationError_old_credentials_incorrectly_specified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AdministrationError_remote_bind_error
 * @constant
 * @type {number}
 */
export const AdministrationError_remote_bind_error = 10 satisfies AdministrationError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AdministrationError_remote_bind_error
 * @constant
 * @type {number}
 */
export const remote_bind_error = AdministrationError_remote_bind_error; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AdministrationError = $._decodeInteger;


export const _encode_AdministrationError = $._encodeInteger;


/* eslint-enable */
