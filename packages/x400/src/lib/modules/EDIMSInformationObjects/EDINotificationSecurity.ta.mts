/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION EDINotificationSecurity */
/**
 * @summary EDINotificationSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationSecurity  ::=  BIT STRING {proof(0), non-repudiation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDINotificationSecurity = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION EDINotificationSecurity_proof */
/**
 * @summary EDINotificationSecurity_proof
 * @constant
 */
export const EDINotificationSecurity_proof: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationSecurity_proof */

/* START_OF_SYMBOL_DEFINITION proof */
/**
 * @summary proof
 * @constant
 */
export const proof: number = EDINotificationSecurity_proof; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION proof */

/* START_OF_SYMBOL_DEFINITION EDINotificationSecurity_non_repudiation */
/**
 * @summary EDINotificationSecurity_non_repudiation
 * @constant
 */
export const EDINotificationSecurity_non_repudiation: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationSecurity_non_repudiation */

/* START_OF_SYMBOL_DEFINITION non_repudiation */
/**
 * @summary non_repudiation
 * @constant
 */
export const non_repudiation: number = EDINotificationSecurity_non_repudiation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION non_repudiation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_EDINotificationSecurity */
export const _decode_EDINotificationSecurity = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_EDINotificationSecurity */
export const _encode_EDINotificationSecurity = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_EDINotificationSecurity */

/* eslint-enable */
