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

/* START_OF_SYMBOL_DEFINITION UnsignedInt */
/**
 * @summary UnsignedInt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedInt  ::=     INTEGER (0..4294967295)
 * ```
 */
export type UnsignedInt = INTEGER;
/* END_OF_SYMBOL_DEFINITION UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedInt */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedInt */
export const _decode_UnsignedInt = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedInt */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedInt */
export const _encode_UnsignedInt = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedInt */

/* eslint-enable */
