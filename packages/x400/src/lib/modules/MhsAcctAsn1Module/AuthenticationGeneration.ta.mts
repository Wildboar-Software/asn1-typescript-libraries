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

/* START_OF_SYMBOL_DEFINITION AuthenticationGeneration */
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
/* END_OF_SYMBOL_DEFINITION AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION AuthenticationGeneration_generated */
/**
 * @summary AuthenticationGeneration_generated
 * @constant
 * @type {number}
 */
export const AuthenticationGeneration_generated: AuthenticationGeneration = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationGeneration_generated */

/* START_OF_SYMBOL_DEFINITION generated */
/**
 * @summary AuthenticationGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: AuthenticationGeneration = AuthenticationGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION generated */

/* START_OF_SYMBOL_DEFINITION AuthenticationGeneration_non_generated */
/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const AuthenticationGeneration_non_generated: AuthenticationGeneration = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenticationGeneration_non_generated */

/* START_OF_SYMBOL_DEFINITION non_generated */
/**
 * @summary AuthenticationGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: AuthenticationGeneration = AuthenticationGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_generated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationGeneration */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationGeneration */
export const _decode_AuthenticationGeneration = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationGeneration */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationGeneration */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationGeneration */
export const _encode_AuthenticationGeneration = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationGeneration */

/* eslint-enable */
