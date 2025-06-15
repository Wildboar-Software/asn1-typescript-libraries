/* eslint-disable */
import {
  REAL,
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

/* START_OF_SYMBOL_DEFINITION Float */
/**
 * @summary Float
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Float  ::=     REAL (0 | MINUS-INFINITY | PLUS-INFINITY | NOT-A-NUMBER | WITH COMPONENTS {
 *             mantissa(-16777215..16777215),
 *             base(2),
 *             exponent(-149..104)})
 * ```
 */
export type Float = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION Float */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Float */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Float */

/* START_OF_SYMBOL_DEFINITION _decode_Float */
export const _decode_Float = $._decodeReal;
/* END_OF_SYMBOL_DEFINITION _decode_Float */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Float */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Float */

/* START_OF_SYMBOL_DEFINITION _encode_Float */
export const _encode_Float = $._encodeReal;

/* END_OF_SYMBOL_DEFINITION _encode_Float */

/* eslint-enable */
