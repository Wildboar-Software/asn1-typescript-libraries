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
  VisibleBFPRegistration,
  _decode_VisibleBFPRegistration,
  _encode_VisibleBFPRegistration,
} from '../BIP/VisibleBFPRegistration.ta';
export {
  VisibleBFPRegistration,
  _decode_VisibleBFPRegistration,
  _encode_VisibleBFPRegistration,
} from '../BIP/VisibleBFPRegistration.ta';

/* START_OF_SYMBOL_DEFINITION VisibleBFPRegistrations */
/**
 * @summary VisibleBFPRegistrations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBFPRegistrations  ::=  SET OF registration VisibleBFPRegistration
 * ```
 */
export type VisibleBFPRegistrations = VisibleBFPRegistration[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION VisibleBFPRegistrations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleBFPRegistrations */
let _cached_decoder_for_VisibleBFPRegistrations: $.ASN1Decoder<VisibleBFPRegistrations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleBFPRegistrations */

/* START_OF_SYMBOL_DEFINITION _decode_VisibleBFPRegistrations */
/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBFPRegistrations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBFPRegistrations} The decoded data structure.
 */
export function _decode_VisibleBFPRegistrations(el: _Element) {
  if (!_cached_decoder_for_VisibleBFPRegistrations) {
    _cached_decoder_for_VisibleBFPRegistrations = $._decodeSetOf<VisibleBFPRegistration>(
      () => _decode_VisibleBFPRegistration
    );
  }
  return _cached_decoder_for_VisibleBFPRegistrations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VisibleBFPRegistrations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleBFPRegistrations */
let _cached_encoder_for_VisibleBFPRegistrations: $.ASN1Encoder<VisibleBFPRegistrations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleBFPRegistrations */

/* START_OF_SYMBOL_DEFINITION _encode_VisibleBFPRegistrations */
/**
 * @summary Encodes a(n) VisibleBFPRegistrations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBFPRegistrations, encoded as an ASN.1 Element.
 */
export function _encode_VisibleBFPRegistrations(
  value: VisibleBFPRegistrations,
  elGetter: $.ASN1Encoder<VisibleBFPRegistrations>
) {
  if (!_cached_encoder_for_VisibleBFPRegistrations) {
    _cached_encoder_for_VisibleBFPRegistrations = $._encodeSetOf<VisibleBFPRegistration>(
      () => _encode_VisibleBFPRegistration,
      $.BER
    );
  }
  return _cached_encoder_for_VisibleBFPRegistrations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VisibleBFPRegistrations */

/* eslint-enable */
