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
  CountryAs,
  _decode_CountryAs,
  _encode_CountryAs,
} from '../Uds/CountryAs.ta';
export {
  CountryAs,
  _decode_CountryAs,
  _encode_CountryAs,
} from '../Uds/CountryAs.ta';
import {
  LocalityCodeAs,
  _decode_LocalityCodeAs,
  _encode_LocalityCodeAs,
} from '../Uds/LocalityCodeAs.ta';
export {
  LocalityCodeAs,
  _decode_LocalityCodeAs,
  _encode_LocalityCodeAs,
} from '../Uds/LocalityCodeAs.ta';
import {
  LocalityNDCAs,
  _decode_LocalityNDCAs,
  _encode_LocalityNDCAs,
} from '../Uds/LocalityNDCAs.ta';
export {
  LocalityNDCAs,
  _decode_LocalityNDCAs,
  _encode_LocalityNDCAs,
} from '../Uds/LocalityNDCAs.ta';
import {
  SubscriberTypeAs,
  _decode_SubscriberTypeAs,
  _encode_SubscriberTypeAs,
} from '../Uds/SubscriberTypeAs.ta';
export {
  SubscriberTypeAs,
  _decode_SubscriberTypeAs,
  _encode_SubscriberTypeAs,
} from '../Uds/SubscriberTypeAs.ta';
import {
  LanguageAs,
  _decode_LanguageAs,
  _encode_LanguageAs,
} from '../Uds/LanguageAs.ta';
export {
  LanguageAs,
  _decode_LanguageAs,
  _encode_LanguageAs,
} from '../Uds/LanguageAs.ta';
import {
  CommServiceAs,
  _decode_CommServiceAs,
  _encode_CommServiceAs,
} from '../Uds/CommServiceAs.ta';
export {
  CommServiceAs,
  _decode_CommServiceAs,
  _encode_CommServiceAs,
} from '../Uds/CommServiceAs.ta';
import {
  AddrValidityAs,
  _decode_AddrValidityAs,
  _encode_AddrValidityAs,
} from '../Uds/AddrValidityAs.ta';
export {
  AddrValidityAs,
  _decode_AddrValidityAs,
  _encode_AddrValidityAs,
} from '../Uds/AddrValidityAs.ta';
import {
  AddrCoverageAs,
  _decode_AddrCoverageAs,
  _encode_AddrCoverageAs,
} from '../Uds/AddrCoverageAs.ta';
export {
  AddrCoverageAs,
  _decode_AddrCoverageAs,
  _encode_AddrCoverageAs,
} from '../Uds/AddrCoverageAs.ta';
import {
  AddrTariffAs,
  _decode_AddrTariffAs,
  _encode_AddrTariffAs,
} from '../Uds/AddrTariffAs.ta';
export {
  AddrTariffAs,
  _decode_AddrTariffAs,
  _encode_AddrTariffAs,
} from '../Uds/AddrTariffAs.ta';
import {
  AddrRestrictionAs,
  _decode_AddrRestrictionAs,
  _encode_AddrRestrictionAs,
} from '../Uds/AddrRestrictionAs.ta';
export {
  AddrRestrictionAs,
  _decode_AddrRestrictionAs,
  _encode_AddrRestrictionAs,
} from '../Uds/AddrRestrictionAs.ta';

/* START_OF_SYMBOL_DEFINITION Assertion */
/**
 * @summary Assertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Assertion  ::=  CHOICE {
 *   countryAs          CountryAs,
 *   localityCodeAs     LocalityCodeAs,
 *   localityNDCAs      LocalityNDCAs,
 *   subscriberTypeAs   SubscriberTypeAs,
 *   languageAs         LanguageAs,
 *   commServiceAs      CommServiceAs,
 *   addrValidityAs     AddrValidityAs,
 *   addrCoverageAs     AddrCoverageAs,
 *   addrTariffAs       AddrTariffAs,
 *   addrRestrictionAs  AddrRestrictionAs
 * }
 * ```
 */
export type Assertion =
  | { countryAs: CountryAs } /* CHOICE_ALT_ROOT */
  | { localityCodeAs: LocalityCodeAs } /* CHOICE_ALT_ROOT */
  | { localityNDCAs: LocalityNDCAs } /* CHOICE_ALT_ROOT */
  | { subscriberTypeAs: SubscriberTypeAs } /* CHOICE_ALT_ROOT */
  | { languageAs: LanguageAs } /* CHOICE_ALT_ROOT */
  | { commServiceAs: CommServiceAs } /* CHOICE_ALT_ROOT */
  | { addrValidityAs: AddrValidityAs } /* CHOICE_ALT_ROOT */
  | { addrCoverageAs: AddrCoverageAs } /* CHOICE_ALT_ROOT */
  | { addrTariffAs: AddrTariffAs } /* CHOICE_ALT_ROOT */
  | { addrRestrictionAs: AddrRestrictionAs } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Assertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Assertion */
let _cached_decoder_for_Assertion: $.ASN1Decoder<Assertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Assertion */

/* START_OF_SYMBOL_DEFINITION _decode_Assertion */
/**
 * @summary Decodes an ASN.1 element into a(n) Assertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Assertion} The decoded data structure.
 */
export function _decode_Assertion(el: _Element) {
  if (!_cached_decoder_for_Assertion) {
    _cached_decoder_for_Assertion = $._decode_inextensible_choice<Assertion>({
      'CONTEXT 0': ['countryAs', _decode_CountryAs],
      'CONTEXT 1': ['localityCodeAs', _decode_LocalityCodeAs],
      'CONTEXT 2': ['localityNDCAs', _decode_LocalityNDCAs],
      'CONTEXT 3': ['subscriberTypeAs', _decode_SubscriberTypeAs],
      'CONTEXT 4': ['languageAs', _decode_LanguageAs],
      'CONTEXT 5': ['commServiceAs', _decode_CommServiceAs],
      'CONTEXT 6': ['addrValidityAs', _decode_AddrValidityAs],
      'CONTEXT 7': ['addrCoverageAs', _decode_AddrCoverageAs],
      'CONTEXT 8': ['addrTariffAs', _decode_AddrTariffAs],
      'CONTEXT 9': ['addrRestrictionAs', _decode_AddrRestrictionAs],
    });
  }
  return _cached_decoder_for_Assertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Assertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Assertion */
let _cached_encoder_for_Assertion: $.ASN1Encoder<Assertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Assertion */

/* START_OF_SYMBOL_DEFINITION _encode_Assertion */
/**
 * @summary Encodes a(n) Assertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Assertion, encoded as an ASN.1 Element.
 */
export function _encode_Assertion(
  value: Assertion,
  elGetter: $.ASN1Encoder<Assertion>
) {
  if (!_cached_encoder_for_Assertion) {
    _cached_encoder_for_Assertion = $._encode_choice<Assertion>(
      {
        countryAs: _encode_CountryAs,
        localityCodeAs: _encode_LocalityCodeAs,
        localityNDCAs: _encode_LocalityNDCAs,
        subscriberTypeAs: _encode_SubscriberTypeAs,
        languageAs: _encode_LanguageAs,
        commServiceAs: _encode_CommServiceAs,
        addrValidityAs: _encode_AddrValidityAs,
        addrCoverageAs: _encode_AddrCoverageAs,
        addrTariffAs: _encode_AddrTariffAs,
        addrRestrictionAs: _encode_AddrRestrictionAs,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Assertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Assertion */

/* eslint-enable */
