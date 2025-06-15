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

/**
 * @summary URI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=  LDAPString
 * ```
 */
export type URI = LDAPString; // DefinedType


/**
 * @summary Decodes an ASN.1 element into a(n) URI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URI} The decoded data structure.
 */
export function _decode_URI(el: _Element) {
  return _decode_LDAPString(el);
}


/**
 * @summary Encodes a(n) URI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URI, encoded as an ASN.1 Element.
 */
export function _encode_URI(value: URI, elGetter: $.ASN1Encoder<URI>) {
  return _encode_LDAPString(value, elGetter);
}


/* eslint-enable */
