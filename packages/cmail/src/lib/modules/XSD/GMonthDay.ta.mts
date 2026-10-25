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
 * @summary GMonthDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GMonthDay  ::=  DateTimeType (MonthDay)
 * ```
 */
export type GMonthDay = DateTimeType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GMonthDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GMonthDay} The decoded data structure.
 */
export const _decode_GMonthDay: $.ASN1Decoder<GMonthDay> = _decode_DateTimeType;

/**
 * @summary Encodes a(n) GMonthDay into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GMonthDay, encoded as an ASN.1 Element.
 */
export const _encode_GMonthDay: $.ASN1Encoder<GMonthDay> = _encode_DateTimeType;


/* eslint-enable */
