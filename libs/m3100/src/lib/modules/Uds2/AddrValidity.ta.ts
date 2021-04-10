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
  AddrValidityType,
  _enum_for_AddrValidityType,
  AddrValidityType_current /* IMPORTED_LONG_ENUMERATION_ITEM */,
  current /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrValidityType_old /* IMPORTED_LONG_ENUMERATION_ITEM */,
  old /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrValidityType_future /* IMPORTED_LONG_ENUMERATION_ITEM */,
  future /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrValidityType_temporary /* IMPORTED_LONG_ENUMERATION_ITEM */,
  temporary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrValidityType,
  _encode_AddrValidityType,
} from '../Uds2/AddrValidityType.ta';
export {
  AddrValidityType,
  _enum_for_AddrValidityType,
  AddrValidityType_current /* IMPORTED_LONG_ENUMERATION_ITEM */,
  current /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrValidityType_old /* IMPORTED_LONG_ENUMERATION_ITEM */,
  old /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrValidityType_future /* IMPORTED_LONG_ENUMERATION_ITEM */,
  future /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrValidityType_temporary /* IMPORTED_LONG_ENUMERATION_ITEM */,
  temporary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrValidityType,
  _encode_AddrValidityType,
} from '../Uds2/AddrValidityType.ta';

/* START_OF_SYMBOL_DEFINITION AddrValidity */
/**
 * @summary AddrValidity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrValidity  ::=  AddrValidityType
 * ```
 */
export type AddrValidity = AddrValidityType; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddrValidity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidity */
let _cached_decoder_for_AddrValidity: $.ASN1Decoder<AddrValidity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidity */

/* START_OF_SYMBOL_DEFINITION _decode_AddrValidity */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrValidity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrValidity} The decoded data structure.
 */
export function _decode_AddrValidity(el: _Element) {
  if (!_cached_decoder_for_AddrValidity) {
    _cached_decoder_for_AddrValidity = _decode_AddrValidityType;
  }
  return _cached_decoder_for_AddrValidity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrValidity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidity */
let _cached_encoder_for_AddrValidity: $.ASN1Encoder<AddrValidity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidity */

/* START_OF_SYMBOL_DEFINITION _encode_AddrValidity */
/**
 * @summary Encodes a(n) AddrValidity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrValidity, encoded as an ASN.1 Element.
 */
export function _encode_AddrValidity(
  value: AddrValidity,
  elGetter: $.ASN1Encoder<AddrValidity>
) {
  if (!_cached_encoder_for_AddrValidity) {
    _cached_encoder_for_AddrValidity = _encode_AddrValidityType;
  }
  return _cached_encoder_for_AddrValidity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrValidity */

/* eslint-enable */
