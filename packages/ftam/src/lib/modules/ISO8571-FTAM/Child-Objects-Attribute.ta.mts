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
 * @summary Child_Objects_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Child-Objects-Attribute  ::=  SET OF GraphicString
 * ```
 */
export type Child_Objects_Attribute = GraphicString[]; // SetOfType


let _cached_decoder_for_Child_Objects_Attribute: $.ASN1Decoder<Child_Objects_Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Child_Objects_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Child_Objects_Attribute} The decoded data structure.
 */
export function _decode_Child_Objects_Attribute(el: _Element) {
  if (!_cached_decoder_for_Child_Objects_Attribute) {
    _cached_decoder_for_Child_Objects_Attribute = $._decodeSetOf<GraphicString>(
      () => $._decodeGraphicString
    );
  }
  return _cached_decoder_for_Child_Objects_Attribute(el);
}


let _cached_encoder_for_Child_Objects_Attribute: $.ASN1Encoder<Child_Objects_Attribute> | null = null;


/**
 * @summary Encodes a(n) Child_Objects_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Child_Objects_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Child_Objects_Attribute(
  value: Child_Objects_Attribute,
  elGetter: $.ASN1Encoder<Child_Objects_Attribute>
) {
  if (!_cached_encoder_for_Child_Objects_Attribute) {
    _cached_encoder_for_Child_Objects_Attribute = $._encodeSetOf<GraphicString>(
      () => $._encodeGraphicString,
      $.BER
    );
  }
  return _cached_encoder_for_Child_Objects_Attribute(value, elGetter);
}


/* eslint-enable */
