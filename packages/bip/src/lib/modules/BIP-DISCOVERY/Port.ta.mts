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

/* START_OF_SYMBOL_DEFINITION Port */
/**
 * @summary Port
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Port  ::=  INTEGER(0..65535)
 * ```
 */
export type Port = INTEGER;
/* END_OF_SYMBOL_DEFINITION Port */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Port */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Port */

/* START_OF_SYMBOL_DEFINITION _decode_Port */
export const _decode_Port = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Port */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Port */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Port */

/* START_OF_SYMBOL_DEFINITION _encode_Port */
export const _encode_Port = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Port */

/* eslint-enable */
