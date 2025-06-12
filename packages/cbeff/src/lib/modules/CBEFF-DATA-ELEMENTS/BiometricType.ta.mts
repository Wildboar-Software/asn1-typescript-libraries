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

/* START_OF_SYMBOL_DEFINITION BiometricType */
/**
 * @summary BiometricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricType  ::=  BIT STRING {
 *   no-value-available(0), multiple-biometric-types(1), scent(2), dna(3),
 *   ear(4), face(5), finger(6), foot(7), hand-geometry(8), vein(9), iris(10),
 *   retina(11), voice(12), gait(13), keystroke(14), lip-movement(15),
 *   signature-sign(16)}(SIZE (17), ...)
 * ```
 */
export type BiometricType = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BiometricType */

/* START_OF_SYMBOL_DEFINITION BiometricType_no_value_available */
/**
 * @summary BiometricType_no_value_available
 * @constant
 */
export const BiometricType_no_value_available: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_no_value_available */

/* START_OF_SYMBOL_DEFINITION no_value_available */
/**
 * @summary no_value_available
 * @constant
 */
export const no_value_available: number = BiometricType_no_value_available; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION no_value_available */

/* START_OF_SYMBOL_DEFINITION BiometricType_multiple_biometric_types */
/**
 * @summary BiometricType_multiple_biometric_types
 * @constant
 */
export const BiometricType_multiple_biometric_types: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_multiple_biometric_types */

/* START_OF_SYMBOL_DEFINITION multiple_biometric_types */
/**
 * @summary multiple_biometric_types
 * @constant
 */
export const multiple_biometric_types: number = BiometricType_multiple_biometric_types; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION multiple_biometric_types */

/* START_OF_SYMBOL_DEFINITION BiometricType_scent */
/**
 * @summary BiometricType_scent
 * @constant
 */
export const BiometricType_scent: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_scent */

/* START_OF_SYMBOL_DEFINITION scent */
/**
 * @summary scent
 * @constant
 */
export const scent: number = BiometricType_scent; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION scent */

/* START_OF_SYMBOL_DEFINITION BiometricType_dna */
/**
 * @summary BiometricType_dna
 * @constant
 */
export const BiometricType_dna: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_dna */

/* START_OF_SYMBOL_DEFINITION dna */
/**
 * @summary dna
 * @constant
 */
export const dna: number = BiometricType_dna; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dna */

/* START_OF_SYMBOL_DEFINITION BiometricType_ear */
/**
 * @summary BiometricType_ear
 * @constant
 */
export const BiometricType_ear: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_ear */

/* START_OF_SYMBOL_DEFINITION ear */
/**
 * @summary ear
 * @constant
 */
export const ear: number = BiometricType_ear; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ear */

/* START_OF_SYMBOL_DEFINITION BiometricType_face */
/**
 * @summary BiometricType_face
 * @constant
 */
export const BiometricType_face: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_face */

/* START_OF_SYMBOL_DEFINITION face */
/**
 * @summary face
 * @constant
 */
export const face: number = BiometricType_face; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION face */

/* START_OF_SYMBOL_DEFINITION BiometricType_finger */
/**
 * @summary BiometricType_finger
 * @constant
 */
export const BiometricType_finger: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_finger */

/* START_OF_SYMBOL_DEFINITION finger */
/**
 * @summary finger
 * @constant
 */
export const finger: number = BiometricType_finger; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION finger */

/* START_OF_SYMBOL_DEFINITION BiometricType_foot */
/**
 * @summary BiometricType_foot
 * @constant
 */
export const BiometricType_foot: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_foot */

/* START_OF_SYMBOL_DEFINITION foot */
/**
 * @summary foot
 * @constant
 */
export const foot: number = BiometricType_foot; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION foot */

/* START_OF_SYMBOL_DEFINITION BiometricType_hand_geometry */
/**
 * @summary BiometricType_hand_geometry
 * @constant
 */
export const BiometricType_hand_geometry: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_hand_geometry */

/* START_OF_SYMBOL_DEFINITION hand_geometry */
/**
 * @summary hand_geometry
 * @constant
 */
export const hand_geometry: number = BiometricType_hand_geometry; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION hand_geometry */

/* START_OF_SYMBOL_DEFINITION BiometricType_vein */
/**
 * @summary BiometricType_vein
 * @constant
 */
export const BiometricType_vein: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_vein */

/* START_OF_SYMBOL_DEFINITION vein */
/**
 * @summary vein
 * @constant
 */
export const vein: number = BiometricType_vein; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION vein */

/* START_OF_SYMBOL_DEFINITION BiometricType_iris */
/**
 * @summary BiometricType_iris
 * @constant
 */
export const BiometricType_iris: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_iris */

/* START_OF_SYMBOL_DEFINITION iris */
/**
 * @summary iris
 * @constant
 */
export const iris: number = BiometricType_iris; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION iris */

/* START_OF_SYMBOL_DEFINITION BiometricType_retina */
/**
 * @summary BiometricType_retina
 * @constant
 */
export const BiometricType_retina: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_retina */

/* START_OF_SYMBOL_DEFINITION retina */
/**
 * @summary retina
 * @constant
 */
export const retina: number = BiometricType_retina; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION retina */

/* START_OF_SYMBOL_DEFINITION BiometricType_voice */
/**
 * @summary BiometricType_voice
 * @constant
 */
export const BiometricType_voice: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_voice */

/* START_OF_SYMBOL_DEFINITION voice */
/**
 * @summary voice
 * @constant
 */
export const voice: number = BiometricType_voice; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION voice */

/* START_OF_SYMBOL_DEFINITION BiometricType_gait */
/**
 * @summary BiometricType_gait
 * @constant
 */
export const BiometricType_gait: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_gait */

/* START_OF_SYMBOL_DEFINITION gait */
/**
 * @summary gait
 * @constant
 */
export const gait: number = BiometricType_gait; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION gait */

/* START_OF_SYMBOL_DEFINITION BiometricType_keystroke */
/**
 * @summary BiometricType_keystroke
 * @constant
 */
export const BiometricType_keystroke: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_keystroke */

/* START_OF_SYMBOL_DEFINITION keystroke */
/**
 * @summary keystroke
 * @constant
 */
export const keystroke: number = BiometricType_keystroke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION keystroke */

/* START_OF_SYMBOL_DEFINITION BiometricType_lip_movement */
/**
 * @summary BiometricType_lip_movement
 * @constant
 */
export const BiometricType_lip_movement: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_lip_movement */

/* START_OF_SYMBOL_DEFINITION lip_movement */
/**
 * @summary lip_movement
 * @constant
 */
export const lip_movement: number = BiometricType_lip_movement; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION lip_movement */

/* START_OF_SYMBOL_DEFINITION BiometricType_signature_sign */
/**
 * @summary BiometricType_signature_sign
 * @constant
 */
export const BiometricType_signature_sign: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BiometricType_signature_sign */

/* START_OF_SYMBOL_DEFINITION signature_sign */
/**
 * @summary signature_sign
 * @constant
 */
export const signature_sign: number = BiometricType_signature_sign; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION signature_sign */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricType */
let _cached_decoder_for_BiometricType: $.ASN1Decoder<BiometricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricType */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricType */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricType} The decoded data structure.
 */
export function _decode_BiometricType(el: _Element) {
  if (!_cached_decoder_for_BiometricType) {
    _cached_decoder_for_BiometricType = $._decodeBitString;
  }
  return _cached_decoder_for_BiometricType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricType */
let _cached_encoder_for_BiometricType: $.ASN1Encoder<BiometricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricType */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricType */
/**
 * @summary Encodes a(n) BiometricType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricType, encoded as an ASN.1 Element.
 */
export function _encode_BiometricType(
  value: BiometricType,
  elGetter: $.ASN1Encoder<BiometricType>
) {
  if (!_cached_encoder_for_BiometricType) {
    _cached_encoder_for_BiometricType = $._encodeBitString;
  }
  return _cached_encoder_for_BiometricType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricType */

/* eslint-enable */
