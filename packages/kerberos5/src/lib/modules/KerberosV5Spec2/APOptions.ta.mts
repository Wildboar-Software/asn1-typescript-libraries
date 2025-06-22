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
import * as $ from '@wildboar/asn1/functional';
import {
  KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta.mjs';

/**
 * @summary APOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * APOptions        ::=  KerberosFlags
 * ```
 */
export type APOptions = KerberosFlags; // DefinedType


let _cached_decoder_for_APOptions: $.ASN1Decoder<APOptions> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) APOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {APOptions} The decoded data structure.
 */
export function _decode_APOptions(el: _Element) {
  if (!_cached_decoder_for_APOptions) {
    _cached_decoder_for_APOptions = _decode_KerberosFlags;
  }
  return _cached_decoder_for_APOptions(el);
}


let _cached_encoder_for_APOptions: $.ASN1Encoder<APOptions> | null = null;


/**
 * @summary Encodes a(n) APOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APOptions, encoded as an ASN.1 Element.
 */
export function _encode_APOptions(
  value: APOptions,
  elGetter: $.ASN1Encoder<APOptions>
) {
  if (!_cached_encoder_for_APOptions) {
    _cached_encoder_for_APOptions = _encode_KerberosFlags;
  }
  return _cached_encoder_for_APOptions(value, elGetter);
}


/* eslint-enable */
