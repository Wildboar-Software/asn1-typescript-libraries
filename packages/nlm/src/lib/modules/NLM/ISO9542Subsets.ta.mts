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

/* START_OF_SYMBOL_DEFINITION ISO9542Subsets */
/**
 * @summary ISO9542Subsets
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISO9542Subsets  ::=  BIT STRING {configuration(0), redirection(1)}
 * ```
 */
export type ISO9542Subsets = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION ISO9542Subsets_configuration */
/**
 * @summary ISO9542Subsets_configuration
 * @constant
 */
export const ISO9542Subsets_configuration: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ISO9542Subsets_configuration */

/* START_OF_SYMBOL_DEFINITION configuration */
/**
 * @summary configuration
 * @constant
 */
export const configuration: number = ISO9542Subsets_configuration; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION configuration */

/* START_OF_SYMBOL_DEFINITION ISO9542Subsets_redirection */
/**
 * @summary ISO9542Subsets_redirection
 * @constant
 */
export const ISO9542Subsets_redirection: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ISO9542Subsets_redirection */

/* START_OF_SYMBOL_DEFINITION redirection */
/**
 * @summary redirection
 * @constant
 */
export const redirection: number = ISO9542Subsets_redirection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION redirection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ISO9542Subsets */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION _decode_ISO9542Subsets */
export const _decode_ISO9542Subsets = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ISO9542Subsets */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ISO9542Subsets */

/* START_OF_SYMBOL_DEFINITION _encode_ISO9542Subsets */
export const _encode_ISO9542Subsets = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_ISO9542Subsets */

/* eslint-enable */
