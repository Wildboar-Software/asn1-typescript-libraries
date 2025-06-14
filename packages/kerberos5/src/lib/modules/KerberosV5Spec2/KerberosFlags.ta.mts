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
let _cached_decoder_for_KerberosFlags: $.ASN1Decoder<KerberosFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KerberosFlags */

/* START_OF_SYMBOL_DEFINITION _decode_KerberosFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) KerberosFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KerberosFlags} The decoded data structure.
 */
export function _decode_KerberosFlags(el: _Element) {
  if (!_cached_decoder_for_KerberosFlags) {
    _cached_decoder_for_KerberosFlags = $._decodeBitString;
  }
  return _cached_decoder_for_KerberosFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KerberosFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosFlags */
let _cached_encoder_for_KerberosFlags: $.ASN1Encoder<KerberosFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KerberosFlags */

/* START_OF_SYMBOL_DEFINITION _encode_KerberosFlags */
/**
 * @summary Encodes a(n) KerberosFlags into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KerberosFlags, encoded as an ASN.1 Element.
 */
export function _encode_KerberosFlags(
  value: KerberosFlags,
  elGetter: $.ASN1Encoder<KerberosFlags>
) {
  if (!_cached_encoder_for_KerberosFlags) {
    _cached_encoder_for_KerberosFlags = $._encodeBitString;
  }
  return _cached_encoder_for_KerberosFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KerberosFlags */

/* eslint-enable */
