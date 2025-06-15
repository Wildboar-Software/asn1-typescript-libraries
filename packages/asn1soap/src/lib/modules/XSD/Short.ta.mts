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

/* START_OF_SYMBOL_DEFINITION Short */
/**
 * @summary Short
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Short  ::=  INTEGER (-32768..32767)
 * ```
 */
export type Short = INTEGER;
/* END_OF_SYMBOL_DEFINITION Short */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Short */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Short */

/* START_OF_SYMBOL_DEFINITION _decode_Short */
export const _decode_Short = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Short */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Short */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Short */

/* START_OF_SYMBOL_DEFINITION _encode_Short */
export const _encode_Short = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Short */

/* eslint-enable */
