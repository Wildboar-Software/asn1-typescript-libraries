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

/* START_OF_SYMBOL_DEFINITION SignatureGeneration */
/**
 * @summary SignatureGeneration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureGeneration  ::=  INTEGER {generated(1), non-generated(2)}
 * ```
 */
export type SignatureGeneration = INTEGER;
/* END_OF_SYMBOL_DEFINITION SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION SignatureGeneration_generated */
/**
 * @summary SignatureGeneration_generated
 * @constant
 * @type {number}
 */
export const SignatureGeneration_generated: SignatureGeneration = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureGeneration_generated */

/* START_OF_SYMBOL_DEFINITION generated */
/**
 * @summary SignatureGeneration_generated
 * @constant
 * @type {number}
 */
export const generated: SignatureGeneration = SignatureGeneration_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION generated */

/* START_OF_SYMBOL_DEFINITION SignatureGeneration_non_generated */
/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const SignatureGeneration_non_generated: SignatureGeneration = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureGeneration_non_generated */

/* START_OF_SYMBOL_DEFINITION non_generated */
/**
 * @summary SignatureGeneration_non_generated
 * @constant
 * @type {number}
 */
export const non_generated: SignatureGeneration = SignatureGeneration_non_generated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_generated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureGeneration */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureGeneration */
export const _decode_SignatureGeneration = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureGeneration */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureGeneration */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureGeneration */
export const _encode_SignatureGeneration = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SignatureGeneration */

/* eslint-enable */
