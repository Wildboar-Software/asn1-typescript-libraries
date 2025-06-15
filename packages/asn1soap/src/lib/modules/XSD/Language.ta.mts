/* eslint-disable */
import {
  VisibleString,
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

/* START_OF_SYMBOL_DEFINITION Language */
/**
 * @summary Language
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Language  ::=  VisibleString (FROM ("a".."z" | "A".."Z" | "-" | "0".."9"))
 * (PATTERN
 *  "[a-zA-Z]#(1,8)(-[a-zA-Z0-9]#(1,8))*")
 * ```
 */
export type Language = VisibleString; // VisibleString
/* END_OF_SYMBOL_DEFINITION Language */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Language */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Language */

/* START_OF_SYMBOL_DEFINITION _decode_Language */
export const _decode_Language = $._decodeVisibleString;
/* END_OF_SYMBOL_DEFINITION _decode_Language */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Language */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Language */

/* START_OF_SYMBOL_DEFINITION _encode_Language */
export const _encode_Language = $._encodeVisibleString;

/* END_OF_SYMBOL_DEFINITION _encode_Language */

/* eslint-enable */
