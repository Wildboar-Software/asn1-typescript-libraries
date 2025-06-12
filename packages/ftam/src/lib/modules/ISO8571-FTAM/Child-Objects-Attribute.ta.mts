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

/* START_OF_SYMBOL_DEFINITION Child_Objects_Attribute */
/**
 * @summary Child_Objects_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Child-Objects-Attribute  ::=  SET OF GraphicString
 * ```
 */
export type Child_Objects_Attribute = GraphicString[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Child_Objects_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Child_Objects_Attribute */
let _cached_decoder_for_Child_Objects_Attribute: $.ASN1Decoder<Child_Objects_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Child_Objects_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Child_Objects_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Child_Objects_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Child_Objects_Attribute} The decoded data structure.
 */
export function _decode_Child_Objects_Attribute(el: _Element) {
  if (!_cached_decoder_for_Child_Objects_Attribute) {
    _cached_decoder_for_Child_Objects_Attribute = $._decodeSetOf<GraphicString>(
      () => $._decodeGraphicString
    );
  }
  return _cached_decoder_for_Child_Objects_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Child_Objects_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Child_Objects_Attribute */
let _cached_encoder_for_Child_Objects_Attribute: $.ASN1Encoder<Child_Objects_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Child_Objects_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Child_Objects_Attribute */
/**
 * @summary Encodes a(n) Child_Objects_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Child_Objects_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Child_Objects_Attribute(
  value: Child_Objects_Attribute,
  elGetter: $.ASN1Encoder<Child_Objects_Attribute>
) {
  if (!_cached_encoder_for_Child_Objects_Attribute) {
    _cached_encoder_for_Child_Objects_Attribute = $._encodeSetOf<GraphicString>(
      () => $._encodeGraphicString,
      $.BER
    );
  }
  return _cached_encoder_for_Child_Objects_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Child_Objects_Attribute */

/* eslint-enable */
