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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  XMLCompatibleString,
  _decode_XMLCompatibleString,
  _encode_XMLCompatibleString,
} from '../XSD/XMLCompatibleString.ta.mjs';

/**
 * @summary AnySimpleType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnySimpleType  ::=  XMLCompatibleString
 * ```
 */
export type AnySimpleType = XMLCompatibleString; // DefinedType


let _cached_decoder_for_AnySimpleType: $.ASN1Decoder<AnySimpleType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AnySimpleType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnySimpleType} The decoded data structure.
 */
export function _decode_AnySimpleType(el: _Element): AnySimpleType {
  if (!_cached_decoder_for_AnySimpleType) {
    _cached_decoder_for_AnySimpleType = _decode_XMLCompatibleString;
  }
  return _cached_decoder_for_AnySimpleType(el);
}


let _cached_encoder_for_AnySimpleType: $.ASN1Encoder<AnySimpleType> | null = null;


/**
 * @summary Encodes a(n) AnySimpleType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnySimpleType, encoded as an ASN.1 Element.
 */
export function _encode_AnySimpleType(
  value: AnySimpleType,
  elGetter: $.ASN1Encoder<AnySimpleType>
): _Element {
  if (!_cached_encoder_for_AnySimpleType) {
    _cached_encoder_for_AnySimpleType = _encode_XMLCompatibleString;
  }
  return _cached_encoder_for_AnySimpleType(value, elGetter);
}


/* eslint-enable */
