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

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField */
/**
 * @summary NNPDAUBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNPDAUBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   undeliverable-mail(1),
 *   -- used if the PDAU determines that it cannot perform physical delivery of the
 *   -- EDIM
 *   physical-rendition-not-performed(2)
 *
 * -- used if the PDAU cannot perform the physical rendition of the EDIM --}
 * (0..ub-reason-code)
 * ```
 */
export type NNPDAUBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_unspecified */
/**
 * @summary NNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const NNPDAUBasicCodeField_unspecified: NNPDAUBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary NNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: NNPDAUBasicCodeField = NNPDAUBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_undeliverable_mail */
/**
 * @summary NNPDAUBasicCodeField_undeliverable_mail
 * @constant
 * @type {number}
 */
export const NNPDAUBasicCodeField_undeliverable_mail: NNPDAUBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_undeliverable_mail */

/* START_OF_SYMBOL_DEFINITION undeliverable_mail */
/**
 * @summary NNPDAUBasicCodeField_undeliverable_mail
 * @constant
 * @type {number}
 */
export const undeliverable_mail: NNPDAUBasicCodeField = NNPDAUBasicCodeField_undeliverable_mail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION undeliverable_mail */

/* START_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_physical_rendition_not_performed */
/**
 * @summary NNPDAUBasicCodeField_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const NNPDAUBasicCodeField_physical_rendition_not_performed: NNPDAUBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNPDAUBasicCodeField_physical_rendition_not_performed */

/* START_OF_SYMBOL_DEFINITION physical_rendition_not_performed */
/**
 * @summary NNPDAUBasicCodeField_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const physical_rendition_not_performed: NNPDAUBasicCodeField = NNPDAUBasicCodeField_physical_rendition_not_performed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_rendition_not_performed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUBasicCodeField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNPDAUBasicCodeField */
export const _decode_NNPDAUBasicCodeField = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUBasicCodeField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNPDAUBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNPDAUBasicCodeField */
export const _encode_NNPDAUBasicCodeField = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_NNPDAUBasicCodeField */

/* eslint-enable */
