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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  LDAPString,
  _decode_LDAPString,
  _encode_LDAPString,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AttributeDescription */
/**
 * @summary AttributeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeDescription  ::=  LDAPString
 * ```
 */
export type AttributeDescription = LDAPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeDescription} The decoded data structure.
 */
export function _decode_AttributeDescription(el: _Element) {
  return _decode_LDAPString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeDescription */
/**
 * @summary Encodes a(n) AttributeDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDescription, encoded as an ASN.1 Element.
 */
export function _encode_AttributeDescription(
  value: AttributeDescription,
  elGetter: $.ASN1Encoder<AttributeDescription>
) {
  return _encode_LDAPString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeDescription */

/* eslint-enable */
