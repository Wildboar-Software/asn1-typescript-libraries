/* eslint-disable */
import {
  BIT_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary BiometricType_no_value_available
 * @constant
 */
export const BiometricType_no_value_available: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary no_value_available
 * @constant
 */
export const no_value_available: number = BiometricType_no_value_available; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_multiple_biometric_types
 * @constant
 */
export const BiometricType_multiple_biometric_types: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multiple_biometric_types
 * @constant
 */
export const multiple_biometric_types: number = BiometricType_multiple_biometric_types; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_scent
 * @constant
 */
export const BiometricType_scent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary scent
 * @constant
 */
export const scent: number = BiometricType_scent; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_dna
 * @constant
 */
export const BiometricType_dna: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dna
 * @constant
 */
export const dna: number = BiometricType_dna; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_ear
 * @constant
 */
export const BiometricType_ear: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ear
 * @constant
 */
export const ear: number = BiometricType_ear; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_face
 * @constant
 */
export const BiometricType_face: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary face
 * @constant
 */
export const face: number = BiometricType_face; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_finger
 * @constant
 */
export const BiometricType_finger: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary finger
 * @constant
 */
export const finger: number = BiometricType_finger; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_foot
 * @constant
 */
export const BiometricType_foot: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary foot
 * @constant
 */
export const foot: number = BiometricType_foot; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_hand_geometry
 * @constant
 */
export const BiometricType_hand_geometry: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary hand_geometry
 * @constant
 */
export const hand_geometry: number = BiometricType_hand_geometry; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_vein
 * @constant
 */
export const BiometricType_vein: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary vein
 * @constant
 */
export const vein: number = BiometricType_vein; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_iris
 * @constant
 */
export const BiometricType_iris: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary iris
 * @constant
 */
export const iris: number = BiometricType_iris; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_retina
 * @constant
 */
export const BiometricType_retina: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary retina
 * @constant
 */
export const retina: number = BiometricType_retina; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_voice
 * @constant
 */
export const BiometricType_voice: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary voice
 * @constant
 */
export const voice: number = BiometricType_voice; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_gait
 * @constant
 */
export const BiometricType_gait: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary gait
 * @constant
 */
export const gait: number = BiometricType_gait; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_keystroke
 * @constant
 */
export const BiometricType_keystroke: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary keystroke
 * @constant
 */
export const keystroke: number = BiometricType_keystroke; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_lip_movement
 * @constant
 */
export const BiometricType_lip_movement: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary lip_movement
 * @constant
 */
export const lip_movement: number = BiometricType_lip_movement; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricType_signature_sign
 * @constant
 */
export const BiometricType_signature_sign: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary signature_sign
 * @constant
 */
export const signature_sign: number = BiometricType_signature_sign; /* SHORT_NAMED_BIT */


export const _decode_BiometricType = $._decodeBitString;


export const _encode_BiometricType = $._encodeBitString;


/* eslint-enable */
