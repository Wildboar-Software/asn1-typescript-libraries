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
  AddrCoverageType,
  _enum_for_AddrCoverageType,
  AddrCoverageType_international /* IMPORTED_LONG_ENUMERATION_ITEM */,
  international /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrCoverageType_national /* IMPORTED_LONG_ENUMERATION_ITEM */,
  national /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrCoverageType_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrCoverageType_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrCoverageType,
  _encode_AddrCoverageType,
} from '../Uds/AddrCoverageType.ta';
export {
  AddrCoverageType,
  _enum_for_AddrCoverageType,
  AddrCoverageType_international /* IMPORTED_LONG_ENUMERATION_ITEM */,
  international /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrCoverageType_national /* IMPORTED_LONG_ENUMERATION_ITEM */,
  national /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrCoverageType_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrCoverageType_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrCoverageType,
  _encode_AddrCoverageType,
} from '../Uds/AddrCoverageType.ta';

/* START_OF_SYMBOL_DEFINITION AddrCoverage */
/**
 * @summary AddrCoverage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrCoverage  ::=  AddrCoverageType
 * ```
 */
export type AddrCoverage = AddrCoverageType; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddrCoverage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrCoverage */
let _cached_decoder_for_AddrCoverage: $.ASN1Decoder<AddrCoverage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrCoverage */

/* START_OF_SYMBOL_DEFINITION _decode_AddrCoverage */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrCoverage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrCoverage} The decoded data structure.
 */
export function _decode_AddrCoverage(el: _Element) {
  if (!_cached_decoder_for_AddrCoverage) {
    _cached_decoder_for_AddrCoverage = _decode_AddrCoverageType;
  }
  return _cached_decoder_for_AddrCoverage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrCoverage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrCoverage */
let _cached_encoder_for_AddrCoverage: $.ASN1Encoder<AddrCoverage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrCoverage */

/* START_OF_SYMBOL_DEFINITION _encode_AddrCoverage */
/**
 * @summary Encodes a(n) AddrCoverage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrCoverage, encoded as an ASN.1 Element.
 */
export function _encode_AddrCoverage(
  value: AddrCoverage,
  elGetter: $.ASN1Encoder<AddrCoverage>
) {
  if (!_cached_encoder_for_AddrCoverage) {
    _cached_encoder_for_AddrCoverage = _encode_AddrCoverageType;
  }
  return _cached_encoder_for_AddrCoverage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrCoverage */

/* eslint-enable */
