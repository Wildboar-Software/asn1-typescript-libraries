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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';

/* START_OF_SYMBOL_DEFINITION InvokeIDType */
/**
 * @summary InvokeIDType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeIDType  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export type InvokeIDType = InvokeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION InvokeIDType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeIDType */
let _cached_decoder_for_InvokeIDType: $.ASN1Decoder<InvokeIDType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeIDType */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeIDType */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeIDType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeIDType} The decoded data structure.
 */
export function _decode_InvokeIDType(el: _Element) {
  if (!_cached_decoder_for_InvokeIDType) {
    _cached_decoder_for_InvokeIDType = _decode_InvokeId;
  }
  return _cached_decoder_for_InvokeIDType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeIDType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeIDType */
let _cached_encoder_for_InvokeIDType: $.ASN1Encoder<InvokeIDType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeIDType */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeIDType */
/**
 * @summary Encodes a(n) InvokeIDType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeIDType, encoded as an ASN.1 Element.
 */
export function _encode_InvokeIDType(
  value: InvokeIDType,
  elGetter: $.ASN1Encoder<InvokeIDType>
) {
  if (!_cached_encoder_for_InvokeIDType) {
    _cached_encoder_for_InvokeIDType = _encode_InvokeId;
  }
  return _cached_encoder_for_InvokeIDType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeIDType */

/* eslint-enable */
