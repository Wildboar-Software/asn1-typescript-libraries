/* eslint-disable */
import {
  OCTET_STRING,
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


/**
 * @summary LDAPString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPString  ::=  OCTET STRING
 * ```
 */
export type LDAPString = OCTET_STRING; // OctetStringType


/**
 * @summary Decodes an ASN.1 element into a(n) LDAPString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPString} The decoded data structure.
 */
export function _decode_LDAPString(el: _Element) {
  return $._decodeOctetString(el);
}


/**
 * @summary Encodes a(n) LDAPString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPString, encoded as an ASN.1 Element.
 */
export function _encode_LDAPString(
  value: LDAPString,
  elGetter: $.ASN1Encoder<LDAPString>
) {
  return $._encodeOctetString(value, elGetter);
}


/* eslint-enable */
