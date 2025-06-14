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
let _cached_decoder_for_KerberosTime: $.ASN1Decoder<KerberosTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosTime */

/* START_OF_SYMBOL_DEFINITION _decode_KerberosTime */
/**
 * @summary Decodes an ASN.1 element into a(n) KerberosTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KerberosTime} The decoded data structure.
 */
export function _decode_KerberosTime(el: _Element) {
  if (!_cached_decoder_for_KerberosTime) {
    _cached_decoder_for_KerberosTime = $._decodeGeneralizedTime;
  }
  return _cached_decoder_for_KerberosTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KerberosTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosTime */
let _cached_encoder_for_KerberosTime: $.ASN1Encoder<KerberosTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosTime */

/* START_OF_SYMBOL_DEFINITION _encode_KerberosTime */
/**
 * @summary Encodes a(n) KerberosTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KerberosTime, encoded as an ASN.1 Element.
 */
export function _encode_KerberosTime(
  value: KerberosTime,
  elGetter: $.ASN1Encoder<KerberosTime>
) {
  if (!_cached_encoder_for_KerberosTime) {
    _cached_encoder_for_KerberosTime = $._encodeGeneralizedTime;
  }
  return _cached_encoder_for_KerberosTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KerberosTime */

/* eslint-enable */
