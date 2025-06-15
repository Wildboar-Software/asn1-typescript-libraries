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

/* START_OF_SYMBOL_DEFINITION Double */
/**
 * @summary Double
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Double  ::=     REAL (0 | MINUS-INFINITY | PLUS-INFINITY | NOT-A-NUMBER | WITH COMPONENTS {
 *             mantissa(-9007199254740991..9007199254740991),
 *             base(2),
 *             exponent(-1075..970)})
 * ```
 */
export type Double = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION Double */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Double */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Double */

/* START_OF_SYMBOL_DEFINITION _decode_Double */
export const _decode_Double = $._decodeReal;
/* END_OF_SYMBOL_DEFINITION _decode_Double */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Double */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Double */

/* START_OF_SYMBOL_DEFINITION _encode_Double */
export const _encode_Double = $._encodeReal;

/* END_OF_SYMBOL_DEFINITION _encode_Double */

/* eslint-enable */
