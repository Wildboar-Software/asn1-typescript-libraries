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
  BERElement,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs';

/**
 * @summary PartialAttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PartialAttributeList  ::=  SEQUENCE OF partialAttribute PartialAttribute
 * ```
 */
export type PartialAttributeList = PartialAttribute[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) PartialAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialAttributeList} The decoded data structure.
 */
export function _decode_PartialAttributeList(el: _Element): PartialAttributeList {
  return el.sequenceOf.map((attr) => _decode_PartialAttribute(attr));
}

/**
 * @summary Encodes a(n) PartialAttributeList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_PartialAttributeList(
  value: PartialAttributeList,
  elGetter: $.ASN1Encoder<PartialAttributeList>
): _Element {
  return BERElement.fromSequence(value.map((attr) => _encode_PartialAttribute(attr, $.BER)));
}


/* eslint-enable */
