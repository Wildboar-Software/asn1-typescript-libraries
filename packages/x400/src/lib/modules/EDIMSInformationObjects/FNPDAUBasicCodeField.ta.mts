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

/* START_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField */
/**
 * @summary FNPDAUBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNPDAUBasicCodeField  ::=  INTEGER {
 *   unspecified(0), forwarded-for-physical-rendition-and-delivery(1)
 * }(0..ub-reason-code)
 * ```
 */
export type FNPDAUBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_unspecified */
/**
 * @summary FNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const FNPDAUBasicCodeField_unspecified: FNPDAUBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary FNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: FNPDAUBasicCodeField = FNPDAUBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery */
/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery: FNPDAUBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery */

/* START_OF_SYMBOL_DEFINITION forwarded_for_physical_rendition_and_delivery */
/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const forwarded_for_physical_rendition_and_delivery: FNPDAUBasicCodeField = FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_for_physical_rendition_and_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNPDAUBasicCodeField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_FNPDAUBasicCodeField */
export const _decode_FNPDAUBasicCodeField = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNPDAUBasicCodeField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_FNPDAUBasicCodeField */
export const _encode_FNPDAUBasicCodeField = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FNPDAUBasicCodeField */

/* eslint-enable */
