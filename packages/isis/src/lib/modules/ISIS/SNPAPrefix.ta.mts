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

/* START_OF_SYMBOL_DEFINITION SNPAPrefix */
/**
 * @summary SNPAPrefix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNPAPrefix  ::=  BIT STRING(SIZE (0..120))
 * ```
 */
export type SNPAPrefix = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAPrefix */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _decode_SNPAPrefix */
export const _decode_SNPAPrefix = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAPrefix */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAPrefix */

/* START_OF_SYMBOL_DEFINITION _encode_SNPAPrefix */
export const _encode_SNPAPrefix = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_SNPAPrefix */

/* eslint-enable */
