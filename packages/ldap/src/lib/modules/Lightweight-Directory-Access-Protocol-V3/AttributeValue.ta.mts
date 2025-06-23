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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValue} The decoded data structure.
 */
export function _decode_AttributeValue(el: _Element): AttributeValue {
  return $._decodeOctetString(el);
}


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
): _Element {
  return $._encodeOctetString(value, elGetter);
}


/* eslint-enable */
