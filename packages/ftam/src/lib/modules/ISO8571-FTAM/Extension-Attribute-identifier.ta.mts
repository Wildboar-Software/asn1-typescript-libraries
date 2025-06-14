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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Extension_Attribute_identifier */
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
/* END_OF_SYMBOL_DEFINITION Extension_Attribute_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension_Attribute_identifier */
let _cached_decoder_for_Extension_Attribute_identifier: $.ASN1Decoder<Extension_Attribute_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension_Attribute_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Extension_Attribute_identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Extension_Attribute_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extension_Attribute_identifier} The decoded data structure.
 */
export function _decode_Extension_Attribute_identifier(el: _Element) {
  if (!_cached_decoder_for_Extension_Attribute_identifier) {
    _cached_decoder_for_Extension_Attribute_identifier =
      $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_Extension_Attribute_identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Extension_Attribute_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension_Attribute_identifier */
let _cached_encoder_for_Extension_Attribute_identifier: $.ASN1Encoder<Extension_Attribute_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension_Attribute_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Extension_Attribute_identifier */
/**
 * @summary Encodes a(n) Extension_Attribute_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension_Attribute_identifier, encoded as an ASN.1 Element.
 */
export function _encode_Extension_Attribute_identifier(
  value: Extension_Attribute_identifier,
  elGetter: $.ASN1Encoder<Extension_Attribute_identifier>
) {
  if (!_cached_encoder_for_Extension_Attribute_identifier) {
    _cached_encoder_for_Extension_Attribute_identifier =
      $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_Extension_Attribute_identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Extension_Attribute_identifier */

/* eslint-enable */
