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

/* START_OF_SYMBOL_DEFINITION MACAddress */
/**
 * @summary MACAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MACAddress  ::=  OCTET STRING(SIZE (6))
 * ```
 */
export type MACAddress = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION MACAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MACAddress */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MACAddress */

/* START_OF_SYMBOL_DEFINITION _decode_MACAddress */
export const _decode_MACAddress = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_MACAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MACAddress */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MACAddress */

/* START_OF_SYMBOL_DEFINITION _encode_MACAddress */
export const _encode_MACAddress = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_MACAddress */

/* eslint-enable */
