/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PredefinedBiometricType
 * @description
 *
 * Predefined biometric type integers for `TypeOfBiometricData`
 * ([RFC 3739 §3.2.5](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.5)).
 * Extensible (`...`); currently `picture(0)` and
 * `handwritten-signature(1)`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PredefinedBiometricType  ::=  INTEGER {
 *     picture(0), handwritten-signature(1)}
 *     (picture|handwritten-signature,...)
 * ```
 */
export type PredefinedBiometricType = INTEGER;


/**
 * @summary PredefinedBiometricType_picture
 * @description
 *
 * Source is a displayable graphical image of the subject; the hash
 * SHALL be calculated over the whole referenced image file
 * ([RFC 3739 §3.2.5](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.5)).
 *
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_picture: PredefinedBiometricType = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PredefinedBiometricType_picture
 * @description
 *
 * Short name for `picture(0)`
 * ([RFC 3739 §3.2.5](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.5)).
 *
 * @constant
 * @type {number}
 */
export const picture: PredefinedBiometricType = PredefinedBiometricType_picture; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @description
 *
 * Source is a displayable graphical image of the subject's handwritten
 * signature; the hash SHALL be calculated over the whole referenced
 * image file
 * ([RFC 3739 §3.2.5](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.5)).
 *
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_handwritten_signature: PredefinedBiometricType = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @description
 *
 * Short name for `handwritten-signature(1)`
 * ([RFC 3739 §3.2.5](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.5)).
 *
 * @constant
 * @type {number}
 */
export const handwritten_signature: PredefinedBiometricType = PredefinedBiometricType_handwritten_signature; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PredefinedBiometricType = $._decodeInteger;




export const _encode_PredefinedBiometricType = $._encodeInteger;


/* eslint-enable */
