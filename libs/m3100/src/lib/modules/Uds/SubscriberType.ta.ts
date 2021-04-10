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
  SubscrTypes,
  _decode_SubscrTypes,
  _encode_SubscrTypes,
} from '../Uds/SubscrTypes.ta';
export {
  SubscrTypes,
  _decode_SubscrTypes,
  _encode_SubscrTypes,
} from '../Uds/SubscrTypes.ta';

/* START_OF_SYMBOL_DEFINITION SubscriberType */
/**
 * @summary SubscriberType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriberType  ::=  SubscrTypes
 * ```
 */
export type SubscriberType = SubscrTypes; // DefinedType
/* END_OF_SYMBOL_DEFINITION SubscriberType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriberType */
let _cached_decoder_for_SubscriberType: $.ASN1Decoder<SubscriberType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriberType */

/* START_OF_SYMBOL_DEFINITION _decode_SubscriberType */
/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscriberType} The decoded data structure.
 */
export function _decode_SubscriberType(el: _Element) {
  if (!_cached_decoder_for_SubscriberType) {
    _cached_decoder_for_SubscriberType = _decode_SubscrTypes;
  }
  return _cached_decoder_for_SubscriberType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubscriberType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriberType */
let _cached_encoder_for_SubscriberType: $.ASN1Encoder<SubscriberType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriberType */

/* START_OF_SYMBOL_DEFINITION _encode_SubscriberType */
/**
 * @summary Encodes a(n) SubscriberType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberType, encoded as an ASN.1 Element.
 */
export function _encode_SubscriberType(
  value: SubscriberType,
  elGetter: $.ASN1Encoder<SubscriberType>
) {
  if (!_cached_encoder_for_SubscriberType) {
    _cached_encoder_for_SubscriberType = _encode_SubscrTypes;
  }
  return _cached_encoder_for_SubscriberType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubscriberType */

/* eslint-enable */
