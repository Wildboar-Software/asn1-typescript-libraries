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

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-SUBTYPE-anySubtype ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BioAPI_BIR_SUBTYPE_anySubtype = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_left */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype_left
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_anySubtype_left: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_left */

/* START_OF_SYMBOL_DEFINITION left */
/**
 * @summary left
 * @constant
 */
export const left: number = BioAPI_BIR_SUBTYPE_anySubtype_left; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_right */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype_right
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_anySubtype_right: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_right */

/* START_OF_SYMBOL_DEFINITION right */
/**
 * @summary right
 * @constant
 */
export const right: number = BioAPI_BIR_SUBTYPE_anySubtype_right; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_thumb */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype_thumb
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_anySubtype_thumb: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_thumb */

/* START_OF_SYMBOL_DEFINITION thumb */
/**
 * @summary thumb
 * @constant
 */
export const thumb: number = BioAPI_BIR_SUBTYPE_anySubtype_thumb; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION thumb */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_pointerFinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype_pointerFinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_anySubtype_pointerFinger: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_pointerFinger */

/* START_OF_SYMBOL_DEFINITION pointerFinger */
/**
 * @summary pointerFinger
 * @constant
 */
export const pointerFinger: number = BioAPI_BIR_SUBTYPE_anySubtype_pointerFinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION pointerFinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_middleFinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype_middleFinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_anySubtype_middleFinger: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_middleFinger */

/* START_OF_SYMBOL_DEFINITION middleFinger */
/**
 * @summary middleFinger
 * @constant
 */
export const middleFinger: number = BioAPI_BIR_SUBTYPE_anySubtype_middleFinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION middleFinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_ringFinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype_ringFinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_anySubtype_ringFinger: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_ringFinger */

/* START_OF_SYMBOL_DEFINITION ringFinger */
/**
 * @summary ringFinger
 * @constant
 */
export const ringFinger: number = BioAPI_BIR_SUBTYPE_anySubtype_ringFinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ringFinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_littleFinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_anySubtype_littleFinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_anySubtype_littleFinger: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_anySubtype_littleFinger */

/* START_OF_SYMBOL_DEFINITION littleFinger */
/**
 * @summary littleFinger
 * @constant
 */
export const littleFinger: number = BioAPI_BIR_SUBTYPE_anySubtype_littleFinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION littleFinger */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE_anySubtype */
let _cached_decoder_for_BioAPI_BIR_SUBTYPE_anySubtype: $.ASN1Decoder<BioAPI_BIR_SUBTYPE_anySubtype> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE_anySubtype */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE_anySubtype */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_SUBTYPE_anySubtype
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_SUBTYPE_anySubtype} The decoded data structure.
 */
export function _decode_BioAPI_BIR_SUBTYPE_anySubtype(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR_SUBTYPE_anySubtype) {
    _cached_decoder_for_BioAPI_BIR_SUBTYPE_anySubtype = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_BIR_SUBTYPE_anySubtype(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE_anySubtype */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE_anySubtype */
let _cached_encoder_for_BioAPI_BIR_SUBTYPE_anySubtype: $.ASN1Encoder<BioAPI_BIR_SUBTYPE_anySubtype> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE_anySubtype */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE_anySubtype */
/**
 * @summary Encodes a(n) BioAPI_BIR_SUBTYPE_anySubtype into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_SUBTYPE_anySubtype, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_SUBTYPE_anySubtype(
  value: BioAPI_BIR_SUBTYPE_anySubtype,
  elGetter: $.ASN1Encoder<BioAPI_BIR_SUBTYPE_anySubtype>
) {
  if (!_cached_encoder_for_BioAPI_BIR_SUBTYPE_anySubtype) {
    _cached_encoder_for_BioAPI_BIR_SUBTYPE_anySubtype = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_BIR_SUBTYPE_anySubtype(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE_anySubtype */

/* eslint-enable */
