/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PredefinedBiometricType */
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
/* END_OF_SYMBOL_DEFINITION PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION PredefinedBiometricType_picture */
/**
 * @summary PredefinedBiometricType_picture
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_picture: PredefinedBiometricType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PredefinedBiometricType_picture */

/* START_OF_SYMBOL_DEFINITION picture */
/**
 * @summary PredefinedBiometricType_picture
 * @constant
 * @type {number}
 */
export const picture: PredefinedBiometricType = PredefinedBiometricType_picture; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION picture */

/* START_OF_SYMBOL_DEFINITION PredefinedBiometricType_handwritten_signature */
/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_handwritten_signature: PredefinedBiometricType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PredefinedBiometricType_handwritten_signature */

/* START_OF_SYMBOL_DEFINITION handwritten_signature */
/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @constant
 * @type {number}
 */
export const handwritten_signature: PredefinedBiometricType = PredefinedBiometricType_handwritten_signature; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION handwritten_signature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PredefinedBiometricType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION _decode_PredefinedBiometricType */
export const _decode_PredefinedBiometricType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PredefinedBiometricType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION _encode_PredefinedBiometricType */
export const _encode_PredefinedBiometricType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PredefinedBiometricType */

/* eslint-enable */
