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
 * @summary AssertionValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssertionValue  ::=  OCTET STRING
 * ```
 */
export type AssertionValue = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AssertionValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssertionValue} The decoded data structure.
 */
export const _decode_AssertionValue: $.ASN1Decoder<AssertionValue> = $._decodeOctetString;

/**
 * @summary Encodes a(n) AssertionValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssertionValue, encoded as an ASN.1 Element.
 */
export const _encode_AssertionValue: $.ASN1Encoder<AssertionValue> = $._encodeOctetString;

/* eslint-enable */
