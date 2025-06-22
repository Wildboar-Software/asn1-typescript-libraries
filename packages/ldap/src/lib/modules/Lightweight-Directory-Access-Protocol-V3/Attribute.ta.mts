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
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs';

/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute  ::=  PartialAttribute(WITH COMPONENTS {
 *                                  ...,
 *                                  vals  (SIZE (1..MAX))
 *                                })
 * ```
 */
export type Attribute = PartialAttribute; // DefinedType


/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element) {
  return _decode_PartialAttribute(el);
}


/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(
  value: Attribute,
  elGetter: $.ASN1Encoder<Attribute>
) {
  return _encode_PartialAttribute(value, elGetter);
}


/* eslint-enable */
