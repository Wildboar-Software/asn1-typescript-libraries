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

/* START_OF_SYMBOL_DEFINITION DateTimeType */
/**
 * @summary DateTimeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTimeType  ::=  VisibleString    (FROM ("0".."9" | "TZ:.+-"))
 *         (CONSTRAINED BY {/ * W3C XML Schema Part 2, 3.2.7 * /})
 * ```
 */
export type DateTimeType = VisibleString; // VisibleString
/* END_OF_SYMBOL_DEFINITION DateTimeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTimeType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTimeType */

/* START_OF_SYMBOL_DEFINITION _decode_DateTimeType */
export const _decode_DateTimeType = $._decodeVisibleString;
/* END_OF_SYMBOL_DEFINITION _decode_DateTimeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTimeType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTimeType */

/* START_OF_SYMBOL_DEFINITION _encode_DateTimeType */
export const _encode_DateTimeType = $._encodeVisibleString;

/* END_OF_SYMBOL_DEFINITION _encode_DateTimeType */

/* eslint-enable */
