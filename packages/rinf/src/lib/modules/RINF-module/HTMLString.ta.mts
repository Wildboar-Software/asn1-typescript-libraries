/* eslint-disable */
import {
  UTF8String,
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

/* START_OF_SYMBOL_DEFINITION HTMLString */
/**
 * @summary HTMLString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HTMLString  ::=  UTF8String(CONSTRAINED BY {
 *      / * Shall be a valid HTML document (see [W3C HTML]) using only the markups
 *         <p>, <b>, </b>, <i>, </i>, <br/>, <a href> and </a> * /})
 * ```
 */
export type HTMLString = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION HTMLString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HTMLString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HTMLString */

/* START_OF_SYMBOL_DEFINITION _decode_HTMLString */
export const _decode_HTMLString = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_HTMLString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HTMLString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HTMLString */

/* START_OF_SYMBOL_DEFINITION _encode_HTMLString */
export const _encode_HTMLString = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_HTMLString */

/* eslint-enable */
