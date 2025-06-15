/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION MaximumAreaAddresses */
/**
 * @summary MaximumAreaAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumAreaAddresses  ::=  INTEGER(0..254)
 * ```
 */
export type MaximumAreaAddresses = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumAreaAddresses */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _decode_MaximumAreaAddresses */
export const _decode_MaximumAreaAddresses = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumAreaAddresses */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumAreaAddresses */

/* START_OF_SYMBOL_DEFINITION _encode_MaximumAreaAddresses */
export const _encode_MaximumAreaAddresses = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MaximumAreaAddresses */

/* eslint-enable */
