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
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';

/**
 * @summary AttributeSelection
 * @description
 *
 * SEQUENCE OF selector. Empty = all user attributes. `"*"` = all user
 * attrs plus any listed operational attrs. `"1.1"` alone = return no
 * attributes (`"1.1"` ignored if combined with others). Subtypes of
 * listed types are included. Duplicates and unrecognized names are
 * ignored. Operational attributes are returned only if named. Order
 * does not affect which attributes are selected.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeSelection  ::=  SEQUENCE OF selector LDAPString
 * ```
 */
export type AttributeSelection = LDAPString[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSelection} The decoded data structure.
 */
export function _decode_AttributeSelection(el: _Element): AttributeSelection {
  return el.sequenceOf.map((attr) => _decode_LDAPString(attr));
}

/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSelection(
  value: AttributeSelection,
  elGetter: $.ASN1Encoder<AttributeSelection>
): _Element {
  return BERElement.fromSequence(value.map((attr) => _encode_LDAPString(attr, $.BER)));
}

/* eslint-enable */
