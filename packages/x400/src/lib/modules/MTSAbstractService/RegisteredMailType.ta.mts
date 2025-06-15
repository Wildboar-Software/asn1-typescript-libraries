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

/* START_OF_SYMBOL_DEFINITION RegisteredMailType */
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
/* END_OF_SYMBOL_DEFINITION RegisteredMailType */

/* START_OF_SYMBOL_DEFINITION RegisteredMailType_non_registered_mail */
/**
 * @summary RegisteredMailType_non_registered_mail
 * @constant
 * @type {number}
 */
export const RegisteredMailType_non_registered_mail: RegisteredMailType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RegisteredMailType_non_registered_mail */

/* START_OF_SYMBOL_DEFINITION non_registered_mail */
/**
 * @summary RegisteredMailType_non_registered_mail
 * @constant
 * @type {number}
 */
export const non_registered_mail: RegisteredMailType = RegisteredMailType_non_registered_mail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_registered_mail */

/* START_OF_SYMBOL_DEFINITION RegisteredMailType_registered_mail */
/**
 * @summary RegisteredMailType_registered_mail
 * @constant
 * @type {number}
 */
export const RegisteredMailType_registered_mail: RegisteredMailType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RegisteredMailType_registered_mail */

/* START_OF_SYMBOL_DEFINITION registered_mail */
/**
 * @summary RegisteredMailType_registered_mail
 * @constant
 * @type {number}
 */
export const registered_mail: RegisteredMailType = RegisteredMailType_registered_mail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION registered_mail */

/* START_OF_SYMBOL_DEFINITION RegisteredMailType_registered_mail_to_addressee_in_person */
/**
 * @summary RegisteredMailType_registered_mail_to_addressee_in_person
 * @constant
 * @type {number}
 */
export const RegisteredMailType_registered_mail_to_addressee_in_person: RegisteredMailType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RegisteredMailType_registered_mail_to_addressee_in_person */

/* START_OF_SYMBOL_DEFINITION registered_mail_to_addressee_in_person */
/**
 * @summary RegisteredMailType_registered_mail_to_addressee_in_person
 * @constant
 * @type {number}
 */
export const registered_mail_to_addressee_in_person: RegisteredMailType = RegisteredMailType_registered_mail_to_addressee_in_person; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION registered_mail_to_addressee_in_person */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisteredMailType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisteredMailType */

/* START_OF_SYMBOL_DEFINITION _decode_RegisteredMailType */
export const _decode_RegisteredMailType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RegisteredMailType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisteredMailType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisteredMailType */

/* START_OF_SYMBOL_DEFINITION _encode_RegisteredMailType */
export const _encode_RegisteredMailType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RegisteredMailType */

/* eslint-enable */
