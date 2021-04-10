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
  AttributeType,
  _enum_for_AttributeType,
  AttributeType_country /* IMPORTED_LONG_ENUMERATION_ITEM */,
  country /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_streetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  streetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_houseId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  houseId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_givenName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  givenName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_title /* IMPORTED_LONG_ENUMERATION_ITEM */,
  title /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_description /* IMPORTED_LONG_ENUMERATION_ITEM */,
  description /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_businessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  businessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postalCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postalCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postOfficeBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postOfficeBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_dmdName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dmdName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityNDC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityNDC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberType /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_secondFamilyName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secondFamilyName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_profession /* IMPORTED_LONG_ENUMERATION_ITEM */,
  profession /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_language /* IMPORTED_LONG_ENUMERATION_ITEM */,
  language /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_telephone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  telephone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_orAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  orAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_url /* IMPORTED_LONG_ENUMERATION_ITEM */,
  url /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commService /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commService /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidFrom /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidFrom /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidUntil /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidUntil /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidity /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrCoverage /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrCoverage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrTariff /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrTariff /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeType,
  _encode_AttributeType,
} from '../Uds/AttributeType.ta';
export {
  AttributeType,
  _enum_for_AttributeType,
  AttributeType_country /* IMPORTED_LONG_ENUMERATION_ITEM */,
  country /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_streetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  streetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_houseId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  houseId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_givenName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  givenName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_title /* IMPORTED_LONG_ENUMERATION_ITEM */,
  title /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_description /* IMPORTED_LONG_ENUMERATION_ITEM */,
  description /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_businessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  businessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postalCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postalCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postOfficeBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postOfficeBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_dmdName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dmdName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityNDC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityNDC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberType /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_secondFamilyName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secondFamilyName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_profession /* IMPORTED_LONG_ENUMERATION_ITEM */,
  profession /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_language /* IMPORTED_LONG_ENUMERATION_ITEM */,
  language /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_telephone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  telephone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_orAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  orAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_url /* IMPORTED_LONG_ENUMERATION_ITEM */,
  url /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commService /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commService /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidFrom /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidFrom /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidUntil /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidUntil /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidity /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrCoverage /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrCoverage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrTariff /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrTariff /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeType,
  _encode_AttributeType,
} from '../Uds/AttributeType.ta';
import { Cor, _decode_Cor, _encode_Cor } from '../Uds/Cor.ta';
export { Cor, _decode_Cor, _encode_Cor } from '../Uds/Cor.ta';
import {
  AttributeCombinations,
  _decode_AttributeCombinations,
  _encode_AttributeCombinations,
} from '../Uds/AttributeCombinations.ta';
export {
  AttributeCombinations,
  _decode_AttributeCombinations,
  _encode_AttributeCombinations,
} from '../Uds/AttributeCombinations.ta';

/* START_OF_SYMBOL_DEFINITION Cand_Item */
/**
 * @summary Cand_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Cand-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Cand_Item =
  | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
  | { or: Cor } /* CHOICE_ALT_ROOT */
  | { not: AttributeCombinations } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Cand_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Cand_Item */
let _cached_decoder_for_Cand_Item: $.ASN1Decoder<Cand_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Cand_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Cand_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Cand_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Cand_Item} The decoded data structure.
 */
export function _decode_Cand_Item(el: _Element) {
  if (!_cached_decoder_for_Cand_Item) {
    _cached_decoder_for_Cand_Item = $._decode_inextensible_choice<Cand_Item>({
      'CONTEXT 0': ['attributeType', _decode_AttributeType],
      'CONTEXT 1': ['or', _decode_Cor],
      'CONTEXT 2': ['not', _decode_AttributeCombinations],
    });
  }
  return _cached_decoder_for_Cand_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Cand_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Cand_Item */
let _cached_encoder_for_Cand_Item: $.ASN1Encoder<Cand_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Cand_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Cand_Item */
/**
 * @summary Encodes a(n) Cand_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Cand_Item, encoded as an ASN.1 Element.
 */
export function _encode_Cand_Item(
  value: Cand_Item,
  elGetter: $.ASN1Encoder<Cand_Item>
) {
  if (!_cached_encoder_for_Cand_Item) {
    _cached_encoder_for_Cand_Item = $._encode_choice<Cand_Item>(
      {
        attributeType: _encode_AttributeType,
        or: _encode_Cor,
        not: _encode_AttributeCombinations,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Cand_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Cand_Item */

/* eslint-enable */
