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

/* START_OF_SYMBOL_DEFINITION AttributeValue */
/**
 * @summary AttributeValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValue  ::=  OCTET STRING
 * ```
 */
export type AttributeValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION AttributeValue */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValue */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValue} The decoded data structure.
 */
export function _decode_AttributeValue(el: _Element) {
  return $._decodeOctetString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValue */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValue */
/**
 * @summary Encodes a(n) AttributeValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValue, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValue(
  value: AttributeValue,
  elGetter: $.ASN1Encoder<AttributeValue>
) {
  return $._encodeOctetString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValue */

/* eslint-enable */
