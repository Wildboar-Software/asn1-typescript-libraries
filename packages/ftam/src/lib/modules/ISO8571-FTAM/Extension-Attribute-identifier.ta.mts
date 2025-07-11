/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
 * @summary Extension_Attribute_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension-Attribute-identifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Extension_Attribute_identifier = OBJECT_IDENTIFIER; // ObjectIdentifierType


let _cached_decoder_for_Extension_Attribute_identifier: $.ASN1Decoder<Extension_Attribute_identifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Extension_Attribute_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extension_Attribute_identifier} The decoded data structure.
 */
export function _decode_Extension_Attribute_identifier(el: _Element): Extension_Attribute_identifier {
  if (!_cached_decoder_for_Extension_Attribute_identifier) {
    _cached_decoder_for_Extension_Attribute_identifier =
      $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_Extension_Attribute_identifier(el);
}


let _cached_encoder_for_Extension_Attribute_identifier: $.ASN1Encoder<Extension_Attribute_identifier> | null = null;


/**
 * @summary Encodes a(n) Extension_Attribute_identifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension_Attribute_identifier, encoded as an ASN.1 Element.
 */
export function _encode_Extension_Attribute_identifier(
  value: Extension_Attribute_identifier,
  elGetter: $.ASN1Encoder<Extension_Attribute_identifier>
): _Element {
  if (!_cached_encoder_for_Extension_Attribute_identifier) {
    _cached_encoder_for_Extension_Attribute_identifier =
      $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_Extension_Attribute_identifier(value, elGetter);
}


/* eslint-enable */
