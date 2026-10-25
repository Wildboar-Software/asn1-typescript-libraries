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
  type DateTimeType,
  _decode_DateTimeType,
  _encode_DateTimeType,
} from '../XSD/DateTimeType.ta.mjs';

/**
 * @summary Month
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Month  ::=  DateTimeType     (FROM ("0".."9" | "Z:+-"))
 *             (CONSTRAINED BY {/ * W3C XML Schema Part 2, 3.2.14 * /})
 * ```
 */
export type Month = DateTimeType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Month
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Month} The decoded data structure.
 */
export const _decode_Month: $.ASN1Decoder<Month> = _decode_DateTimeType;

/**
 * @summary Encodes a(n) Month into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Month, encoded as an ASN.1 Element.
 */
export const _encode_Month: $.ASN1Encoder<Month> = _encode_DateTimeType;


/* eslint-enable */
