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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Implementation_Information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Implementation-Information  ::=  [1] IMPLICIT GraphicString
 * ```
 */
export type Implementation_Information = GraphicString; // GraphicString


let _cached_decoder_for_Implementation_Information: $.ASN1Decoder<Implementation_Information> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Implementation_Information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Implementation_Information} The decoded data structure.
 */
export function _decode_Implementation_Information(el: _Element) {
  if (!_cached_decoder_for_Implementation_Information) {
    _cached_decoder_for_Implementation_Information = $._decode_implicit<Implementation_Information>(
      () => $._decodeGraphicString
    );
  }
  return _cached_decoder_for_Implementation_Information(el);
}


let _cached_encoder_for_Implementation_Information: $.ASN1Encoder<Implementation_Information> | null = null;


/**
 * @summary Encodes a(n) Implementation_Information into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Implementation_Information, encoded as an ASN.1 Element.
 */
export function _encode_Implementation_Information(
  value: Implementation_Information,
  elGetter: $.ASN1Encoder<Implementation_Information>
) {
  if (!_cached_encoder_for_Implementation_Information) {
    _cached_encoder_for_Implementation_Information = $._encode_implicit(
      _TagClass.context,
      1,
      () => $._encodeGraphicString,
      $.BER
    );
  }
  return _cached_encoder_for_Implementation_Information(value, elGetter);
}


/* eslint-enable */
