/* eslint-disable */
import {
  OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION BiometricType */
/**
 * @summary BiometricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricType  ::=  OCTET STRING(SIZE (1..3))
 * ```
 */
export type BiometricType = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BiometricType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricType */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricType */
export const _decode_BiometricType = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BiometricType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricType */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricType */
export const _encode_BiometricType = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BiometricType */

/* eslint-enable */
