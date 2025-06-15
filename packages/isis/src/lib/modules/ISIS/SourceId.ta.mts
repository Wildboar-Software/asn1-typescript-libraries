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

/* START_OF_SYMBOL_DEFINITION SourceId */
/**
 * @summary SourceId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SourceId  ::=  OCTET STRING(SIZE (1..10))
 * ```
 */
export type SourceId = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SourceId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceId */

/* START_OF_SYMBOL_DEFINITION _decode_SourceId */
export const _decode_SourceId = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SourceId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceId */

/* START_OF_SYMBOL_DEFINITION _encode_SourceId */
export const _encode_SourceId = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SourceId */

/* eslint-enable */
