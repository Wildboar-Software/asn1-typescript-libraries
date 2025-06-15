/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION AddressPrefix */
/**
 * @summary AddressPrefix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddressPrefix  ::=
 *   BIT STRING
 *     (SIZE (0..160))
 * ```
 */
export type AddressPrefix = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressPrefix */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _decode_AddressPrefix */
export const _decode_AddressPrefix = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressPrefix */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressPrefix */

/* START_OF_SYMBOL_DEFINITION _encode_AddressPrefix */
export const _encode_AddressPrefix = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_AddressPrefix */

/* eslint-enable */
