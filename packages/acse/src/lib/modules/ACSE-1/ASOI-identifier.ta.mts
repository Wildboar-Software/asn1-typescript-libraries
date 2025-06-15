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

/* START_OF_SYMBOL_DEFINITION ASOI_identifier */
/**
 * @summary ASOI_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASOI-identifier  ::=  INTEGER(1..128, ...)
 * ```
 */
export type ASOI_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_identifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_ASOI_identifier */
export const _decode_ASOI_identifier = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_identifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASOI_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_ASOI_identifier */
export const _encode_ASOI_identifier = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ASOI_identifier */

/* eslint-enable */
