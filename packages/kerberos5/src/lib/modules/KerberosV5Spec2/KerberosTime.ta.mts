/* eslint-disable */
import {
  GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION KerberosTime */
/**
 * @summary KerberosTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KerberosTime     ::=  GeneralizedTime
 * ```
 */
export type KerberosTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION KerberosTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosTime */

/* START_OF_SYMBOL_DEFINITION _decode_KerberosTime */
export const _decode_KerberosTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_KerberosTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosTime */

/* START_OF_SYMBOL_DEFINITION _encode_KerberosTime */
export const _encode_KerberosTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_KerberosTime */

/* eslint-enable */
