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

/* START_OF_SYMBOL_DEFINITION BDBIndex */
/**
 * @summary BDBIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BDBIndex  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type BDBIndex = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BDBIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BDBIndex */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BDBIndex */

/* START_OF_SYMBOL_DEFINITION _decode_BDBIndex */
export const _decode_BDBIndex = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BDBIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BDBIndex */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BDBIndex */

/* START_OF_SYMBOL_DEFINITION _encode_BDBIndex */
export const _encode_BDBIndex = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BDBIndex */

/* eslint-enable */
