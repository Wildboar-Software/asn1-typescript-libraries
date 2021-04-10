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
import {
  AttributeTypes,
  _decode_AttributeTypes,
  _encode_AttributeTypes,
} from '../Uds2/AttributeTypes.ta';
export {
  AttributeTypes,
  _decode_AttributeTypes,
  _encode_AttributeTypes,
} from '../Uds2/AttributeTypes.ta';

/* START_OF_SYMBOL_DEFINITION AttributeTypeList */
/**
 * @summary AttributeTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeList  ::=  AttributeTypes
 * ```
 */
export type AttributeTypeList = AttributeTypes; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeTypeList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeList */
let _cached_decoder_for_AttributeTypeList: $.ASN1Decoder<AttributeTypeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeList */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeTypeList */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeList} The decoded data structure.
 */
export function _decode_AttributeTypeList(el: _Element) {
  if (!_cached_decoder_for_AttributeTypeList) {
    _cached_decoder_for_AttributeTypeList = _decode_AttributeTypes;
  }
  return _cached_decoder_for_AttributeTypeList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeTypeList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeList */
let _cached_encoder_for_AttributeTypeList: $.ASN1Encoder<AttributeTypeList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeList */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeTypeList */
/**
 * @summary Encodes a(n) AttributeTypeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeList(
  value: AttributeTypeList,
  elGetter: $.ASN1Encoder<AttributeTypeList>
) {
  if (!_cached_encoder_for_AttributeTypeList) {
    _cached_encoder_for_AttributeTypeList = _encode_AttributeTypes;
  }
  return _cached_encoder_for_AttributeTypeList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeTypeList */

/* eslint-enable */
