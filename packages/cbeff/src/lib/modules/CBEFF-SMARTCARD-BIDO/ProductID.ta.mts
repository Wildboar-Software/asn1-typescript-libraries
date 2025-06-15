/* eslint-disable */
import {
  OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION ProductID */
/**
 * @summary ProductID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProductID  ::=  OCTET STRING(SIZE (4))
 * ```
 */
export type ProductID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ProductID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProductID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProductID */

/* START_OF_SYMBOL_DEFINITION _decode_ProductID */
export const _decode_ProductID = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_ProductID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProductID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProductID */

/* START_OF_SYMBOL_DEFINITION _encode_ProductID */
export const _encode_ProductID = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_ProductID */

/* eslint-enable */
