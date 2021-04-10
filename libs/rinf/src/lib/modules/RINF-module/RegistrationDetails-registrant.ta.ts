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
  RegistrantContactDetails,
  _decode_RegistrantContactDetails,
  _encode_RegistrantContactDetails,
} from '../RINF-module/RegistrantContactDetails.ta';
export {
  RegistrantContactDetails,
  _decode_RegistrantContactDetails,
  _encode_RegistrantContactDetails,
} from '../RINF-module/RegistrantContactDetails.ta';
import {
  RegistrationDetails_registrant_enciphered_registrant,
  _decode_RegistrationDetails_registrant_enciphered_registrant,
  _encode_RegistrationDetails_registrant_enciphered_registrant,
} from '../RINF-module/RegistrationDetails-registrant-enciphered-registrant.ta';
export {
  RegistrationDetails_registrant_enciphered_registrant,
  _decode_RegistrationDetails_registrant_enciphered_registrant,
  _encode_RegistrationDetails_registrant_enciphered_registrant,
} from '../RINF-module/RegistrationDetails-registrant-enciphered-registrant.ta';

/* START_OF_SYMBOL_DEFINITION RegistrationDetails_registrant */
/**
 * @summary RegistrationDetails_registrant
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationDetails-registrant ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RegistrationDetails_registrant =
  | { non_enciphered: RegistrantContactDetails } /* CHOICE_ALT_ROOT */
  | {
      enciphered_registrant: RegistrationDetails_registrant_enciphered_registrant;
    } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RegistrationDetails_registrant */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationDetails_registrant */
let _cached_decoder_for_RegistrationDetails_registrant: $.ASN1Decoder<RegistrationDetails_registrant> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationDetails_registrant */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationDetails_registrant */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationDetails_registrant
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationDetails_registrant} The decoded data structure.
 */
export function _decode_RegistrationDetails_registrant(el: _Element) {
  if (!_cached_decoder_for_RegistrationDetails_registrant) {
    _cached_decoder_for_RegistrationDetails_registrant = $._decode_inextensible_choice<RegistrationDetails_registrant>(
      {
        'CONTEXT 0': ['non_enciphered', _decode_RegistrantContactDetails],
        'CONTEXT 1': [
          'enciphered_registrant',
          _decode_RegistrationDetails_registrant_enciphered_registrant,
        ],
      }
    );
  }
  return _cached_decoder_for_RegistrationDetails_registrant(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationDetails_registrant */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationDetails_registrant */
let _cached_encoder_for_RegistrationDetails_registrant: $.ASN1Encoder<RegistrationDetails_registrant> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationDetails_registrant */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationDetails_registrant */
/**
 * @summary Encodes a(n) RegistrationDetails_registrant into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationDetails_registrant, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationDetails_registrant(
  value: RegistrationDetails_registrant,
  elGetter: $.ASN1Encoder<RegistrationDetails_registrant>
) {
  if (!_cached_encoder_for_RegistrationDetails_registrant) {
    _cached_encoder_for_RegistrationDetails_registrant = $._encode_choice<RegistrationDetails_registrant>(
      {
        non_enciphered: _encode_RegistrantContactDetails,
        enciphered_registrant: _encode_RegistrationDetails_registrant_enciphered_registrant,
      },
      $.BER
    );
  }
  return _cached_encoder_for_RegistrationDetails_registrant(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationDetails_registrant */

/* eslint-enable */
