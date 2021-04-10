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
import { Country, _decode_Country, _encode_Country } from '../Uds/Country.ta';
export { Country, _decode_Country, _encode_Country } from '../Uds/Country.ta';
import {
  Locality,
  _decode_Locality,
  _encode_Locality,
} from '../Uds/Locality.ta';
export {
  Locality,
  _decode_Locality,
  _encode_Locality,
} from '../Uds/Locality.ta';
import {
  StateOrProvince,
  _decode_StateOrProvince,
  _encode_StateOrProvince,
} from '../Uds/StateOrProvince.ta';
export {
  StateOrProvince,
  _decode_StateOrProvince,
  _encode_StateOrProvince,
} from '../Uds/StateOrProvince.ta';
import {
  StreetAddress,
  _decode_StreetAddress,
  _encode_StreetAddress,
} from '../Uds/StreetAddress.ta';
export {
  StreetAddress,
  _decode_StreetAddress,
  _encode_StreetAddress,
} from '../Uds/StreetAddress.ta';
import { HouseId, _decode_HouseId, _encode_HouseId } from '../Uds/HouseId.ta';
export { HouseId, _decode_HouseId, _encode_HouseId } from '../Uds/HouseId.ta';
import {
  GivenName,
  _decode_GivenName,
  _encode_GivenName,
} from '../Uds/GivenName.ta';
export {
  GivenName,
  _decode_GivenName,
  _encode_GivenName,
} from '../Uds/GivenName.ta';
import { Title, _decode_Title, _encode_Title } from '../Uds/Title.ta';
export { Title, _decode_Title, _encode_Title } from '../Uds/Title.ta';
import {
  Description,
  _decode_Description,
  _encode_Description,
} from '../Uds/Description.ta';
export {
  Description,
  _decode_Description,
  _encode_Description,
} from '../Uds/Description.ta';
import {
  BusinessCategory,
  _decode_BusinessCategory,
  _encode_BusinessCategory,
} from '../Uds/BusinessCategory.ta';
export {
  BusinessCategory,
  _decode_BusinessCategory,
  _encode_BusinessCategory,
} from '../Uds/BusinessCategory.ta';
import {
  PostalCode,
  _decode_PostalCode,
  _encode_PostalCode,
} from '../Uds/PostalCode.ta';
export {
  PostalCode,
  _decode_PostalCode,
  _encode_PostalCode,
} from '../Uds/PostalCode.ta';
import {
  PostOfficeBox,
  _decode_PostOfficeBox,
  _encode_PostOfficeBox,
} from '../Uds/PostOfficeBox.ta';
export {
  PostOfficeBox,
  _decode_PostOfficeBox,
  _encode_PostOfficeBox,
} from '../Uds/PostOfficeBox.ta';
import { DmdName, _decode_DmdName, _encode_DmdName } from '../Uds/DmdName.ta';
export { DmdName, _decode_DmdName, _encode_DmdName } from '../Uds/DmdName.ta';
import {
  LocalityCode,
  _decode_LocalityCode,
  _encode_LocalityCode,
} from '../Uds/LocalityCode.ta';
export {
  LocalityCode,
  _decode_LocalityCode,
  _encode_LocalityCode,
} from '../Uds/LocalityCode.ta';
import {
  LocalityNDC,
  _decode_LocalityNDC,
  _encode_LocalityNDC,
} from '../Uds/LocalityNDC.ta';
export {
  LocalityNDC,
  _decode_LocalityNDC,
  _encode_LocalityNDC,
} from '../Uds/LocalityNDC.ta';
import {
  SubscriberName,
  _decode_SubscriberName,
  _encode_SubscriberName,
} from '../Uds/SubscriberName.ta';
export {
  SubscriberName,
  _decode_SubscriberName,
  _encode_SubscriberName,
} from '../Uds/SubscriberName.ta';
import {
  SubscriberType,
  _decode_SubscriberType,
  _encode_SubscriberType,
} from '../Uds/SubscriberType.ta';
export {
  SubscriberType,
  _decode_SubscriberType,
  _encode_SubscriberType,
} from '../Uds/SubscriberType.ta';
import {
  SecondFamilyName,
  _decode_SecondFamilyName,
  _encode_SecondFamilyName,
} from '../Uds/SecondFamilyName.ta';
export {
  SecondFamilyName,
  _decode_SecondFamilyName,
  _encode_SecondFamilyName,
} from '../Uds/SecondFamilyName.ta';
import {
  Profession,
  _decode_Profession,
  _encode_Profession,
} from '../Uds/Profession.ta';
export {
  Profession,
  _decode_Profession,
  _encode_Profession,
} from '../Uds/Profession.ta';
import {
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta';
export {
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta';
import {
  Telephone,
  _decode_Telephone,
  _encode_Telephone,
} from '../Uds/Telephone.ta';
export {
  Telephone,
  _decode_Telephone,
  _encode_Telephone,
} from '../Uds/Telephone.ta';
import {
  OrAddress,
  _decode_OrAddress,
  _encode_OrAddress,
} from '../Uds/OrAddress.ta';
export {
  OrAddress,
  _decode_OrAddress,
  _encode_OrAddress,
} from '../Uds/OrAddress.ta';
import { Mail, _decode_Mail, _encode_Mail } from '../Uds/Mail.ta';
export { Mail, _decode_Mail, _encode_Mail } from '../Uds/Mail.ta';
import { Url, _decode_Url, _encode_Url } from '../Uds/Url.ta';
export { Url, _decode_Url, _encode_Url } from '../Uds/Url.ta';
import {
  CommService,
  _decode_CommService,
  _encode_CommService,
} from '../Uds/CommService.ta';
export {
  CommService,
  _decode_CommService,
  _encode_CommService,
} from '../Uds/CommService.ta';
import {
  CommNetwork,
  _decode_CommNetwork,
  _encode_CommNetwork,
} from '../Uds/CommNetwork.ta';
export {
  CommNetwork,
  _decode_CommNetwork,
  _encode_CommNetwork,
} from '../Uds/CommNetwork.ta';
import {
  AddrValidFrom,
  _decode_AddrValidFrom,
  _encode_AddrValidFrom,
} from '../Uds/AddrValidFrom.ta';
export {
  AddrValidFrom,
  _decode_AddrValidFrom,
  _encode_AddrValidFrom,
} from '../Uds/AddrValidFrom.ta';
import {
  AddrValidUntil,
  _decode_AddrValidUntil,
  _encode_AddrValidUntil,
} from '../Uds/AddrValidUntil.ta';
export {
  AddrValidUntil,
  _decode_AddrValidUntil,
  _encode_AddrValidUntil,
} from '../Uds/AddrValidUntil.ta';
import {
  AddrValidity,
  _decode_AddrValidity,
  _encode_AddrValidity,
} from '../Uds/AddrValidity.ta';
export {
  AddrValidity,
  _decode_AddrValidity,
  _encode_AddrValidity,
} from '../Uds/AddrValidity.ta';
import {
  AddrCoverage,
  _decode_AddrCoverage,
  _encode_AddrCoverage,
} from '../Uds/AddrCoverage.ta';
export {
  AddrCoverage,
  _decode_AddrCoverage,
  _encode_AddrCoverage,
} from '../Uds/AddrCoverage.ta';
import {
  AddrTariff,
  _decode_AddrTariff,
  _encode_AddrTariff,
} from '../Uds/AddrTariff.ta';
export {
  AddrTariff,
  _decode_AddrTariff,
  _encode_AddrTariff,
} from '../Uds/AddrTariff.ta';
import {
  AddrRestriction,
  _decode_AddrRestriction,
  _encode_AddrRestriction,
} from '../Uds/AddrRestriction.ta';
export {
  AddrRestriction,
  _decode_AddrRestriction,
  _encode_AddrRestriction,
} from '../Uds/AddrRestriction.ta';

/* START_OF_SYMBOL_DEFINITION Attribute */
/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute  ::=  CHOICE {
 *   country           Country,
 *   locality          Locality,
 *   stateOrProvince   StateOrProvince,
 *   streetAddress     StreetAddress,
 *   houseId           HouseId,
 *   givenName         GivenName,
 *   title             Title,
 *   description       Description,
 *   businessCategory  BusinessCategory,
 *   postalCode        PostalCode,
 *   postOfficeBox     PostOfficeBox,
 *   dmdName           DmdName,
 *   localityCode      LocalityCode,
 *   localityNDC       LocalityNDC,
 *   subscriberName    SubscriberName,
 *   subscriberType    SubscriberType,
 *   secondFamilyName  SecondFamilyName,
 *   profession        Profession,
 *   language          Language,
 *   telephone         Telephone,
 *   orAddress         OrAddress,
 *   mail              Mail,
 *   url               Url,
 *   commService       CommService,
 *   commNetwork       CommNetwork,
 *   addrValidFrom     AddrValidFrom,
 *   addrValidUntil    AddrValidUntil,
 *   addrValidity      AddrValidity,
 *   addrCoverage      AddrCoverage,
 *   addrTariff        AddrTariff,
 *   addrRestriction   AddrRestriction
 * }
 * ```
 */
export type Attribute =
  | { country: Country } /* CHOICE_ALT_ROOT */
  | { locality: Locality } /* CHOICE_ALT_ROOT */
  | { stateOrProvince: StateOrProvince } /* CHOICE_ALT_ROOT */
  | { streetAddress: StreetAddress } /* CHOICE_ALT_ROOT */
  | { houseId: HouseId } /* CHOICE_ALT_ROOT */
  | { givenName: GivenName } /* CHOICE_ALT_ROOT */
  | { title: Title } /* CHOICE_ALT_ROOT */
  | { description: Description } /* CHOICE_ALT_ROOT */
  | { businessCategory: BusinessCategory } /* CHOICE_ALT_ROOT */
  | { postalCode: PostalCode } /* CHOICE_ALT_ROOT */
  | { postOfficeBox: PostOfficeBox } /* CHOICE_ALT_ROOT */
  | { dmdName: DmdName } /* CHOICE_ALT_ROOT */
  | { localityCode: LocalityCode } /* CHOICE_ALT_ROOT */
  | { localityNDC: LocalityNDC } /* CHOICE_ALT_ROOT */
  | { subscriberName: SubscriberName } /* CHOICE_ALT_ROOT */
  | { subscriberType: SubscriberType } /* CHOICE_ALT_ROOT */
  | { secondFamilyName: SecondFamilyName } /* CHOICE_ALT_ROOT */
  | { profession: Profession } /* CHOICE_ALT_ROOT */
  | { language: Language } /* CHOICE_ALT_ROOT */
  | { telephone: Telephone } /* CHOICE_ALT_ROOT */
  | { orAddress: OrAddress } /* CHOICE_ALT_ROOT */
  | { mail: Mail } /* CHOICE_ALT_ROOT */
  | { url: Url } /* CHOICE_ALT_ROOT */
  | { commService: CommService } /* CHOICE_ALT_ROOT */
  | { commNetwork: CommNetwork } /* CHOICE_ALT_ROOT */
  | { addrValidFrom: AddrValidFrom } /* CHOICE_ALT_ROOT */
  | { addrValidUntil: AddrValidUntil } /* CHOICE_ALT_ROOT */
  | { addrValidity: AddrValidity } /* CHOICE_ALT_ROOT */
  | { addrCoverage: AddrCoverage } /* CHOICE_ALT_ROOT */
  | { addrTariff: AddrTariff } /* CHOICE_ALT_ROOT */
  | { addrRestriction: AddrRestriction } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute */
let _cached_decoder_for_Attribute: $.ASN1Decoder<Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element) {
  if (!_cached_decoder_for_Attribute) {
    _cached_decoder_for_Attribute = $._decode_inextensible_choice<Attribute>({
      'CONTEXT 0': ['country', _decode_Country],
      'CONTEXT 1': ['locality', _decode_Locality],
      'CONTEXT 2': ['stateOrProvince', _decode_StateOrProvince],
      'CONTEXT 3': ['streetAddress', _decode_StreetAddress],
      'CONTEXT 4': ['houseId', _decode_HouseId],
      'CONTEXT 5': ['givenName', _decode_GivenName],
      'CONTEXT 6': ['title', _decode_Title],
      'CONTEXT 7': ['description', _decode_Description],
      'CONTEXT 8': ['businessCategory', _decode_BusinessCategory],
      'CONTEXT 9': ['postalCode', _decode_PostalCode],
      'CONTEXT 10': ['postOfficeBox', _decode_PostOfficeBox],
      'CONTEXT 11': ['dmdName', _decode_DmdName],
      'CONTEXT 12': ['localityCode', _decode_LocalityCode],
      'CONTEXT 13': ['localityNDC', _decode_LocalityNDC],
      'CONTEXT 14': ['subscriberName', _decode_SubscriberName],
      'CONTEXT 15': ['subscriberType', _decode_SubscriberType],
      'CONTEXT 16': ['secondFamilyName', _decode_SecondFamilyName],
      'CONTEXT 17': ['profession', _decode_Profession],
      'CONTEXT 18': ['language', _decode_Language],
      'CONTEXT 19': ['telephone', _decode_Telephone],
      'CONTEXT 20': ['orAddress', _decode_OrAddress],
      'CONTEXT 21': ['mail', _decode_Mail],
      'CONTEXT 22': ['url', _decode_Url],
      'CONTEXT 23': ['commService', _decode_CommService],
      'CONTEXT 24': ['commNetwork', _decode_CommNetwork],
      'CONTEXT 25': ['addrValidFrom', _decode_AddrValidFrom],
      'CONTEXT 26': ['addrValidUntil', _decode_AddrValidUntil],
      'CONTEXT 27': ['addrValidity', _decode_AddrValidity],
      'CONTEXT 28': ['addrCoverage', _decode_AddrCoverage],
      'CONTEXT 29': ['addrTariff', _decode_AddrTariff],
      'CONTEXT 30': ['addrRestriction', _decode_AddrRestriction],
    });
  }
  return _cached_decoder_for_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute */
let _cached_encoder_for_Attribute: $.ASN1Encoder<Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute */
/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(
  value: Attribute,
  elGetter: $.ASN1Encoder<Attribute>
) {
  if (!_cached_encoder_for_Attribute) {
    _cached_encoder_for_Attribute = $._encode_choice<Attribute>(
      {
        country: _encode_Country,
        locality: _encode_Locality,
        stateOrProvince: _encode_StateOrProvince,
        streetAddress: _encode_StreetAddress,
        houseId: _encode_HouseId,
        givenName: _encode_GivenName,
        title: _encode_Title,
        description: _encode_Description,
        businessCategory: _encode_BusinessCategory,
        postalCode: _encode_PostalCode,
        postOfficeBox: _encode_PostOfficeBox,
        dmdName: _encode_DmdName,
        localityCode: _encode_LocalityCode,
        localityNDC: _encode_LocalityNDC,
        subscriberName: _encode_SubscriberName,
        subscriberType: _encode_SubscriberType,
        secondFamilyName: _encode_SecondFamilyName,
        profession: _encode_Profession,
        language: _encode_Language,
        telephone: _encode_Telephone,
        orAddress: _encode_OrAddress,
        mail: _encode_Mail,
        url: _encode_Url,
        commService: _encode_CommService,
        commNetwork: _encode_CommNetwork,
        addrValidFrom: _encode_AddrValidFrom,
        addrValidUntil: _encode_AddrValidUntil,
        addrValidity: _encode_AddrValidity,
        addrCoverage: _encode_AddrCoverage,
        addrTariff: _encode_AddrTariff,
        addrRestriction: _encode_AddrRestriction,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute */

/* eslint-enable */
