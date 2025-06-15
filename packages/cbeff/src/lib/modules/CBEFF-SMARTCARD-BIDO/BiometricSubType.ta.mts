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

/* START_OF_SYMBOL_DEFINITION BiometricSubType */
/**
 * @summary BiometricSubType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricSubType  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type BiometricSubType = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BiometricSubType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricSubType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricSubType */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricSubType */
export const _decode_BiometricSubType = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BiometricSubType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricSubType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricSubType */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricSubType */
export const _encode_BiometricSubType = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BiometricSubType */

/* eslint-enable */
