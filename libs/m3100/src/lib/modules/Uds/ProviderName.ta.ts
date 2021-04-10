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
  ProviderId,
  _decode_ProviderId,
  _encode_ProviderId,
} from '../Uds/ProviderId.ta';
export {
  ProviderId,
  _decode_ProviderId,
  _encode_ProviderId,
} from '../Uds/ProviderId.ta';

/* START_OF_SYMBOL_DEFINITION ProviderName */
/**
 * @summary ProviderName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProviderName  ::=  ProviderId
 * ```
 */
export type ProviderName = ProviderId; // DefinedType
/* END_OF_SYMBOL_DEFINITION ProviderName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProviderName */
let _cached_decoder_for_ProviderName: $.ASN1Decoder<ProviderName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProviderName */

/* START_OF_SYMBOL_DEFINITION _decode_ProviderName */
/**
 * @summary Decodes an ASN.1 element into a(n) ProviderName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProviderName} The decoded data structure.
 */
export function _decode_ProviderName(el: _Element) {
  if (!_cached_decoder_for_ProviderName) {
    _cached_decoder_for_ProviderName = _decode_ProviderId;
  }
  return _cached_decoder_for_ProviderName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProviderName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProviderName */
let _cached_encoder_for_ProviderName: $.ASN1Encoder<ProviderName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProviderName */

/* START_OF_SYMBOL_DEFINITION _encode_ProviderName */
/**
 * @summary Encodes a(n) ProviderName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProviderName, encoded as an ASN.1 Element.
 */
export function _encode_ProviderName(
  value: ProviderName,
  elGetter: $.ASN1Encoder<ProviderName>
) {
  if (!_cached_encoder_for_ProviderName) {
    _cached_encoder_for_ProviderName = _encode_ProviderId;
  }
  return _cached_encoder_for_ProviderName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProviderName */

/* eslint-enable */
