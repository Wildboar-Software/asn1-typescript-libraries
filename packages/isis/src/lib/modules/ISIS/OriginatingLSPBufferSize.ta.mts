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

/* START_OF_SYMBOL_DEFINITION OriginatingLSPBufferSize */
/**
 * @summary OriginatingLSPBufferSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingLSPBufferSize  ::=  INTEGER(512..1492)
 * ```
 */
export type OriginatingLSPBufferSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingLSPBufferSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatingLSPBufferSize */
export const _decode_OriginatingLSPBufferSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingLSPBufferSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatingLSPBufferSize */
export const _encode_OriginatingLSPBufferSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_OriginatingLSPBufferSize */

/* eslint-enable */
