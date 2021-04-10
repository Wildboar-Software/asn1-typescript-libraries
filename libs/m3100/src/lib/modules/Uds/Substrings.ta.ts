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
  LocalitySub,
  _decode_LocalitySub,
  _encode_LocalitySub,
} from '../Uds/LocalitySub.ta';
export {
  LocalitySub,
  _decode_LocalitySub,
  _encode_LocalitySub,
} from '../Uds/LocalitySub.ta';
import {
  StateOrProvinceSub,
  _decode_StateOrProvinceSub,
  _encode_StateOrProvinceSub,
} from '../Uds/StateOrProvinceSub.ta';
export {
  StateOrProvinceSub,
  _decode_StateOrProvinceSub,
  _encode_StateOrProvinceSub,
} from '../Uds/StateOrProvinceSub.ta';
import {
  StreetAddressSub,
  _decode_StreetAddressSub,
  _encode_StreetAddressSub,
} from '../Uds/StreetAddressSub.ta';
export {
  StreetAddressSub,
  _decode_StreetAddressSub,
  _encode_StreetAddressSub,
} from '../Uds/StreetAddressSub.ta';
import {
  HouseIdSub,
  _decode_HouseIdSub,
  _encode_HouseIdSub,
} from '../Uds/HouseIdSub.ta';
export {
  HouseIdSub,
  _decode_HouseIdSub,
  _encode_HouseIdSub,
} from '../Uds/HouseIdSub.ta';
import {
  GivenNameSub,
  _decode_GivenNameSub,
  _encode_GivenNameSub,
} from '../Uds/GivenNameSub.ta';
export {
  GivenNameSub,
  _decode_GivenNameSub,
  _encode_GivenNameSub,
} from '../Uds/GivenNameSub.ta';
import {
  TitleSub,
  _decode_TitleSub,
  _encode_TitleSub,
} from '../Uds/TitleSub.ta';
export {
  TitleSub,
  _decode_TitleSub,
  _encode_TitleSub,
} from '../Uds/TitleSub.ta';
import {
  BusinessCategorySub,
  _decode_BusinessCategorySub,
  _encode_BusinessCategorySub,
} from '../Uds/BusinessCategorySub.ta';
export {
  BusinessCategorySub,
  _decode_BusinessCategorySub,
  _encode_BusinessCategorySub,
} from '../Uds/BusinessCategorySub.ta';
import {
  PostalCodeSub,
  _decode_PostalCodeSub,
  _encode_PostalCodeSub,
} from '../Uds/PostalCodeSub.ta';
export {
  PostalCodeSub,
  _decode_PostalCodeSub,
  _encode_PostalCodeSub,
} from '../Uds/PostalCodeSub.ta';
import {
  PostOfficeBoxSub,
  _decode_PostOfficeBoxSub,
  _encode_PostOfficeBoxSub,
} from '../Uds/PostOfficeBoxSub.ta';
export {
  PostOfficeBoxSub,
  _decode_PostOfficeBoxSub,
  _encode_PostOfficeBoxSub,
} from '../Uds/PostOfficeBoxSub.ta';
import {
  DmdNameSub,
  _decode_DmdNameSub,
  _encode_DmdNameSub,
} from '../Uds/DmdNameSub.ta';
export {
  DmdNameSub,
  _decode_DmdNameSub,
  _encode_DmdNameSub,
} from '../Uds/DmdNameSub.ta';
import {
  SubscriberNameSub,
  _decode_SubscriberNameSub,
  _encode_SubscriberNameSub,
} from '../Uds/SubscriberNameSub.ta';
export {
  SubscriberNameSub,
  _decode_SubscriberNameSub,
  _encode_SubscriberNameSub,
} from '../Uds/SubscriberNameSub.ta';
import {
  SecondFamilyNameSub,
  _decode_SecondFamilyNameSub,
  _encode_SecondFamilyNameSub,
} from '../Uds/SecondFamilyNameSub.ta';
export {
  SecondFamilyNameSub,
  _decode_SecondFamilyNameSub,
  _encode_SecondFamilyNameSub,
} from '../Uds/SecondFamilyNameSub.ta';
import {
  ProfessionSub,
  _decode_ProfessionSub,
  _encode_ProfessionSub,
} from '../Uds/ProfessionSub.ta';
export {
  ProfessionSub,
  _decode_ProfessionSub,
  _encode_ProfessionSub,
} from '../Uds/ProfessionSub.ta';
import {
  TelephoneSub,
  _decode_TelephoneSub,
  _encode_TelephoneSub,
} from '../Uds/TelephoneSub.ta';
export {
  TelephoneSub,
  _decode_TelephoneSub,
  _encode_TelephoneSub,
} from '../Uds/TelephoneSub.ta';
import {
  OrAddressSub,
  _decode_OrAddressSub,
  _encode_OrAddressSub,
} from '../Uds/OrAddressSub.ta';
export {
  OrAddressSub,
  _decode_OrAddressSub,
  _encode_OrAddressSub,
} from '../Uds/OrAddressSub.ta';
import { MailSub, _decode_MailSub, _encode_MailSub } from '../Uds/MailSub.ta';
export { MailSub, _decode_MailSub, _encode_MailSub } from '../Uds/MailSub.ta';
import { UrlSub, _decode_UrlSub, _encode_UrlSub } from '../Uds/UrlSub.ta';
export { UrlSub, _decode_UrlSub, _encode_UrlSub } from '../Uds/UrlSub.ta';

/* START_OF_SYMBOL_DEFINITION Substrings */
/**
 * @summary Substrings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Substrings  ::=  CHOICE {
 *   localitySub          LocalitySub,
 *   stateOrProvinceSub   StateOrProvinceSub,
 *   streetAddressSub     StreetAddressSub,
 *   houseIdSub           HouseIdSub,
 *   givenNameSub         GivenNameSub,
 *   titleSub             TitleSub,
 *   businessCategorySub  BusinessCategorySub,
 *   postalCodeSub        PostalCodeSub,
 *   postOfficeBoxSub     PostOfficeBoxSub,
 *   dmdNameSub           DmdNameSub,
 *   subscriberNameSub    SubscriberNameSub,
 *   secondFamilyNameSub  SecondFamilyNameSub,
 *   professionSub        ProfessionSub,
 *   telephoneSub         TelephoneSub,
 *   orAddressSub         OrAddressSub,
 *   mailSub              MailSub,
 *   urlSub               UrlSub
 * }
 * ```
 */
export type Substrings =
  | { localitySub: LocalitySub } /* CHOICE_ALT_ROOT */
  | { stateOrProvinceSub: StateOrProvinceSub } /* CHOICE_ALT_ROOT */
  | { streetAddressSub: StreetAddressSub } /* CHOICE_ALT_ROOT */
  | { houseIdSub: HouseIdSub } /* CHOICE_ALT_ROOT */
  | { givenNameSub: GivenNameSub } /* CHOICE_ALT_ROOT */
  | { titleSub: TitleSub } /* CHOICE_ALT_ROOT */
  | { businessCategorySub: BusinessCategorySub } /* CHOICE_ALT_ROOT */
  | { postalCodeSub: PostalCodeSub } /* CHOICE_ALT_ROOT */
  | { postOfficeBoxSub: PostOfficeBoxSub } /* CHOICE_ALT_ROOT */
  | { dmdNameSub: DmdNameSub } /* CHOICE_ALT_ROOT */
  | { subscriberNameSub: SubscriberNameSub } /* CHOICE_ALT_ROOT */
  | { secondFamilyNameSub: SecondFamilyNameSub } /* CHOICE_ALT_ROOT */
  | { professionSub: ProfessionSub } /* CHOICE_ALT_ROOT */
  | { telephoneSub: TelephoneSub } /* CHOICE_ALT_ROOT */
  | { orAddressSub: OrAddressSub } /* CHOICE_ALT_ROOT */
  | { mailSub: MailSub } /* CHOICE_ALT_ROOT */
  | { urlSub: UrlSub } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Substrings */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Substrings */
let _cached_decoder_for_Substrings: $.ASN1Decoder<Substrings> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Substrings */

/* START_OF_SYMBOL_DEFINITION _decode_Substrings */
/**
 * @summary Decodes an ASN.1 element into a(n) Substrings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Substrings} The decoded data structure.
 */
export function _decode_Substrings(el: _Element) {
  if (!_cached_decoder_for_Substrings) {
    _cached_decoder_for_Substrings = $._decode_inextensible_choice<Substrings>({
      'CONTEXT 0': ['localitySub', _decode_LocalitySub],
      'CONTEXT 1': ['stateOrProvinceSub', _decode_StateOrProvinceSub],
      'CONTEXT 2': ['streetAddressSub', _decode_StreetAddressSub],
      'CONTEXT 3': ['houseIdSub', _decode_HouseIdSub],
      'CONTEXT 4': ['givenNameSub', _decode_GivenNameSub],
      'CONTEXT 5': ['titleSub', _decode_TitleSub],
      'CONTEXT 6': ['businessCategorySub', _decode_BusinessCategorySub],
      'CONTEXT 7': ['postalCodeSub', _decode_PostalCodeSub],
      'CONTEXT 8': ['postOfficeBoxSub', _decode_PostOfficeBoxSub],
      'CONTEXT 9': ['dmdNameSub', _decode_DmdNameSub],
      'CONTEXT 10': ['subscriberNameSub', _decode_SubscriberNameSub],
      'CONTEXT 11': ['secondFamilyNameSub', _decode_SecondFamilyNameSub],
      'CONTEXT 12': ['professionSub', _decode_ProfessionSub],
      'CONTEXT 13': ['telephoneSub', _decode_TelephoneSub],
      'CONTEXT 14': ['orAddressSub', _decode_OrAddressSub],
      'CONTEXT 15': ['mailSub', _decode_MailSub],
      'CONTEXT 16': ['urlSub', _decode_UrlSub],
    });
  }
  return _cached_decoder_for_Substrings(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Substrings */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Substrings */
let _cached_encoder_for_Substrings: $.ASN1Encoder<Substrings> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Substrings */

/* START_OF_SYMBOL_DEFINITION _encode_Substrings */
/**
 * @summary Encodes a(n) Substrings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Substrings, encoded as an ASN.1 Element.
 */
export function _encode_Substrings(
  value: Substrings,
  elGetter: $.ASN1Encoder<Substrings>
) {
  if (!_cached_encoder_for_Substrings) {
    _cached_encoder_for_Substrings = $._encode_choice<Substrings>(
      {
        localitySub: _encode_LocalitySub,
        stateOrProvinceSub: _encode_StateOrProvinceSub,
        streetAddressSub: _encode_StreetAddressSub,
        houseIdSub: _encode_HouseIdSub,
        givenNameSub: _encode_GivenNameSub,
        titleSub: _encode_TitleSub,
        businessCategorySub: _encode_BusinessCategorySub,
        postalCodeSub: _encode_PostalCodeSub,
        postOfficeBoxSub: _encode_PostOfficeBoxSub,
        dmdNameSub: _encode_DmdNameSub,
        subscriberNameSub: _encode_SubscriberNameSub,
        secondFamilyNameSub: _encode_SecondFamilyNameSub,
        professionSub: _encode_ProfessionSub,
        telephoneSub: _encode_TelephoneSub,
        orAddressSub: _encode_OrAddressSub,
        mailSub: _encode_MailSub,
        urlSub: _encode_UrlSub,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Substrings(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Substrings */

/* eslint-enable */
