/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PredefinedBiometricType
 * @description
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
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_picture: PredefinedBiometricType = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PredefinedBiometricType_picture
 * @constant
 * @type {number}
 */
export const picture: PredefinedBiometricType = PredefinedBiometricType_picture; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_handwritten_signature: PredefinedBiometricType = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @constant
 * @type {number}
 */
export const handwritten_signature: PredefinedBiometricType = PredefinedBiometricType_handwritten_signature; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PredefinedBiometricType = $._decodeInteger;




export const _encode_PredefinedBiometricType = $._encodeInteger;


/* eslint-enable */
