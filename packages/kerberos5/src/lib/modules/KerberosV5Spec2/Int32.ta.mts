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

/* START_OF_SYMBOL_DEFINITION Int32 */
/**
 * @summary Int32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Int32            ::=  INTEGER (-2147483648..2147483647)
 * ```
 */
export type Int32 = INTEGER;
/* END_OF_SYMBOL_DEFINITION Int32 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Int32 */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Int32 */

/* START_OF_SYMBOL_DEFINITION _decode_Int32 */
export const _decode_Int32 = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Int32 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Int32 */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Int32 */

/* START_OF_SYMBOL_DEFINITION _encode_Int32 */
export const _encode_Int32 = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Int32 */

/* eslint-enable */
