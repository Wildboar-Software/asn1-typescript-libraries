/* eslint-disable */
import {
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
import {
  KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta.mjs';

/**
 * @summary KDCOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KDCOptions       ::=  KerberosFlags
 * ```
 */
export type KDCOptions = KerberosFlags; // DefinedType


let _cached_decoder_for_KDCOptions: $.ASN1Decoder<KDCOptions> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KDCOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KDCOptions} The decoded data structure.
 */
export function _decode_KDCOptions(el: _Element) {
  if (!_cached_decoder_for_KDCOptions) {
    _cached_decoder_for_KDCOptions = _decode_KerberosFlags;
  }
  return _cached_decoder_for_KDCOptions(el);
}


let _cached_encoder_for_KDCOptions: $.ASN1Encoder<KDCOptions> | null = null;


/**
 * @summary Encodes a(n) KDCOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDCOptions, encoded as an ASN.1 Element.
 */
export function _encode_KDCOptions(
  value: KDCOptions,
  elGetter: $.ASN1Encoder<KDCOptions>
) {
  if (!_cached_encoder_for_KDCOptions) {
    _cached_encoder_for_KDCOptions = _encode_KerberosFlags;
  }
  return _cached_encoder_for_KDCOptions(value, elGetter);
}


/* eslint-enable */
