/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION AssertionValue */
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
/* END_OF_SYMBOL_DEFINITION AssertionValue */

/* START_OF_SYMBOL_DEFINITION _decode_AssertionValue */
/**
 * @summary Decodes an ASN.1 element into a(n) AssertionValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssertionValue} The decoded data structure.
 */
export function _decode_AssertionValue(el: _Element) {
  return $._decodeOctetString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssertionValue */

/* START_OF_SYMBOL_DEFINITION _encode_AssertionValue */
/**
 * @summary Encodes a(n) AssertionValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssertionValue, encoded as an ASN.1 Element.
 */
export function _encode_AssertionValue(
  value: AssertionValue,
  elGetter: $.ASN1Encoder<AssertionValue>
) {
  return $._encodeOctetString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssertionValue */

/* eslint-enable */
