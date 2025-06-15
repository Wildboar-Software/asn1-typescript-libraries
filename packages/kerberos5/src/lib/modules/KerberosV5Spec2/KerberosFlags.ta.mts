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

/* START_OF_SYMBOL_DEFINITION KerberosFlags */
/**
 * @summary KerberosFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KerberosFlags    ::=  BIT STRING (SIZE (32..MAX))
 * ```
 */
export type KerberosFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION KerberosFlags */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosFlags */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosFlags */

/* START_OF_SYMBOL_DEFINITION _decode_KerberosFlags */
export const _decode_KerberosFlags = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_KerberosFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosFlags */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosFlags */

/* START_OF_SYMBOL_DEFINITION _encode_KerberosFlags */
export const _encode_KerberosFlags = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_KerberosFlags */

/* eslint-enable */
