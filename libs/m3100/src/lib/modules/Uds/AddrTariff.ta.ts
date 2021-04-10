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
  AddrTariffType,
  _enum_for_AddrTariffType,
  AddrTariffType_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_premium /* IMPORTED_LONG_ENUMERATION_ITEM */,
  premium /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_toll_free /* IMPORTED_LONG_ENUMERATION_ITEM */,
  toll_free /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrTariffType,
  _encode_AddrTariffType,
} from '../Uds/AddrTariffType.ta';
export {
  AddrTariffType,
  _enum_for_AddrTariffType,
  AddrTariffType_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_premium /* IMPORTED_LONG_ENUMERATION_ITEM */,
  premium /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_toll_free /* IMPORTED_LONG_ENUMERATION_ITEM */,
  toll_free /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrTariffType,
  _encode_AddrTariffType,
} from '../Uds/AddrTariffType.ta';

/* START_OF_SYMBOL_DEFINITION AddrTariff */
/**
 * @summary AddrTariff
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrTariff  ::=  AddrTariffType
 * ```
 */
export type AddrTariff = AddrTariffType; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddrTariff */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrTariff */
let _cached_decoder_for_AddrTariff: $.ASN1Decoder<AddrTariff> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrTariff */

/* START_OF_SYMBOL_DEFINITION _decode_AddrTariff */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrTariff
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrTariff} The decoded data structure.
 */
export function _decode_AddrTariff(el: _Element) {
  if (!_cached_decoder_for_AddrTariff) {
    _cached_decoder_for_AddrTariff = _decode_AddrTariffType;
  }
  return _cached_decoder_for_AddrTariff(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrTariff */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrTariff */
let _cached_encoder_for_AddrTariff: $.ASN1Encoder<AddrTariff> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrTariff */

/* START_OF_SYMBOL_DEFINITION _encode_AddrTariff */
/**
 * @summary Encodes a(n) AddrTariff into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrTariff, encoded as an ASN.1 Element.
 */
export function _encode_AddrTariff(
  value: AddrTariff,
  elGetter: $.ASN1Encoder<AddrTariff>
) {
  if (!_cached_encoder_for_AddrTariff) {
    _cached_encoder_for_AddrTariff = _encode_AddrTariffType;
  }
  return _cached_encoder_for_AddrTariff(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrTariff */

/* eslint-enable */
