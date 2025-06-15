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

/* START_OF_SYMBOL_DEFINITION PKIProtection */
/**
 * @summary PKIProtection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIProtection  ::=  BIT STRING
 * ```
 */
export type PKIProtection = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PKIProtection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIProtection */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIProtection */

/* START_OF_SYMBOL_DEFINITION _decode_PKIProtection */
export const _decode_PKIProtection = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_PKIProtection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIProtection */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIProtection */

/* START_OF_SYMBOL_DEFINITION _encode_PKIProtection */
export const _encode_PKIProtection = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_PKIProtection */

/* eslint-enable */
