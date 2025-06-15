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

/* START_OF_SYMBOL_DEFINITION SupportedCmipProfiles */
/**
 * @summary SupportedCmipProfiles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedCmipProfiles  ::=  BIT STRING {
 *   aom10(0), -- the managed system supports ISP 11183-1
 *   aom11(1), -- the managed system supports ISP 11183-3
 *   aom12(2)}
 * ```
 */
export type SupportedCmipProfiles = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION SupportedCmipProfiles */

/* START_OF_SYMBOL_DEFINITION SupportedCmipProfiles_aom10 */
/**
 * @summary SupportedCmipProfiles_aom10
 * @constant
 */
export const SupportedCmipProfiles_aom10: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SupportedCmipProfiles_aom10 */

/* START_OF_SYMBOL_DEFINITION aom10 */
/**
 * @summary aom10
 * @constant
 */
export const aom10: number = SupportedCmipProfiles_aom10; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION aom10 */

/* START_OF_SYMBOL_DEFINITION SupportedCmipProfiles_aom11 */
/**
 * @summary SupportedCmipProfiles_aom11
 * @constant
 */
export const SupportedCmipProfiles_aom11: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SupportedCmipProfiles_aom11 */

/* START_OF_SYMBOL_DEFINITION aom11 */
/**
 * @summary aom11
 * @constant
 */
export const aom11: number = SupportedCmipProfiles_aom11; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION aom11 */

/* START_OF_SYMBOL_DEFINITION SupportedCmipProfiles_aom12 */
/**
 * @summary SupportedCmipProfiles_aom12
 * @constant
 */
export const SupportedCmipProfiles_aom12: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SupportedCmipProfiles_aom12 */

/* START_OF_SYMBOL_DEFINITION aom12 */
/**
 * @summary aom12
 * @constant
 */
export const aom12: number = SupportedCmipProfiles_aom12; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION aom12 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedCmipProfiles */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedCmipProfiles */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedCmipProfiles */
export const _decode_SupportedCmipProfiles = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_SupportedCmipProfiles */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedCmipProfiles */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedCmipProfiles */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedCmipProfiles */
export const _encode_SupportedCmipProfiles = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_SupportedCmipProfiles */

/* eslint-enable */
