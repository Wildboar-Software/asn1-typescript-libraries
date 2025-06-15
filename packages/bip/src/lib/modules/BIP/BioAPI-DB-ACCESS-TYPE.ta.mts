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

/* START_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE */
/**
 * @summary BioAPI_DB_ACCESS_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DB-ACCESS-TYPE  ::=  BIT STRING {read(0), write(1)}(SIZE (32))
 * ```
 */
export type BioAPI_DB_ACCESS_TYPE = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_read */
/**
 * @summary BioAPI_DB_ACCESS_TYPE_read
 * @constant
 */
export const BioAPI_DB_ACCESS_TYPE_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_read */

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary read
 * @constant
 */
export const read: number = BioAPI_DB_ACCESS_TYPE_read; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read */

/* START_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_write */
/**
 * @summary BioAPI_DB_ACCESS_TYPE_write
 * @constant
 */
export const BioAPI_DB_ACCESS_TYPE_write: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_DB_ACCESS_TYPE_write */

/* START_OF_SYMBOL_DEFINITION write */
/**
 * @summary write
 * @constant
 */
export const write: number = BioAPI_DB_ACCESS_TYPE_write; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION write */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DB_ACCESS_TYPE */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_DB_ACCESS_TYPE */
export const _decode_BioAPI_DB_ACCESS_TYPE = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DB_ACCESS_TYPE */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DB_ACCESS_TYPE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_DB_ACCESS_TYPE */
export const _encode_BioAPI_DB_ACCESS_TYPE = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_DB_ACCESS_TYPE */

/* eslint-enable */
