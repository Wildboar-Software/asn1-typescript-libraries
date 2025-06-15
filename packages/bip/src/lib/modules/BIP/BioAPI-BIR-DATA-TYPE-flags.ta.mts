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

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags */
/**
 * @summary BioAPI_BIR_DATA_TYPE_flags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-DATA-TYPE-flags ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BioAPI_BIR_DATA_TYPE_flags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags_encrypted */
/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_encrypted
 * @constant
 */
export const BioAPI_BIR_DATA_TYPE_flags_encrypted: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags_encrypted */

/* START_OF_SYMBOL_DEFINITION encrypted */
/**
 * @summary encrypted
 * @constant
 */
export const encrypted: number = BioAPI_BIR_DATA_TYPE_flags_encrypted; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION encrypted */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags_signed */
/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_signed
 * @constant
 */
export const BioAPI_BIR_DATA_TYPE_flags_signed: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags_signed */

/* START_OF_SYMBOL_DEFINITION signed */
/**
 * @summary signed
 * @constant
 */
export const signed: number = BioAPI_BIR_DATA_TYPE_flags_signed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION signed */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags_index_present */
/**
 * @summary BioAPI_BIR_DATA_TYPE_flags_index_present
 * @constant
 */
export const BioAPI_BIR_DATA_TYPE_flags_index_present: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_DATA_TYPE_flags_index_present */

/* START_OF_SYMBOL_DEFINITION index_present */
/**
 * @summary index_present
 * @constant
 */
export const index_present: number = BioAPI_BIR_DATA_TYPE_flags_index_present; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION index_present */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_DATA_TYPE_flags */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_DATA_TYPE_flags */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_DATA_TYPE_flags */
export const _decode_BioAPI_BIR_DATA_TYPE_flags = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_DATA_TYPE_flags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_DATA_TYPE_flags */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_DATA_TYPE_flags */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_DATA_TYPE_flags */
export const _encode_BioAPI_BIR_DATA_TYPE_flags = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_DATA_TYPE_flags */

/* eslint-enable */
