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
  SubscrType,
  _enum_for_SubscrType,
  SubscrType_residential /* IMPORTED_LONG_ENUMERATION_ITEM */,
  residential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_organization /* IMPORTED_LONG_ENUMERATION_ITEM */,
  organization /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_government /* IMPORTED_LONG_ENUMERATION_ITEM */,
  government /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubscrType,
  _encode_SubscrType,
} from '../Uds2/SubscrType.ta';
export {
  SubscrType,
  _enum_for_SubscrType,
  SubscrType_residential /* IMPORTED_LONG_ENUMERATION_ITEM */,
  residential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_organization /* IMPORTED_LONG_ENUMERATION_ITEM */,
  organization /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_government /* IMPORTED_LONG_ENUMERATION_ITEM */,
  government /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubscrType,
  _encode_SubscrType,
} from '../Uds2/SubscrType.ta';

/* START_OF_SYMBOL_DEFINITION SubscrTypes */
/**
 * @summary SubscrTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscrTypes  ::=  SEQUENCE OF SubscrType
 * ```
 */
export type SubscrTypes = SubscrType[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SubscrTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscrTypes */
let _cached_decoder_for_SubscrTypes: $.ASN1Decoder<SubscrTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscrTypes */

/* START_OF_SYMBOL_DEFINITION _decode_SubscrTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) SubscrTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscrTypes} The decoded data structure.
 */
export function _decode_SubscrTypes(el: _Element) {
  if (!_cached_decoder_for_SubscrTypes) {
    _cached_decoder_for_SubscrTypes = $._decodeSequenceOf<SubscrType>(
      () => _decode_SubscrType
    );
  }
  return _cached_decoder_for_SubscrTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubscrTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscrTypes */
let _cached_encoder_for_SubscrTypes: $.ASN1Encoder<SubscrTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscrTypes */

/* START_OF_SYMBOL_DEFINITION _encode_SubscrTypes */
/**
 * @summary Encodes a(n) SubscrTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscrTypes, encoded as an ASN.1 Element.
 */
export function _encode_SubscrTypes(
  value: SubscrTypes,
  elGetter: $.ASN1Encoder<SubscrTypes>
) {
  if (!_cached_encoder_for_SubscrTypes) {
    _cached_encoder_for_SubscrTypes = $._encodeSequenceOf<SubscrType>(
      () => _encode_SubscrType,
      $.BER
    );
  }
  return _cached_encoder_for_SubscrTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubscrTypes */

/* eslint-enable */
