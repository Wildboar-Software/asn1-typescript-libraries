/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FingerPrintInformation_finger
 * @description
 * 
 * Finger for a fingerprint template. ISO/IEC 7816-15:2016 §8.9.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-finger ::= ENUMERATED {
 *     thumb,
 *     pointerFinger,
 *     middleFinger,
 *     ringFinger,
 *     littleFinger
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FingerPrintInformation_finger {
    thumb = 0,
    pointerFinger = 1,
    middleFinger = 2,
    ringFinger = 3,
    littleFinger = 4,
}

/**
 * @summary FingerPrintInformation_finger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-finger ::= ENUMERATED {
 *     thumb,
 *     pointerFinger,
 *     middleFinger,
 *     ringFinger,
 *     littleFinger
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FingerPrintInformation_finger = _enum_for_FingerPrintInformation_finger;

/**
 * @summary FingerPrintInformation_finger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation-finger ::= ENUMERATED {
 *     thumb,
 *     pointerFinger,
 *     middleFinger,
 *     ringFinger,
 *     littleFinger
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FingerPrintInformation_finger = _enum_for_FingerPrintInformation_finger;

/**
 * @summary FingerPrintInformation_finger_thumb
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_finger_thumb: FingerPrintInformation_finger = FingerPrintInformation_finger.thumb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thumb
 * @constant
 * @type {number}
 */
export
const thumb: FingerPrintInformation_finger = FingerPrintInformation_finger.thumb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FingerPrintInformation_finger_pointerFinger
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_finger_pointerFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.pointerFinger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pointerFinger
 * @constant
 * @type {number}
 */
export
const pointerFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.pointerFinger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FingerPrintInformation_finger_middleFinger
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_finger_middleFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.middleFinger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary middleFinger
 * @constant
 * @type {number}
 */
export
const middleFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.middleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FingerPrintInformation_finger_ringFinger
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_finger_ringFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.ringFinger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringFinger
 * @constant
 * @type {number}
 */
export
const ringFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.ringFinger; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FingerPrintInformation_finger_littleFinger
 * @constant
 * @type {number}
 */
export
const FingerPrintInformation_finger_littleFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.littleFinger; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary littleFinger
 * @constant
 * @type {number}
 */
export
const littleFinger: FingerPrintInformation_finger = FingerPrintInformation_finger.littleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FingerPrintInformation_finger = $._decodeEnumerated;
export const _encode_FingerPrintInformation_finger = $._encodeEnumerated;


/* eslint-enable */
