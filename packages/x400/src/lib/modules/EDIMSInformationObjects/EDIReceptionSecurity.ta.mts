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

/* START_OF_SYMBOL_DEFINITION EDIReceptionSecurity */
/**
 * @summary EDIReceptionSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIReceptionSecurity  ::=  BIT STRING {proof(0), non-repudiation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDIReceptionSecurity = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EDIReceptionSecurity */

/* START_OF_SYMBOL_DEFINITION EDIReceptionSecurity_proof */
/**
 * @summary EDIReceptionSecurity_proof
 * @constant
 */
export const EDIReceptionSecurity_proof: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDIReceptionSecurity_proof */

/* START_OF_SYMBOL_DEFINITION proof */
/**
 * @summary proof
 * @constant
 */
export const proof: number = EDIReceptionSecurity_proof; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION proof */

/* START_OF_SYMBOL_DEFINITION EDIReceptionSecurity_non_repudiation */
/**
 * @summary EDIReceptionSecurity_non_repudiation
 * @constant
 */
export const EDIReceptionSecurity_non_repudiation: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDIReceptionSecurity_non_repudiation */

/* START_OF_SYMBOL_DEFINITION non_repudiation */
/**
 * @summary non_repudiation
 * @constant
 */
export const non_repudiation: number = EDIReceptionSecurity_non_repudiation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION non_repudiation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIReceptionSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIReceptionSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_EDIReceptionSecurity */
export const _decode_EDIReceptionSecurity = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_EDIReceptionSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIReceptionSecurity */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIReceptionSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_EDIReceptionSecurity */
export const _encode_EDIReceptionSecurity = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_EDIReceptionSecurity */

/* eslint-enable */
