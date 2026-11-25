/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import { type ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary BiometricType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricType  ::=  INTEGER {
 *     noValueAvailable        (0),
 *     multipleBiometricTypes  (1),
 *     face                    (2),
 *     voice                   (4),
 *     finger                  (8),
 *     iris                    (16),
 *     retina                  (32),
 *     handGeometry            (64),
 *     signatureSign           (128),
 *     keystroke               (256),
 *     lipMovement             (512),
 *     gait                    (4096),
 *     vein                    (8192),
 *     dna                     (16384),
 *     ear                     (32768),
 *     foot                    (65536),
 *     scent                   (131072),
 *     bodyPhotography         (262144),
 *     frictionRidge           (524288),
 *     thermal                 (1048576),
 *     presentationAttackData  (2097152)
 * } (0..16777215)
 * ```
 */
export
type BiometricType = INTEGER;

/**
 * @summary BiometricType_noValueAvailable
 * @constant
 * @type {number}
 */
export
const BiometricType_noValueAvailable: number = 0 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_noValueAvailable
 * @constant
 * @type {number}
 */
export
const noValueAvailable: number = BiometricType_noValueAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_multipleBiometricTypes
 * @constant
 * @type {number}
 */
export
const BiometricType_multipleBiometricTypes: number = 1 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_multipleBiometricTypes
 * @constant
 * @type {number}
 */
export
const multipleBiometricTypes: number = BiometricType_multipleBiometricTypes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_face
 * @constant
 * @type {number}
 */
export
const BiometricType_face: number = 2 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_face
 * @constant
 * @type {number}
 */
export
const face: number = BiometricType_face; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_voice
 * @constant
 * @type {number}
 */
export
const BiometricType_voice: number = 4 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_voice
 * @constant
 * @type {number}
 */
export
const voice: number = BiometricType_voice; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_finger
 * @constant
 * @type {number}
 */
export
const BiometricType_finger: number = 8 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_finger
 * @constant
 * @type {number}
 */
export
const finger: number = BiometricType_finger; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_iris
 * @constant
 * @type {number}
 */
export
const BiometricType_iris: number = 16 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_iris
 * @constant
 * @type {number}
 */
export
const iris: number = BiometricType_iris; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_retina
 * @constant
 * @type {number}
 */
export
const BiometricType_retina: number = 32 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_retina
 * @constant
 * @type {number}
 */
export
const retina: number = BiometricType_retina; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_handGeometry
 * @constant
 * @type {number}
 */
export
const BiometricType_handGeometry: number = 64 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_handGeometry
 * @constant
 * @type {number}
 */
export
const handGeometry: number = BiometricType_handGeometry; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_signatureSign
 * @constant
 * @type {number}
 */
export
const BiometricType_signatureSign: number = 128 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_signatureSign
 * @constant
 * @type {number}
 */
export
const signatureSign: number = BiometricType_signatureSign; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_keystroke
 * @constant
 * @type {number}
 */
export
const BiometricType_keystroke: number = 256 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_keystroke
 * @constant
 * @type {number}
 */
export
const keystroke: number = BiometricType_keystroke; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_lipMovement
 * @constant
 * @type {number}
 */
export
const BiometricType_lipMovement: number = 512 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_lipMovement
 * @constant
 * @type {number}
 */
export
const lipMovement: number = BiometricType_lipMovement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_gait
 * @constant
 * @type {number}
 */
export
const BiometricType_gait: number = 4096 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_gait
 * @constant
 * @type {number}
 */
export
const gait: number = BiometricType_gait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_vein
 * @constant
 * @type {number}
 */
export
const BiometricType_vein: number = 8192 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_vein
 * @constant
 * @type {number}
 */
export
const vein: number = BiometricType_vein; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_dna
 * @constant
 * @type {number}
 */
export
const BiometricType_dna: number = 16384 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_dna
 * @constant
 * @type {number}
 */
export
const dna: number = BiometricType_dna; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_ear
 * @constant
 * @type {number}
 */
export
const BiometricType_ear: number = 32768 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_ear
 * @constant
 * @type {number}
 */
export
const ear: number = BiometricType_ear; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_foot
 * @constant
 * @type {number}
 */
export
const BiometricType_foot: number = 65536 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_foot
 * @constant
 * @type {number}
 */
export
const foot: number = BiometricType_foot; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_scent
 * @constant
 * @type {number}
 */
export
const BiometricType_scent: number = 131072 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_scent
 * @constant
 * @type {number}
 */
export
const scent: number = BiometricType_scent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_bodyPhotography
 * @constant
 * @type {number}
 */
export
const BiometricType_bodyPhotography: number = 262144 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_bodyPhotography
 * @constant
 * @type {number}
 */
export
const bodyPhotography: number = BiometricType_bodyPhotography; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_frictionRidge
 * @constant
 * @type {number}
 */
export
const BiometricType_frictionRidge: number = 524288 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_frictionRidge
 * @constant
 * @type {number}
 */
export
const frictionRidge: number = BiometricType_frictionRidge; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_thermal
 * @constant
 * @type {number}
 */
export
const BiometricType_thermal: number = 1048576 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_thermal
 * @constant
 * @type {number}
 */
export
const thermal: number = BiometricType_thermal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_presentationAttackData
 * @constant
 * @type {number}
 */
export
const BiometricType_presentationAttackData: number = 2097152 satisfies BiometricType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BiometricType_presentationAttackData
 * @constant
 * @type {number}
 */
export
const presentationAttackData: number = BiometricType_presentationAttackData; /* SHORT_NAMED_INTEGER_VALUE */

export const _decode_BiometricType: $.ASN1Decoder<BiometricType> = (el: _Element) => {
    const value = $._decodeInteger(el);
    assertIntegerRange(value, 0, 16777215, "BiometricType");
    return value;
};

export
const _encode_BiometricType: $.ASN1Encoder<BiometricType> = $._encodeInteger;

/* eslint-enable */
