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

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-SUBTYPE-MASK  ::=  BIT STRING {
 *   left(0), right(1), left-thumb(2), left-pointerfinger(3),
 *   left-middlefinger(4), left-ringfinger(5), left-littlefinger(6),
 *   right-thumb(7), right-pointerfinger(8), right-middlefinger(9),
 *   right-ringfinger(10), right-littlefinger(11), left-vein-palm(12),
 *   left-vein-backofhand(13), left-vein-wrist(14), right-vein-palm(15),
 *   right-vein-backofhand(16), right-vein-wrist(17)}(SIZE (32))
 * ```
 */
export type BioAPI_BIR_SUBTYPE_MASK = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left */

/* START_OF_SYMBOL_DEFINITION left */
/**
 * @summary left
 * @constant
 */
export const left: number = BioAPI_BIR_SUBTYPE_MASK_left; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right */

/* START_OF_SYMBOL_DEFINITION right */
/**
 * @summary right
 * @constant
 */
export const right: number = BioAPI_BIR_SUBTYPE_MASK_right; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_thumb */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_thumb
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_thumb: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_thumb */

/* START_OF_SYMBOL_DEFINITION left_thumb */
/**
 * @summary left_thumb
 * @constant
 */
export const left_thumb: number = BioAPI_BIR_SUBTYPE_MASK_left_thumb; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_thumb */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger */

/* START_OF_SYMBOL_DEFINITION left_pointerfinger */
/**
 * @summary left_pointerfinger
 * @constant
 */
export const left_pointerfinger: number = BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_pointerfinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_middlefinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_middlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_middlefinger: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_middlefinger */

/* START_OF_SYMBOL_DEFINITION left_middlefinger */
/**
 * @summary left_middlefinger
 * @constant
 */
export const left_middlefinger: number = BioAPI_BIR_SUBTYPE_MASK_left_middlefinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_middlefinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_ringfinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_ringfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_ringfinger: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_ringfinger */

/* START_OF_SYMBOL_DEFINITION left_ringfinger */
/**
 * @summary left_ringfinger
 * @constant
 */
export const left_ringfinger: number = BioAPI_BIR_SUBTYPE_MASK_left_ringfinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_ringfinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_littlefinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_littlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_littlefinger: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_littlefinger */

/* START_OF_SYMBOL_DEFINITION left_littlefinger */
/**
 * @summary left_littlefinger
 * @constant
 */
export const left_littlefinger: number = BioAPI_BIR_SUBTYPE_MASK_left_littlefinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_littlefinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_thumb */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_thumb
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_thumb: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_thumb */

/* START_OF_SYMBOL_DEFINITION right_thumb */
/**
 * @summary right_thumb
 * @constant
 */
export const right_thumb: number = BioAPI_BIR_SUBTYPE_MASK_right_thumb; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_thumb */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger */

/* START_OF_SYMBOL_DEFINITION right_pointerfinger */
/**
 * @summary right_pointerfinger
 * @constant
 */
export const right_pointerfinger: number = BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_pointerfinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_middlefinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_middlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_middlefinger: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_middlefinger */

/* START_OF_SYMBOL_DEFINITION right_middlefinger */
/**
 * @summary right_middlefinger
 * @constant
 */
export const right_middlefinger: number = BioAPI_BIR_SUBTYPE_MASK_right_middlefinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_middlefinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_ringfinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_ringfinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_ringfinger: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_ringfinger */

/* START_OF_SYMBOL_DEFINITION right_ringfinger */
/**
 * @summary right_ringfinger
 * @constant
 */
export const right_ringfinger: number = BioAPI_BIR_SUBTYPE_MASK_right_ringfinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_ringfinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_littlefinger */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_littlefinger
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_littlefinger: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_littlefinger */

/* START_OF_SYMBOL_DEFINITION right_littlefinger */
/**
 * @summary right_littlefinger
 * @constant
 */
export const right_littlefinger: number = BioAPI_BIR_SUBTYPE_MASK_right_littlefinger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_littlefinger */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_vein_palm */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_vein_palm
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_vein_palm: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_vein_palm */

/* START_OF_SYMBOL_DEFINITION left_vein_palm */
/**
 * @summary left_vein_palm
 * @constant
 */
export const left_vein_palm: number = BioAPI_BIR_SUBTYPE_MASK_left_vein_palm; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_vein_palm */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand */

/* START_OF_SYMBOL_DEFINITION left_vein_backofhand */
/**
 * @summary left_vein_backofhand
 * @constant
 */
export const left_vein_backofhand: number = BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_vein_backofhand */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist */

/* START_OF_SYMBOL_DEFINITION left_vein_wrist */
/**
 * @summary left_vein_wrist
 * @constant
 */
export const left_vein_wrist: number = BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION left_vein_wrist */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_vein_palm */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_vein_palm
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_vein_palm: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_vein_palm */

/* START_OF_SYMBOL_DEFINITION right_vein_palm */
/**
 * @summary right_vein_palm
 * @constant
 */
export const right_vein_palm: number = BioAPI_BIR_SUBTYPE_MASK_right_vein_palm; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_vein_palm */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand */

/* START_OF_SYMBOL_DEFINITION right_vein_backofhand */
/**
 * @summary right_vein_backofhand
 * @constant
 */
export const right_vein_backofhand: number = BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_vein_backofhand */

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist */
/**
 * @summary BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist
 * @constant
 */
export const BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist */

/* START_OF_SYMBOL_DEFINITION right_vein_wrist */
/**
 * @summary right_vein_wrist
 * @constant
 */
export const right_vein_wrist: number = BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION right_vein_wrist */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE_MASK */
let _cached_decoder_for_BioAPI_BIR_SUBTYPE_MASK: $.ASN1Decoder<BioAPI_BIR_SUBTYPE_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE_MASK */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_SUBTYPE_MASK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_SUBTYPE_MASK} The decoded data structure.
 */
export function _decode_BioAPI_BIR_SUBTYPE_MASK(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR_SUBTYPE_MASK) {
    _cached_decoder_for_BioAPI_BIR_SUBTYPE_MASK = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_BIR_SUBTYPE_MASK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE_MASK */
let _cached_encoder_for_BioAPI_BIR_SUBTYPE_MASK: $.ASN1Encoder<BioAPI_BIR_SUBTYPE_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE_MASK */
/**
 * @summary Encodes a(n) BioAPI_BIR_SUBTYPE_MASK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_SUBTYPE_MASK, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_SUBTYPE_MASK(
  value: BioAPI_BIR_SUBTYPE_MASK,
  elGetter: $.ASN1Encoder<BioAPI_BIR_SUBTYPE_MASK>
) {
  if (!_cached_encoder_for_BioAPI_BIR_SUBTYPE_MASK) {
    _cached_encoder_for_BioAPI_BIR_SUBTYPE_MASK = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_BIR_SUBTYPE_MASK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE_MASK */

/* eslint-enable */
