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

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes */
/**
 * @summary RevocationInfoTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfoTypes  ::=  BIT STRING {
 *     fullCRLs                   (0),
 *     deltaCRLs                  (1),
 *     indirectCRLs               (2),
 *     oCSPResponses              (3)
 * }
 * ```
 */
export type RevocationInfoTypes = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_fullCRLs */
/**
 * @summary RevocationInfoTypes_fullCRLs
 * @constant
 */
export const RevocationInfoTypes_fullCRLs: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_fullCRLs */

/* START_OF_SYMBOL_DEFINITION fullCRLs */
/**
 * @summary fullCRLs
 * @constant
 */
export const fullCRLs: number = RevocationInfoTypes_fullCRLs; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fullCRLs */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_deltaCRLs */
/**
 * @summary RevocationInfoTypes_deltaCRLs
 * @constant
 */
export const RevocationInfoTypes_deltaCRLs: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_deltaCRLs */

/* START_OF_SYMBOL_DEFINITION deltaCRLs */
/**
 * @summary deltaCRLs
 * @constant
 */
export const deltaCRLs: number = RevocationInfoTypes_deltaCRLs; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION deltaCRLs */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_indirectCRLs */
/**
 * @summary RevocationInfoTypes_indirectCRLs
 * @constant
 */
export const RevocationInfoTypes_indirectCRLs: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_indirectCRLs */

/* START_OF_SYMBOL_DEFINITION indirectCRLs */
/**
 * @summary indirectCRLs
 * @constant
 */
export const indirectCRLs: number = RevocationInfoTypes_indirectCRLs; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION indirectCRLs */

/* START_OF_SYMBOL_DEFINITION RevocationInfoTypes_oCSPResponses */
/**
 * @summary RevocationInfoTypes_oCSPResponses
 * @constant
 */
export const RevocationInfoTypes_oCSPResponses: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RevocationInfoTypes_oCSPResponses */

/* START_OF_SYMBOL_DEFINITION oCSPResponses */
/**
 * @summary oCSPResponses
 * @constant
 */
export const oCSPResponses: number = RevocationInfoTypes_oCSPResponses; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION oCSPResponses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoTypes */
let _cached_decoder_for_RevocationInfoTypes: $.ASN1Decoder<RevocationInfoTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION _decode_RevocationInfoTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfoTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationInfoTypes} The decoded data structure.
 */
export function _decode_RevocationInfoTypes(el: _Element) {
  if (!_cached_decoder_for_RevocationInfoTypes) {
    _cached_decoder_for_RevocationInfoTypes = $._decodeBitString;
  }
  return _cached_decoder_for_RevocationInfoTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoTypes */
let _cached_encoder_for_RevocationInfoTypes: $.ASN1Encoder<RevocationInfoTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevocationInfoTypes */

/* START_OF_SYMBOL_DEFINITION _encode_RevocationInfoTypes */
/**
 * @summary Encodes a(n) RevocationInfoTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfoTypes, encoded as an ASN.1 Element.
 */
export function _encode_RevocationInfoTypes(
  value: RevocationInfoTypes,
  elGetter: $.ASN1Encoder<RevocationInfoTypes>
) {
  if (!_cached_encoder_for_RevocationInfoTypes) {
    _cached_encoder_for_RevocationInfoTypes = $._encodeBitString;
  }
  return _cached_encoder_for_RevocationInfoTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevocationInfoTypes */

/* eslint-enable */
