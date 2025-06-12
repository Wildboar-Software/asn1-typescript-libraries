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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.js';
export {
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.js';

/* START_OF_SYMBOL_DEFINITION Attribute */
/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute  ::=  PartialAttribute(WITH COMPONENTS {
 *                                  ...,
 *                                  vals  (SIZE (1..MAX))
 *                                })
 * ```
 */
export type Attribute = PartialAttribute; // DefinedType
/* END_OF_SYMBOL_DEFINITION Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element) {
  return _decode_PartialAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute */
/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(
  value: Attribute,
  elGetter: $.ASN1Encoder<Attribute>
) {
  return _encode_PartialAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute */

/* eslint-enable */
