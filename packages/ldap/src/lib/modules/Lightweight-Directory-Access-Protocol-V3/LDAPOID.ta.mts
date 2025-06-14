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

/* START_OF_SYMBOL_DEFINITION LDAPOID */
/**
 * @summary LDAPOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPOID  ::=  OCTET STRING
 * ```
 */
export type LDAPOID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION LDAPOID */

/* START_OF_SYMBOL_DEFINITION _decode_LDAPOID */
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPOID} The decoded data structure.
 */
export function _decode_LDAPOID(el: _Element) {
  return $._decodeOctetString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LDAPOID */

/* START_OF_SYMBOL_DEFINITION _encode_LDAPOID */
/**
 * @summary Encodes a(n) LDAPOID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPOID, encoded as an ASN.1 Element.
 */
export function _encode_LDAPOID(
  value: LDAPOID,
  elGetter: $.ASN1Encoder<LDAPOID>
) {
  return $._encodeOctetString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LDAPOID */

/* eslint-enable */
