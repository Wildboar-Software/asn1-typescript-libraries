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

/* START_OF_SYMBOL_DEFINITION UInt32 */
/**
 * @summary UInt32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UInt32           ::=  INTEGER (0..4294967295)
 * ```
 */
export type UInt32 = INTEGER;
/* END_OF_SYMBOL_DEFINITION UInt32 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UInt32 */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UInt32 */

/* START_OF_SYMBOL_DEFINITION _decode_UInt32 */
export const _decode_UInt32 = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_UInt32 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UInt32 */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UInt32 */

/* START_OF_SYMBOL_DEFINITION _encode_UInt32 */
export const _encode_UInt32 = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_UInt32 */

/* eslint-enable */
