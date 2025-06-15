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

/* START_OF_SYMBOL_DEFINITION SystemId */
/**
 * @summary SystemId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemId  ::=  OCTET STRING(SIZE (0..8))
 * ```
 */
export type SystemId = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SystemId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemId */

/* START_OF_SYMBOL_DEFINITION _decode_SystemId */
export const _decode_SystemId = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SystemId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemId */

/* START_OF_SYMBOL_DEFINITION _encode_SystemId */
export const _encode_SystemId = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SystemId */

/* eslint-enable */
