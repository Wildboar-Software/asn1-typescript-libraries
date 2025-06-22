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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RegisteredMailType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisteredMailType  ::=  INTEGER {
 *   non-registered-mail(0), registered-mail(1),
 *   registered-mail-to-addressee-in-person(2)}(0..ub-integer-options)
 * ```
 */
export type RegisteredMailType = INTEGER;

/**
 * @summary RegisteredMailType_non_registered_mail
 * @constant
 * @type {number}
 */
export const RegisteredMailType_non_registered_mail: RegisteredMailType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegisteredMailType_non_registered_mail
 * @constant
 * @type {number}
 */
export const non_registered_mail: RegisteredMailType = RegisteredMailType_non_registered_mail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RegisteredMailType_registered_mail
 * @constant
 * @type {number}
 */
export const RegisteredMailType_registered_mail: RegisteredMailType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegisteredMailType_registered_mail
 * @constant
 * @type {number}
 */
export const registered_mail: RegisteredMailType = RegisteredMailType_registered_mail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RegisteredMailType_registered_mail_to_addressee_in_person
 * @constant
 * @type {number}
 */
export const RegisteredMailType_registered_mail_to_addressee_in_person: RegisteredMailType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RegisteredMailType_registered_mail_to_addressee_in_person
 * @constant
 * @type {number}
 */
export const registered_mail_to_addressee_in_person: RegisteredMailType = RegisteredMailType_registered_mail_to_addressee_in_person; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RegisteredMailType = $._decodeInteger;


export const _encode_RegisteredMailType = $._encodeInteger;


/* eslint-enable */
