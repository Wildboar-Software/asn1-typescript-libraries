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

/* START_OF_SYMBOL_DEFINITION Long */
/**
 * @summary Long
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Long  ::=  INTEGER (-9223372036854775808..9223372036854775807)
 * ```
 */
export type Long = INTEGER;
/* END_OF_SYMBOL_DEFINITION Long */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Long */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Long */

/* START_OF_SYMBOL_DEFINITION _decode_Long */
export const _decode_Long = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Long */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Long */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Long */

/* START_OF_SYMBOL_DEFINITION _encode_Long */
export const _encode_Long = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Long */

/* eslint-enable */
