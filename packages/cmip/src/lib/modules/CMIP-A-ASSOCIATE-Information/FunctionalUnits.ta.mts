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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION FunctionalUnits */
/**
 * @summary FunctionalUnits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FunctionalUnits  ::=  BIT STRING {
 *   multipleObjectSelection(0), filter(1), multipleReply(2), extendedService(3),
 *   cancelGet(4)}
 * ```
 */
export type FunctionalUnits = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_multipleObjectSelection */
/**
 * @summary FunctionalUnits_multipleObjectSelection
 * @constant
 */
export const FunctionalUnits_multipleObjectSelection: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_multipleObjectSelection */

/* START_OF_SYMBOL_DEFINITION multipleObjectSelection */
/**
 * @summary multipleObjectSelection
 * @constant
 */
export const multipleObjectSelection: number = FunctionalUnits_multipleObjectSelection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION multipleObjectSelection */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_filter */
/**
 * @summary FunctionalUnits_filter
 * @constant
 */
export const FunctionalUnits_filter: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_filter */

/* START_OF_SYMBOL_DEFINITION filter */
/**
 * @summary filter
 * @constant
 */
export const filter: number = FunctionalUnits_filter; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION filter */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_multipleReply */
/**
 * @summary FunctionalUnits_multipleReply
 * @constant
 */
export const FunctionalUnits_multipleReply: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_multipleReply */

/* START_OF_SYMBOL_DEFINITION multipleReply */
/**
 * @summary multipleReply
 * @constant
 */
export const multipleReply: number = FunctionalUnits_multipleReply; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION multipleReply */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_extendedService */
/**
 * @summary FunctionalUnits_extendedService
 * @constant
 */
export const FunctionalUnits_extendedService: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_extendedService */

/* START_OF_SYMBOL_DEFINITION extendedService */
/**
 * @summary extendedService
 * @constant
 */
export const extendedService: number = FunctionalUnits_extendedService; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION extendedService */

/* START_OF_SYMBOL_DEFINITION FunctionalUnits_cancelGet */
/**
 * @summary FunctionalUnits_cancelGet
 * @constant
 */
export const FunctionalUnits_cancelGet: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION FunctionalUnits_cancelGet */

/* START_OF_SYMBOL_DEFINITION cancelGet */
/**
 * @summary cancelGet
 * @constant
 */
export const cancelGet: number = FunctionalUnits_cancelGet; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION cancelGet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionalUnits */
let _cached_decoder_for_FunctionalUnits: $.ASN1Decoder<FunctionalUnits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION _decode_FunctionalUnits */
/**
 * @summary Decodes an ASN.1 element into a(n) FunctionalUnits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FunctionalUnits} The decoded data structure.
 */
export function _decode_FunctionalUnits(el: _Element) {
  if (!_cached_decoder_for_FunctionalUnits) {
    _cached_decoder_for_FunctionalUnits = $._decodeBitString;
  }
  return _cached_decoder_for_FunctionalUnits(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionalUnits */
let _cached_encoder_for_FunctionalUnits: $.ASN1Encoder<FunctionalUnits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionalUnits */

/* START_OF_SYMBOL_DEFINITION _encode_FunctionalUnits */
/**
 * @summary Encodes a(n) FunctionalUnits into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FunctionalUnits, encoded as an ASN.1 Element.
 */
export function _encode_FunctionalUnits(
  value: FunctionalUnits,
  elGetter: $.ASN1Encoder<FunctionalUnits>
) {
  if (!_cached_encoder_for_FunctionalUnits) {
    _cached_encoder_for_FunctionalUnits = $._encodeBitString;
  }
  return _cached_encoder_for_FunctionalUnits(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FunctionalUnits */

/* eslint-enable */
