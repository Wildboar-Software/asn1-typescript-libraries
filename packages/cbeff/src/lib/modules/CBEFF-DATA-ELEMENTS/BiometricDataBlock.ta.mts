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

/* START_OF_SYMBOL_DEFINITION BiometricDataBlock */
/**
 * @summary BiometricDataBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricDataBlock  ::=  OCTET STRING
 * ```
 */
export type BiometricDataBlock = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BiometricDataBlock */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricDataBlock */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricDataBlock */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricDataBlock */
export const _decode_BiometricDataBlock = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BiometricDataBlock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricDataBlock */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricDataBlock */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricDataBlock */
export const _encode_BiometricDataBlock = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BiometricDataBlock */

/* eslint-enable */
