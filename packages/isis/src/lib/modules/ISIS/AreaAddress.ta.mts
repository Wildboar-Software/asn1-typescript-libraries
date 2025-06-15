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

/* START_OF_SYMBOL_DEFINITION AreaAddress */
/**
 * @summary AreaAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AreaAddress  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export type AreaAddress = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION AreaAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaAddress */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaAddress */

/* START_OF_SYMBOL_DEFINITION _decode_AreaAddress */
export const _decode_AreaAddress = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_AreaAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaAddress */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaAddress */

/* START_OF_SYMBOL_DEFINITION _encode_AreaAddress */
export const _encode_AreaAddress = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_AreaAddress */

/* eslint-enable */
