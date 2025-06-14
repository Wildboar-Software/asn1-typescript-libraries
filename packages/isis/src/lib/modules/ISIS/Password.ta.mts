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

/* START_OF_SYMBOL_DEFINITION Password */
/**
 * @summary Password
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Password  ::=  OCTET STRING(SIZE (0..254))
 * ```
 */
export type Password = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Password */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Password */
let _cached_decoder_for_Password: $.ASN1Decoder<Password> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Password */

/* START_OF_SYMBOL_DEFINITION _decode_Password */
/**
 * @summary Decodes an ASN.1 element into a(n) Password
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Password} The decoded data structure.
 */
export function _decode_Password(el: _Element) {
  if (!_cached_decoder_for_Password) {
    _cached_decoder_for_Password = $._decodeOctetString;
  }
  return _cached_decoder_for_Password(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Password */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Password */
let _cached_encoder_for_Password: $.ASN1Encoder<Password> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Password */

/* START_OF_SYMBOL_DEFINITION _encode_Password */
/**
 * @summary Encodes a(n) Password into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Password, encoded as an ASN.1 Element.
 */
export function _encode_Password(
  value: Password,
  elGetter: $.ASN1Encoder<Password>
) {
  if (!_cached_encoder_for_Password) {
    _cached_encoder_for_Password = $._encodeOctetString;
  }
  return _cached_encoder_for_Password(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Password */

/* eslint-enable */
