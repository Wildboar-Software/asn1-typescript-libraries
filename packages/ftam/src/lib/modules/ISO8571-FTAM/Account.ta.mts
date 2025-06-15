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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary Account
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Account  ::=  [APPLICATION 4] IMPLICIT GraphicString
 * ```
 */
export type Account = GraphicString; // GraphicString


let _cached_decoder_for_Account: $.ASN1Decoder<Account> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Account
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Account} The decoded data structure.
 */
export function _decode_Account(el: _Element) {
  if (!_cached_decoder_for_Account) {
    _cached_decoder_for_Account = $._decode_implicit<Account>(
      () => $._decodeGraphicString
    );
  }
  return _cached_decoder_for_Account(el);
}


let _cached_encoder_for_Account: $.ASN1Encoder<Account> | null = null;


/**
 * @summary Encodes a(n) Account into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Account, encoded as an ASN.1 Element.
 */
export function _encode_Account(
  value: Account,
  elGetter: $.ASN1Encoder<Account>
) {
  if (!_cached_encoder_for_Account) {
    _cached_encoder_for_Account = $._encode_implicit(
      _TagClass.application,
      4,
      () => $._encodeGraphicString,
      $.BER
    );
  }
  return _cached_encoder_for_Account(value, elGetter);
}


/* eslint-enable */
