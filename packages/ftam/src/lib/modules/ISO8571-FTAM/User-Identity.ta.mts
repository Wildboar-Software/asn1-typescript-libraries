/* eslint-disable */
import {
  GraphicString,
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


/**
 * @summary User_Identity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-Identity  ::=  [APPLICATION 22] IMPLICIT GraphicString
 * ```
 */
export type User_Identity = GraphicString; // GraphicString


let _cached_decoder_for_User_Identity: $.ASN1Decoder<User_Identity> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) User_Identity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_Identity} The decoded data structure.
 */
export function _decode_User_Identity(el: _Element) {
  if (!_cached_decoder_for_User_Identity) {
    _cached_decoder_for_User_Identity = $._decode_implicit<User_Identity>(
      () => $._decodeGraphicString
    );
  }
  return _cached_decoder_for_User_Identity(el);
}


let _cached_encoder_for_User_Identity: $.ASN1Encoder<User_Identity> | null = null;


/**
 * @summary Encodes a(n) User_Identity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_Identity, encoded as an ASN.1 Element.
 */
export function _encode_User_Identity(
  value: User_Identity,
  elGetter: $.ASN1Encoder<User_Identity>
) {
  if (!_cached_encoder_for_User_Identity) {
    _cached_encoder_for_User_Identity = $._encode_implicit(
      _TagClass.application,
      22,
      () => $._encodeGraphicString,
      $.BER
    );
  }
  return _cached_encoder_for_User_Identity(value, elGetter);
}


/* eslint-enable */
