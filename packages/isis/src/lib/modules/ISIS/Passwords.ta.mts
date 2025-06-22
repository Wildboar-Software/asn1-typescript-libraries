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
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISIS/Password.ta.mjs';
/**
 * @summary Passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Passwords  ::=  SET OF Password
 * ```
 */
export type Passwords = Password[]; // SetOfType

let _cached_decoder_for_Passwords: $.ASN1Decoder<Passwords> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Passwords
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Passwords} The decoded data structure.
 */
export function _decode_Passwords(el: _Element) {
  if (!_cached_decoder_for_Passwords) {
    _cached_decoder_for_Passwords = $._decodeSetOf<Password>(
      () => _decode_Password
    );
  }
  return _cached_decoder_for_Passwords(el);
}

let _cached_encoder_for_Passwords: $.ASN1Encoder<Passwords> | null = null;

/**
 * @summary Encodes a(n) Passwords into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Passwords, encoded as an ASN.1 Element.
 */
export function _encode_Passwords(
  value: Passwords,
  elGetter: $.ASN1Encoder<Passwords>
) {
  if (!_cached_encoder_for_Passwords) {
    _cached_encoder_for_Passwords = $._encodeSetOf<Password>(
      () => _encode_Password,
      $.BER
    );
  }
  return _cached_encoder_for_Passwords(value, elGetter);
}


/* eslint-enable */
