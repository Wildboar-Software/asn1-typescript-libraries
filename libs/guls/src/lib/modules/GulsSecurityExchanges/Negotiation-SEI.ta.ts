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

/* START_OF_SYMBOL_DEFINITION Negotiation_SEI */
/**
 * @summary Negotiation_SEI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Negotiation-SEI  ::=  SEQUENCE OF OBJECT IDENTIFIER
 * ```
 */
export type Negotiation_SEI = OBJECT_IDENTIFIER[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Negotiation_SEI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Negotiation_SEI */
let _cached_decoder_for_Negotiation_SEI: $.ASN1Decoder<Negotiation_SEI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Negotiation_SEI */

/* START_OF_SYMBOL_DEFINITION _decode_Negotiation_SEI */
/**
 * @summary Decodes an ASN.1 element into a(n) Negotiation_SEI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Negotiation_SEI} The decoded data structure.
 */
export function _decode_Negotiation_SEI(el: _Element) {
  if (!_cached_decoder_for_Negotiation_SEI) {
    _cached_decoder_for_Negotiation_SEI = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._decodeObjectIdentifier
    );
  }
  return _cached_decoder_for_Negotiation_SEI(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Negotiation_SEI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Negotiation_SEI */
let _cached_encoder_for_Negotiation_SEI: $.ASN1Encoder<Negotiation_SEI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Negotiation_SEI */

/* START_OF_SYMBOL_DEFINITION _encode_Negotiation_SEI */
/**
 * @summary Encodes a(n) Negotiation_SEI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Negotiation_SEI, encoded as an ASN.1 Element.
 */
export function _encode_Negotiation_SEI(
  value: Negotiation_SEI,
  elGetter: $.ASN1Encoder<Negotiation_SEI>
) {
  if (!_cached_encoder_for_Negotiation_SEI) {
    _cached_encoder_for_Negotiation_SEI = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._encodeObjectIdentifier,
      $.BER
    );
  }
  return _cached_encoder_for_Negotiation_SEI(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Negotiation_SEI */

/* eslint-enable */
