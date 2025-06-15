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

/* START_OF_SYMBOL_DEFINITION Restriction_source_type */
/**
 * @summary Restriction_source_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Restriction-source-type ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Restriction_source_type = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION Restriction_source_type_originated_by */
/**
 * @summary Restriction_source_type_originated_by
 * @constant
 */
export const Restriction_source_type_originated_by: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Restriction_source_type_originated_by */

/* START_OF_SYMBOL_DEFINITION originated_by */
/**
 * @summary originated_by
 * @constant
 */
export const originated_by: number = Restriction_source_type_originated_by; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION originated_by */

/* START_OF_SYMBOL_DEFINITION Restriction_source_type_redirected_by */
/**
 * @summary Restriction_source_type_redirected_by
 * @constant
 */
export const Restriction_source_type_redirected_by: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Restriction_source_type_redirected_by */

/* START_OF_SYMBOL_DEFINITION redirected_by */
/**
 * @summary redirected_by
 * @constant
 */
export const redirected_by: number = Restriction_source_type_redirected_by; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION redirected_by */

/* START_OF_SYMBOL_DEFINITION Restriction_source_type_dl_expanded_by */
/**
 * @summary Restriction_source_type_dl_expanded_by
 * @constant
 */
export const Restriction_source_type_dl_expanded_by: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Restriction_source_type_dl_expanded_by */

/* START_OF_SYMBOL_DEFINITION dl_expanded_by */
/**
 * @summary dl_expanded_by
 * @constant
 */
export const dl_expanded_by: number = Restriction_source_type_dl_expanded_by; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dl_expanded_by */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Restriction_source_type */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION _decode_Restriction_source_type */
export const _decode_Restriction_source_type = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Restriction_source_type */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Restriction_source_type */

/* START_OF_SYMBOL_DEFINITION _encode_Restriction_source_type */
export const _encode_Restriction_source_type = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Restriction_source_type */

/* eslint-enable */
