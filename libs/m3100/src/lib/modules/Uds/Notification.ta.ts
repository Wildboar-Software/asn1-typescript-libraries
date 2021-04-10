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
  LimitProblem,
  _enum_for_LimitProblem,
  LimitProblem_adminLimit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  adminLimit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  LimitProblem_permanentRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permanentRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_LimitProblem,
  _encode_LimitProblem,
} from '../Uds/LimitProblem.ta';
export {
  LimitProblem,
  _enum_for_LimitProblem,
  LimitProblem_adminLimit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  adminLimit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  LimitProblem_permanentRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permanentRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_LimitProblem,
  _encode_LimitProblem,
} from '../Uds/LimitProblem.ta';
import {
  ServiceProblem,
  _enum_for_ServiceProblem,
  ServiceProblem_hierSelectForbidden /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierSelectForbidden /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ServiceProblem_hierSelectNotAvailableForService /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierSelectNotAvailableForService /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ServiceProblem_hierSelectNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierSelectNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ServiceProblem,
  _encode_ServiceProblem,
} from '../Uds/ServiceProblem.ta';
export {
  ServiceProblem,
  _enum_for_ServiceProblem,
  ServiceProblem_hierSelectForbidden /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierSelectForbidden /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ServiceProblem_hierSelectNotAvailableForService /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierSelectNotAvailableForService /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ServiceProblem_hierSelectNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierSelectNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ServiceProblem,
  _encode_ServiceProblem,
} from '../Uds/ServiceProblem.ta';
import {
  SearchType,
  _enum_for_SearchType,
  SearchType_searchForStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByEntryIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByEntryIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinCountry /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinCountry /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByCommunicationsAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByCommunicationsAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByBusinessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByBusinessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchType,
  _encode_SearchType,
} from '../Uds/SearchType.ta';
export {
  SearchType,
  _enum_for_SearchType,
  SearchType_searchForStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByEntryIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByEntryIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinCountry /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinCountry /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByCommunicationsAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByCommunicationsAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByBusinessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByBusinessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchType,
  _encode_SearchType,
} from '../Uds/SearchType.ta';
import {
  AttributeTypeList,
  _decode_AttributeTypeList,
  _encode_AttributeTypeList,
} from '../Uds/AttributeTypeList.ta';
export {
  AttributeTypeList,
  _decode_AttributeTypeList,
  _encode_AttributeTypeList,
} from '../Uds/AttributeTypeList.ta';
import {
  FilterNot,
  _decode_FilterNot,
  _encode_FilterNot,
} from '../Uds/FilterNot.ta';
export {
  FilterNot,
  _decode_FilterNot,
  _encode_FilterNot,
} from '../Uds/FilterNot.ta';
import {
  FilterItem,
  _decode_FilterItem,
  _encode_FilterItem,
} from '../Uds/FilterItem.ta';
export {
  FilterItem,
  _decode_FilterItem,
  _encode_FilterItem,
} from '../Uds/FilterItem.ta';
import {
  ProviderName,
  _decode_ProviderName,
  _encode_ProviderName,
} from '../Uds/ProviderName.ta';
export {
  ProviderName,
  _decode_ProviderName,
  _encode_ProviderName,
} from '../Uds/ProviderName.ta';
import {
  HierarchySelectList,
  _decode_HierarchySelectList,
  _encode_HierarchySelectList,
} from '../Uds/HierarchySelectList.ta';
export {
  HierarchySelectList,
  _decode_HierarchySelectList,
  _encode_HierarchySelectList,
} from '../Uds/HierarchySelectList.ta';
import {
  SearchControlOptionsList,
  _decode_SearchControlOptionsList,
  _encode_SearchControlOptionsList,
} from '../Uds/SearchControlOptionsList.ta';
export {
  SearchControlOptionsList,
  _decode_SearchControlOptionsList,
  _encode_SearchControlOptionsList,
} from '../Uds/SearchControlOptionsList.ta';
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
import {
  WordRestriction,
  _decode_WordRestriction,
  _encode_WordRestriction,
} from '../Uds/WordRestriction.ta';
export {
  WordRestriction,
  _decode_WordRestriction,
  _encode_WordRestriction,
} from '../Uds/WordRestriction.ta';
import {
  NotSupported,
  _decode_NotSupported,
  _encode_NotSupported,
} from '../Uds/NotSupported.ta';
export {
  NotSupported,
  _decode_NotSupported,
  _encode_NotSupported,
} from '../Uds/NotSupported.ta';

/* START_OF_SYMBOL_DEFINITION Notification */
/**
 * @summary Notification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Notification  ::=  CHOICE {
 *   limitProblem              LimitProblem,
 *   serviceProblem            ServiceProblem,
 *   searchType                SearchType,
 *   attributeTypeList         AttributeTypeList,
 *   filterNot                 FilterNot,
 *   filterItem                FilterItem,
 *   providerName              ProviderName,
 *   hierarchySelectList       HierarchySelectList,
 *   searchControlOptionsList  SearchControlOptionsList,
 *   attributeCombinations     AttributeCombinations,
 *   wordRestriction           WordRestriction,
 *   notSupported              NotSupported
 * }
 * ```
 */
export type Notification =
  | { limitProblem: LimitProblem } /* CHOICE_ALT_ROOT */
  | { serviceProblem: ServiceProblem } /* CHOICE_ALT_ROOT */
  | { searchType: SearchType } /* CHOICE_ALT_ROOT */
  | { attributeTypeList: AttributeTypeList } /* CHOICE_ALT_ROOT */
  | { filterNot: FilterNot } /* CHOICE_ALT_ROOT */
  | { filterItem: FilterItem } /* CHOICE_ALT_ROOT */
  | { providerName: ProviderName } /* CHOICE_ALT_ROOT */
  | { hierarchySelectList: HierarchySelectList } /* CHOICE_ALT_ROOT */
  | { searchControlOptionsList: SearchControlOptionsList } /* CHOICE_ALT_ROOT */
  | { attributeCombinations: AttributeCombinations } /* CHOICE_ALT_ROOT */
  | { wordRestriction: WordRestriction } /* CHOICE_ALT_ROOT */
  | { notSupported: NotSupported } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Notification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Notification */
let _cached_decoder_for_Notification: $.ASN1Decoder<Notification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Notification */

/* START_OF_SYMBOL_DEFINITION _decode_Notification */
/**
 * @summary Decodes an ASN.1 element into a(n) Notification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notification} The decoded data structure.
 */
export function _decode_Notification(el: _Element) {
  if (!_cached_decoder_for_Notification) {
    _cached_decoder_for_Notification = $._decode_inextensible_choice<Notification>(
      {
        'CONTEXT 0': ['limitProblem', _decode_LimitProblem],
        'CONTEXT 1': ['serviceProblem', _decode_ServiceProblem],
        'CONTEXT 2': ['searchType', _decode_SearchType],
        'CONTEXT 3': ['attributeTypeList', _decode_AttributeTypeList],
        'CONTEXT 4': ['filterNot', _decode_FilterNot],
        'CONTEXT 5': ['filterItem', _decode_FilterItem],
        'CONTEXT 6': ['providerName', _decode_ProviderName],
        'CONTEXT 7': ['hierarchySelectList', _decode_HierarchySelectList],
        'CONTEXT 8': [
          'searchControlOptionsList',
          _decode_SearchControlOptionsList,
        ],
        'CONTEXT 9': ['attributeCombinations', _decode_AttributeCombinations],
        'CONTEXT 10': ['wordRestriction', _decode_WordRestriction],
        'CONTEXT 11': ['notSupported', _decode_NotSupported],
      }
    );
  }
  return _cached_decoder_for_Notification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Notification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Notification */
let _cached_encoder_for_Notification: $.ASN1Encoder<Notification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Notification */

/* START_OF_SYMBOL_DEFINITION _encode_Notification */
/**
 * @summary Encodes a(n) Notification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notification, encoded as an ASN.1 Element.
 */
export function _encode_Notification(
  value: Notification,
  elGetter: $.ASN1Encoder<Notification>
) {
  if (!_cached_encoder_for_Notification) {
    _cached_encoder_for_Notification = $._encode_choice<Notification>(
      {
        limitProblem: _encode_LimitProblem,
        serviceProblem: _encode_ServiceProblem,
        searchType: _encode_SearchType,
        attributeTypeList: _encode_AttributeTypeList,
        filterNot: _encode_FilterNot,
        filterItem: _encode_FilterItem,
        providerName: _encode_ProviderName,
        hierarchySelectList: _encode_HierarchySelectList,
        searchControlOptionsList: _encode_SearchControlOptionsList,
        attributeCombinations: _encode_AttributeCombinations,
        wordRestriction: _encode_WordRestriction,
        notSupported: _encode_NotSupported,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Notification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Notification */

/* eslint-enable */
