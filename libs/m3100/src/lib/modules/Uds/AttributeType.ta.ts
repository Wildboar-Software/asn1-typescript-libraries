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

/* START_OF_SYMBOL_DEFINITION _enum_for_AttributeType */
/**
 * @summary AttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeType  ::=  ENUMERATED {
 *   country, locality, stateOrProvince, streetAddress, houseId, givenName,
 *   title, description, businessCategory, postalCode, postOfficeBox, dmdName,
 *   localityCode, localityNDC, subscriberName, subscriberType, secondFamilyName,
 *   profession, language, telephone, orAddress, mail, url, commService,
 *   commNetwork, addrValidFrom, addrValidUntil, addrValidity, addrCoverage,
 *   addrTariff, addrRestriction}
 * ```@enum {number}
 */
export enum _enum_for_AttributeType {
  country = 0,
  locality = 1,
  stateOrProvince = 2,
  streetAddress = 3,
  houseId = 4,
  givenName = 5,
  title = 6,
  description = 7,
  businessCategory = 8,
  postalCode = 9,
  postOfficeBox = 10,
  dmdName = 11,
  localityCode = 12,
  localityNDC = 13,
  subscriberName = 14,
  subscriberType = 15,
  secondFamilyName = 16,
  profession = 17,
  language = 18,
  telephone = 19,
  orAddress = 20,
  mail = 21,
  url = 22,
  commService = 23,
  commNetwork = 24,
  addrValidFrom = 25,
  addrValidUntil = 26,
  addrValidity = 27,
  addrCoverage = 28,
  addrTariff = 29,
  addrRestriction = 30,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AttributeType */

/* START_OF_SYMBOL_DEFINITION AttributeType */
/**
 * @summary AttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeType  ::=  ENUMERATED {
 *   country, locality, stateOrProvince, streetAddress, houseId, givenName,
 *   title, description, businessCategory, postalCode, postOfficeBox, dmdName,
 *   localityCode, localityNDC, subscriberName, subscriberType, secondFamilyName,
 *   profession, language, telephone, orAddress, mail, url, commService,
 *   commNetwork, addrValidFrom, addrValidUntil, addrValidity, addrCoverage,
 *   addrTariff, addrRestriction}
 * ```@enum {number}
 */
export type AttributeType = _enum_for_AttributeType;
/* END_OF_SYMBOL_DEFINITION AttributeType */

/* START_OF_SYMBOL_DEFINITION AttributeType */
/**
 * @summary AttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeType  ::=  ENUMERATED {
 *   country, locality, stateOrProvince, streetAddress, houseId, givenName,
 *   title, description, businessCategory, postalCode, postOfficeBox, dmdName,
 *   localityCode, localityNDC, subscriberName, subscriberType, secondFamilyName,
 *   profession, language, telephone, orAddress, mail, url, commService,
 *   commNetwork, addrValidFrom, addrValidUntil, addrValidity, addrCoverage,
 *   addrTariff, addrRestriction}
 * ```@enum {number}
 */
export const AttributeType = _enum_for_AttributeType;
/* END_OF_SYMBOL_DEFINITION AttributeType */

/* START_OF_SYMBOL_DEFINITION AttributeType_country */
/**
 * @summary AttributeType_country
 * @constant
 * @type {number}
 */
export const AttributeType_country: AttributeType =
  AttributeType.country; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_country */

/* START_OF_SYMBOL_DEFINITION country */
/**
 * @summary country
 * @constant
 * @type {number}
 */
export const country: AttributeType =
  AttributeType.country; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION country */

/* START_OF_SYMBOL_DEFINITION AttributeType_locality */
/**
 * @summary AttributeType_locality
 * @constant
 * @type {number}
 */
export const AttributeType_locality: AttributeType =
  AttributeType.locality; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_locality */

/* START_OF_SYMBOL_DEFINITION locality */
/**
 * @summary locality
 * @constant
 * @type {number}
 */
export const locality: AttributeType =
  AttributeType.locality; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION locality */

/* START_OF_SYMBOL_DEFINITION AttributeType_stateOrProvince */
/**
 * @summary AttributeType_stateOrProvince
 * @constant
 * @type {number}
 */
export const AttributeType_stateOrProvince: AttributeType =
  AttributeType.stateOrProvince; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_stateOrProvince */

/* START_OF_SYMBOL_DEFINITION stateOrProvince */
/**
 * @summary stateOrProvince
 * @constant
 * @type {number}
 */
export const stateOrProvince: AttributeType =
  AttributeType.stateOrProvince; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION stateOrProvince */

/* START_OF_SYMBOL_DEFINITION AttributeType_streetAddress */
/**
 * @summary AttributeType_streetAddress
 * @constant
 * @type {number}
 */
export const AttributeType_streetAddress: AttributeType =
  AttributeType.streetAddress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_streetAddress */

/* START_OF_SYMBOL_DEFINITION streetAddress */
/**
 * @summary streetAddress
 * @constant
 * @type {number}
 */
export const streetAddress: AttributeType =
  AttributeType.streetAddress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION streetAddress */

/* START_OF_SYMBOL_DEFINITION AttributeType_houseId */
/**
 * @summary AttributeType_houseId
 * @constant
 * @type {number}
 */
export const AttributeType_houseId: AttributeType =
  AttributeType.houseId; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_houseId */

/* START_OF_SYMBOL_DEFINITION houseId */
/**
 * @summary houseId
 * @constant
 * @type {number}
 */
export const houseId: AttributeType =
  AttributeType.houseId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION houseId */

/* START_OF_SYMBOL_DEFINITION AttributeType_givenName */
/**
 * @summary AttributeType_givenName
 * @constant
 * @type {number}
 */
export const AttributeType_givenName: AttributeType =
  AttributeType.givenName; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_givenName */

/* START_OF_SYMBOL_DEFINITION givenName */
/**
 * @summary givenName
 * @constant
 * @type {number}
 */
export const givenName: AttributeType =
  AttributeType.givenName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION givenName */

/* START_OF_SYMBOL_DEFINITION AttributeType_title */
/**
 * @summary AttributeType_title
 * @constant
 * @type {number}
 */
export const AttributeType_title: AttributeType =
  AttributeType.title; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_title */

/* START_OF_SYMBOL_DEFINITION title */
/**
 * @summary title
 * @constant
 * @type {number}
 */
export const title: AttributeType =
  AttributeType.title; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION title */

/* START_OF_SYMBOL_DEFINITION AttributeType_description */
/**
 * @summary AttributeType_description
 * @constant
 * @type {number}
 */
export const AttributeType_description: AttributeType =
  AttributeType.description; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_description */

/* START_OF_SYMBOL_DEFINITION description */
/**
 * @summary description
 * @constant
 * @type {number}
 */
export const description: AttributeType =
  AttributeType.description; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION description */

/* START_OF_SYMBOL_DEFINITION AttributeType_businessCategory */
/**
 * @summary AttributeType_businessCategory
 * @constant
 * @type {number}
 */
export const AttributeType_businessCategory: AttributeType =
  AttributeType.businessCategory; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_businessCategory */

/* START_OF_SYMBOL_DEFINITION businessCategory */
/**
 * @summary businessCategory
 * @constant
 * @type {number}
 */
export const businessCategory: AttributeType =
  AttributeType.businessCategory; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION businessCategory */

/* START_OF_SYMBOL_DEFINITION AttributeType_postalCode */
/**
 * @summary AttributeType_postalCode
 * @constant
 * @type {number}
 */
export const AttributeType_postalCode: AttributeType =
  AttributeType.postalCode; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_postalCode */

/* START_OF_SYMBOL_DEFINITION postalCode */
/**
 * @summary postalCode
 * @constant
 * @type {number}
 */
export const postalCode: AttributeType =
  AttributeType.postalCode; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION postalCode */

/* START_OF_SYMBOL_DEFINITION AttributeType_postOfficeBox */
/**
 * @summary AttributeType_postOfficeBox
 * @constant
 * @type {number}
 */
export const AttributeType_postOfficeBox: AttributeType =
  AttributeType.postOfficeBox; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_postOfficeBox */

/* START_OF_SYMBOL_DEFINITION postOfficeBox */
/**
 * @summary postOfficeBox
 * @constant
 * @type {number}
 */
export const postOfficeBox: AttributeType =
  AttributeType.postOfficeBox; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION postOfficeBox */

/* START_OF_SYMBOL_DEFINITION AttributeType_dmdName */
/**
 * @summary AttributeType_dmdName
 * @constant
 * @type {number}
 */
export const AttributeType_dmdName: AttributeType =
  AttributeType.dmdName; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_dmdName */

/* START_OF_SYMBOL_DEFINITION dmdName */
/**
 * @summary dmdName
 * @constant
 * @type {number}
 */
export const dmdName: AttributeType =
  AttributeType.dmdName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dmdName */

/* START_OF_SYMBOL_DEFINITION AttributeType_localityCode */
/**
 * @summary AttributeType_localityCode
 * @constant
 * @type {number}
 */
export const AttributeType_localityCode: AttributeType =
  AttributeType.localityCode; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_localityCode */

/* START_OF_SYMBOL_DEFINITION localityCode */
/**
 * @summary localityCode
 * @constant
 * @type {number}
 */
export const localityCode: AttributeType =
  AttributeType.localityCode; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION localityCode */

/* START_OF_SYMBOL_DEFINITION AttributeType_localityNDC */
/**
 * @summary AttributeType_localityNDC
 * @constant
 * @type {number}
 */
export const AttributeType_localityNDC: AttributeType =
  AttributeType.localityNDC; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_localityNDC */

/* START_OF_SYMBOL_DEFINITION localityNDC */
/**
 * @summary localityNDC
 * @constant
 * @type {number}
 */
export const localityNDC: AttributeType =
  AttributeType.localityNDC; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION localityNDC */

/* START_OF_SYMBOL_DEFINITION AttributeType_subscriberName */
/**
 * @summary AttributeType_subscriberName
 * @constant
 * @type {number}
 */
export const AttributeType_subscriberName: AttributeType =
  AttributeType.subscriberName; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_subscriberName */

/* START_OF_SYMBOL_DEFINITION subscriberName */
/**
 * @summary subscriberName
 * @constant
 * @type {number}
 */
export const subscriberName: AttributeType =
  AttributeType.subscriberName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberName */

/* START_OF_SYMBOL_DEFINITION AttributeType_subscriberType */
/**
 * @summary AttributeType_subscriberType
 * @constant
 * @type {number}
 */
export const AttributeType_subscriberType: AttributeType =
  AttributeType.subscriberType; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_subscriberType */

/* START_OF_SYMBOL_DEFINITION subscriberType */
/**
 * @summary subscriberType
 * @constant
 * @type {number}
 */
export const subscriberType: AttributeType =
  AttributeType.subscriberType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberType */

/* START_OF_SYMBOL_DEFINITION AttributeType_secondFamilyName */
/**
 * @summary AttributeType_secondFamilyName
 * @constant
 * @type {number}
 */
export const AttributeType_secondFamilyName: AttributeType =
  AttributeType.secondFamilyName; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_secondFamilyName */

/* START_OF_SYMBOL_DEFINITION secondFamilyName */
/**
 * @summary secondFamilyName
 * @constant
 * @type {number}
 */
export const secondFamilyName: AttributeType =
  AttributeType.secondFamilyName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION secondFamilyName */

/* START_OF_SYMBOL_DEFINITION AttributeType_profession */
/**
 * @summary AttributeType_profession
 * @constant
 * @type {number}
 */
export const AttributeType_profession: AttributeType =
  AttributeType.profession; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_profession */

/* START_OF_SYMBOL_DEFINITION profession */
/**
 * @summary profession
 * @constant
 * @type {number}
 */
export const profession: AttributeType =
  AttributeType.profession; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION profession */

/* START_OF_SYMBOL_DEFINITION AttributeType_language */
/**
 * @summary AttributeType_language
 * @constant
 * @type {number}
 */
export const AttributeType_language: AttributeType =
  AttributeType.language; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_language */

/* START_OF_SYMBOL_DEFINITION language */
/**
 * @summary language
 * @constant
 * @type {number}
 */
export const language: AttributeType =
  AttributeType.language; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION language */

/* START_OF_SYMBOL_DEFINITION AttributeType_telephone */
/**
 * @summary AttributeType_telephone
 * @constant
 * @type {number}
 */
export const AttributeType_telephone: AttributeType =
  AttributeType.telephone; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_telephone */

/* START_OF_SYMBOL_DEFINITION telephone */
/**
 * @summary telephone
 * @constant
 * @type {number}
 */
export const telephone: AttributeType =
  AttributeType.telephone; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION telephone */

/* START_OF_SYMBOL_DEFINITION AttributeType_orAddress */
/**
 * @summary AttributeType_orAddress
 * @constant
 * @type {number}
 */
export const AttributeType_orAddress: AttributeType =
  AttributeType.orAddress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_orAddress */

/* START_OF_SYMBOL_DEFINITION orAddress */
/**
 * @summary orAddress
 * @constant
 * @type {number}
 */
export const orAddress: AttributeType =
  AttributeType.orAddress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION orAddress */

/* START_OF_SYMBOL_DEFINITION AttributeType_mail */
/**
 * @summary AttributeType_mail
 * @constant
 * @type {number}
 */
export const AttributeType_mail: AttributeType =
  AttributeType.mail; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_mail */

/* START_OF_SYMBOL_DEFINITION mail */
/**
 * @summary mail
 * @constant
 * @type {number}
 */
export const mail: AttributeType =
  AttributeType.mail; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mail */

/* START_OF_SYMBOL_DEFINITION AttributeType_url */
/**
 * @summary AttributeType_url
 * @constant
 * @type {number}
 */
export const AttributeType_url: AttributeType =
  AttributeType.url; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_url */

/* START_OF_SYMBOL_DEFINITION url */
/**
 * @summary url
 * @constant
 * @type {number}
 */
export const url: AttributeType =
  AttributeType.url; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION url */

/* START_OF_SYMBOL_DEFINITION AttributeType_commService */
/**
 * @summary AttributeType_commService
 * @constant
 * @type {number}
 */
export const AttributeType_commService: AttributeType =
  AttributeType.commService; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_commService */

/* START_OF_SYMBOL_DEFINITION commService */
/**
 * @summary commService
 * @constant
 * @type {number}
 */
export const commService: AttributeType =
  AttributeType.commService; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION commService */

/* START_OF_SYMBOL_DEFINITION AttributeType_commNetwork */
/**
 * @summary AttributeType_commNetwork
 * @constant
 * @type {number}
 */
export const AttributeType_commNetwork: AttributeType =
  AttributeType.commNetwork; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_commNetwork */

/* START_OF_SYMBOL_DEFINITION commNetwork */
/**
 * @summary commNetwork
 * @constant
 * @type {number}
 */
export const commNetwork: AttributeType =
  AttributeType.commNetwork; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION commNetwork */

/* START_OF_SYMBOL_DEFINITION AttributeType_addrValidFrom */
/**
 * @summary AttributeType_addrValidFrom
 * @constant
 * @type {number}
 */
export const AttributeType_addrValidFrom: AttributeType =
  AttributeType.addrValidFrom; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_addrValidFrom */

/* START_OF_SYMBOL_DEFINITION addrValidFrom */
/**
 * @summary addrValidFrom
 * @constant
 * @type {number}
 */
export const addrValidFrom: AttributeType =
  AttributeType.addrValidFrom; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION addrValidFrom */

/* START_OF_SYMBOL_DEFINITION AttributeType_addrValidUntil */
/**
 * @summary AttributeType_addrValidUntil
 * @constant
 * @type {number}
 */
export const AttributeType_addrValidUntil: AttributeType =
  AttributeType.addrValidUntil; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_addrValidUntil */

/* START_OF_SYMBOL_DEFINITION addrValidUntil */
/**
 * @summary addrValidUntil
 * @constant
 * @type {number}
 */
export const addrValidUntil: AttributeType =
  AttributeType.addrValidUntil; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION addrValidUntil */

/* START_OF_SYMBOL_DEFINITION AttributeType_addrValidity */
/**
 * @summary AttributeType_addrValidity
 * @constant
 * @type {number}
 */
export const AttributeType_addrValidity: AttributeType =
  AttributeType.addrValidity; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_addrValidity */

/* START_OF_SYMBOL_DEFINITION addrValidity */
/**
 * @summary addrValidity
 * @constant
 * @type {number}
 */
export const addrValidity: AttributeType =
  AttributeType.addrValidity; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION addrValidity */

/* START_OF_SYMBOL_DEFINITION AttributeType_addrCoverage */
/**
 * @summary AttributeType_addrCoverage
 * @constant
 * @type {number}
 */
export const AttributeType_addrCoverage: AttributeType =
  AttributeType.addrCoverage; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_addrCoverage */

/* START_OF_SYMBOL_DEFINITION addrCoverage */
/**
 * @summary addrCoverage
 * @constant
 * @type {number}
 */
export const addrCoverage: AttributeType =
  AttributeType.addrCoverage; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION addrCoverage */

/* START_OF_SYMBOL_DEFINITION AttributeType_addrTariff */
/**
 * @summary AttributeType_addrTariff
 * @constant
 * @type {number}
 */
export const AttributeType_addrTariff: AttributeType =
  AttributeType.addrTariff; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_addrTariff */

/* START_OF_SYMBOL_DEFINITION addrTariff */
/**
 * @summary addrTariff
 * @constant
 * @type {number}
 */
export const addrTariff: AttributeType =
  AttributeType.addrTariff; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION addrTariff */

/* START_OF_SYMBOL_DEFINITION AttributeType_addrRestriction */
/**
 * @summary AttributeType_addrRestriction
 * @constant
 * @type {number}
 */
export const AttributeType_addrRestriction: AttributeType =
  AttributeType.addrRestriction; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeType_addrRestriction */

/* START_OF_SYMBOL_DEFINITION addrRestriction */
/**
 * @summary addrRestriction
 * @constant
 * @type {number}
 */
export const addrRestriction: AttributeType =
  AttributeType.addrRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION addrRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeType */
let _cached_decoder_for_AttributeType: $.ASN1Decoder<AttributeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeType */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeType */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeType} The decoded data structure.
 */
export function _decode_AttributeType(el: _Element) {
  if (!_cached_decoder_for_AttributeType) {
    _cached_decoder_for_AttributeType = $._decodeEnumerated;
  }
  return _cached_decoder_for_AttributeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeType */
let _cached_encoder_for_AttributeType: $.ASN1Encoder<AttributeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeType */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeType */
/**
 * @summary Encodes a(n) AttributeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeType, encoded as an ASN.1 Element.
 */
export function _encode_AttributeType(
  value: AttributeType,
  elGetter: $.ASN1Encoder<AttributeType>
) {
  if (!_cached_encoder_for_AttributeType) {
    _cached_encoder_for_AttributeType = $._encodeEnumerated;
  }
  return _cached_encoder_for_AttributeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeType */

/* eslint-enable */
