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

/* START_OF_SYMBOL_DEFINITION _enum_for_SearchType */
/**
 * @summary SearchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchType  ::=  ENUMERATED {
 *   searchForStateOrProvince, searchForLocality, subscriberWithinLocality,
 *   subscriberByEntryIdentifier, subscriberWithinStateOrProvince,
 *   subscriberWithinCountry, searchForStreetAddress, subscriberByStreetAddress,
 *   subscriberByCommunicationsAddress, subscriberByBusinessCategory}
 * ```@enum {number}
 */
export enum _enum_for_SearchType {
  searchForStateOrProvince = 0,
  searchForLocality = 1,
  subscriberWithinLocality = 2,
  subscriberByEntryIdentifier = 3,
  subscriberWithinStateOrProvince = 4,
  subscriberWithinCountry = 5,
  searchForStreetAddress = 6,
  subscriberByStreetAddress = 7,
  subscriberByCommunicationsAddress = 8,
  subscriberByBusinessCategory = 9,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SearchType */

/* START_OF_SYMBOL_DEFINITION SearchType */
/**
 * @summary SearchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchType  ::=  ENUMERATED {
 *   searchForStateOrProvince, searchForLocality, subscriberWithinLocality,
 *   subscriberByEntryIdentifier, subscriberWithinStateOrProvince,
 *   subscriberWithinCountry, searchForStreetAddress, subscriberByStreetAddress,
 *   subscriberByCommunicationsAddress, subscriberByBusinessCategory}
 * ```@enum {number}
 */
export type SearchType = _enum_for_SearchType;
/* END_OF_SYMBOL_DEFINITION SearchType */

/* START_OF_SYMBOL_DEFINITION SearchType */
/**
 * @summary SearchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchType  ::=  ENUMERATED {
 *   searchForStateOrProvince, searchForLocality, subscriberWithinLocality,
 *   subscriberByEntryIdentifier, subscriberWithinStateOrProvince,
 *   subscriberWithinCountry, searchForStreetAddress, subscriberByStreetAddress,
 *   subscriberByCommunicationsAddress, subscriberByBusinessCategory}
 * ```@enum {number}
 */
export const SearchType = _enum_for_SearchType;
/* END_OF_SYMBOL_DEFINITION SearchType */

/* START_OF_SYMBOL_DEFINITION SearchType_searchForStateOrProvince */
/**
 * @summary SearchType_searchForStateOrProvince
 * @constant
 * @type {number}
 */
export const SearchType_searchForStateOrProvince: SearchType =
  SearchType.searchForStateOrProvince; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_searchForStateOrProvince */

/* START_OF_SYMBOL_DEFINITION searchForStateOrProvince */
/**
 * @summary searchForStateOrProvince
 * @constant
 * @type {number}
 */
export const searchForStateOrProvince: SearchType =
  SearchType.searchForStateOrProvince; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION searchForStateOrProvince */

/* START_OF_SYMBOL_DEFINITION SearchType_searchForLocality */
/**
 * @summary SearchType_searchForLocality
 * @constant
 * @type {number}
 */
export const SearchType_searchForLocality: SearchType =
  SearchType.searchForLocality; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_searchForLocality */

/* START_OF_SYMBOL_DEFINITION searchForLocality */
/**
 * @summary searchForLocality
 * @constant
 * @type {number}
 */
export const searchForLocality: SearchType =
  SearchType.searchForLocality; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION searchForLocality */

/* START_OF_SYMBOL_DEFINITION SearchType_subscriberWithinLocality */
/**
 * @summary SearchType_subscriberWithinLocality
 * @constant
 * @type {number}
 */
export const SearchType_subscriberWithinLocality: SearchType =
  SearchType.subscriberWithinLocality; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_subscriberWithinLocality */

/* START_OF_SYMBOL_DEFINITION subscriberWithinLocality */
/**
 * @summary subscriberWithinLocality
 * @constant
 * @type {number}
 */
export const subscriberWithinLocality: SearchType =
  SearchType.subscriberWithinLocality; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberWithinLocality */

/* START_OF_SYMBOL_DEFINITION SearchType_subscriberByEntryIdentifier */
/**
 * @summary SearchType_subscriberByEntryIdentifier
 * @constant
 * @type {number}
 */
export const SearchType_subscriberByEntryIdentifier: SearchType =
  SearchType.subscriberByEntryIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_subscriberByEntryIdentifier */

/* START_OF_SYMBOL_DEFINITION subscriberByEntryIdentifier */
/**
 * @summary subscriberByEntryIdentifier
 * @constant
 * @type {number}
 */
export const subscriberByEntryIdentifier: SearchType =
  SearchType.subscriberByEntryIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberByEntryIdentifier */

/* START_OF_SYMBOL_DEFINITION SearchType_subscriberWithinStateOrProvince */
/**
 * @summary SearchType_subscriberWithinStateOrProvince
 * @constant
 * @type {number}
 */
export const SearchType_subscriberWithinStateOrProvince: SearchType =
  SearchType.subscriberWithinStateOrProvince; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_subscriberWithinStateOrProvince */

/* START_OF_SYMBOL_DEFINITION subscriberWithinStateOrProvince */
/**
 * @summary subscriberWithinStateOrProvince
 * @constant
 * @type {number}
 */
export const subscriberWithinStateOrProvince: SearchType =
  SearchType.subscriberWithinStateOrProvince; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberWithinStateOrProvince */

/* START_OF_SYMBOL_DEFINITION SearchType_subscriberWithinCountry */
/**
 * @summary SearchType_subscriberWithinCountry
 * @constant
 * @type {number}
 */
export const SearchType_subscriberWithinCountry: SearchType =
  SearchType.subscriberWithinCountry; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_subscriberWithinCountry */

/* START_OF_SYMBOL_DEFINITION subscriberWithinCountry */
/**
 * @summary subscriberWithinCountry
 * @constant
 * @type {number}
 */
export const subscriberWithinCountry: SearchType =
  SearchType.subscriberWithinCountry; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberWithinCountry */

/* START_OF_SYMBOL_DEFINITION SearchType_searchForStreetAddress */
/**
 * @summary SearchType_searchForStreetAddress
 * @constant
 * @type {number}
 */
export const SearchType_searchForStreetAddress: SearchType =
  SearchType.searchForStreetAddress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_searchForStreetAddress */

/* START_OF_SYMBOL_DEFINITION searchForStreetAddress */
/**
 * @summary searchForStreetAddress
 * @constant
 * @type {number}
 */
export const searchForStreetAddress: SearchType =
  SearchType.searchForStreetAddress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION searchForStreetAddress */

/* START_OF_SYMBOL_DEFINITION SearchType_subscriberByStreetAddress */
/**
 * @summary SearchType_subscriberByStreetAddress
 * @constant
 * @type {number}
 */
export const SearchType_subscriberByStreetAddress: SearchType =
  SearchType.subscriberByStreetAddress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_subscriberByStreetAddress */

/* START_OF_SYMBOL_DEFINITION subscriberByStreetAddress */
/**
 * @summary subscriberByStreetAddress
 * @constant
 * @type {number}
 */
export const subscriberByStreetAddress: SearchType =
  SearchType.subscriberByStreetAddress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberByStreetAddress */

/* START_OF_SYMBOL_DEFINITION SearchType_subscriberByCommunicationsAddress */
/**
 * @summary SearchType_subscriberByCommunicationsAddress
 * @constant
 * @type {number}
 */
export const SearchType_subscriberByCommunicationsAddress: SearchType =
  SearchType.subscriberByCommunicationsAddress; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_subscriberByCommunicationsAddress */

/* START_OF_SYMBOL_DEFINITION subscriberByCommunicationsAddress */
/**
 * @summary subscriberByCommunicationsAddress
 * @constant
 * @type {number}
 */
export const subscriberByCommunicationsAddress: SearchType =
  SearchType.subscriberByCommunicationsAddress; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberByCommunicationsAddress */

/* START_OF_SYMBOL_DEFINITION SearchType_subscriberByBusinessCategory */
/**
 * @summary SearchType_subscriberByBusinessCategory
 * @constant
 * @type {number}
 */
export const SearchType_subscriberByBusinessCategory: SearchType =
  SearchType.subscriberByBusinessCategory; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchType_subscriberByBusinessCategory */

/* START_OF_SYMBOL_DEFINITION subscriberByBusinessCategory */
/**
 * @summary subscriberByBusinessCategory
 * @constant
 * @type {number}
 */
export const subscriberByBusinessCategory: SearchType =
  SearchType.subscriberByBusinessCategory; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subscriberByBusinessCategory */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchType */
let _cached_decoder_for_SearchType: $.ASN1Decoder<SearchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchType */

/* START_OF_SYMBOL_DEFINITION _decode_SearchType */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchType} The decoded data structure.
 */
export function _decode_SearchType(el: _Element) {
  if (!_cached_decoder_for_SearchType) {
    _cached_decoder_for_SearchType = $._decodeEnumerated;
  }
  return _cached_decoder_for_SearchType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchType */
let _cached_encoder_for_SearchType: $.ASN1Encoder<SearchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchType */

/* START_OF_SYMBOL_DEFINITION _encode_SearchType */
/**
 * @summary Encodes a(n) SearchType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchType, encoded as an ASN.1 Element.
 */
export function _encode_SearchType(
  value: SearchType,
  elGetter: $.ASN1Encoder<SearchType>
) {
  if (!_cached_encoder_for_SearchType) {
    _cached_encoder_for_SearchType = $._encodeEnumerated;
  }
  return _cached_encoder_for_SearchType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchType */

/* eslint-enable */
