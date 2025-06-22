/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary BiometricFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricFlags  ::=  BIT STRING {
 *     local (1),
 *     change-disabled (2),
 *     unblock-disabled (3),
 *     initialized (4),
 *     disable-allowed (8),
 *     integrity-protected (9),
 *     confidentiality-protected (10)
 * }
 * ```
 */
export type BiometricFlags = BIT_STRING;


/**
 * @summary BiometricFlags_local
 * @constant
 */
export const BiometricFlags_local: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary local
 * @constant
 */
export const local: number = BiometricFlags_local; /* SHORT_NAMED_BIT */


/**
 * @summary BiometricFlags_change_disabled
 * @constant
 */
export const BiometricFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary change_disabled
 * @constant
 */
export const change_disabled: number = BiometricFlags_change_disabled; /* SHORT_NAMED_BIT */


/**
 * @summary BiometricFlags_unblock_disabled
 * @constant
 */
export const BiometricFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary unblock_disabled
 * @constant
 */
export const unblock_disabled: number = BiometricFlags_unblock_disabled; /* SHORT_NAMED_BIT */


/**
 * @summary BiometricFlags_initialized
 * @constant
 */
export const BiometricFlags_initialized: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary initialized
 * @constant
 */
export const initialized: number = BiometricFlags_initialized; /* SHORT_NAMED_BIT */


/**
 * @summary BiometricFlags_disable_allowed
 * @constant
 */
export const BiometricFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary disable_allowed
 * @constant
 */
export const disable_allowed: number = BiometricFlags_disable_allowed; /* SHORT_NAMED_BIT */


/**
 * @summary BiometricFlags_integrity_protected
 * @constant
 */
export const BiometricFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary integrity_protected
 * @constant
 */
export const integrity_protected: number = BiometricFlags_integrity_protected; /* SHORT_NAMED_BIT */


/**
 * @summary BiometricFlags_confidentiality_protected
 * @constant
 */
export const BiometricFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary confidentiality_protected
 * @constant
 */
export const confidentiality_protected: number = BiometricFlags_confidentiality_protected; /* SHORT_NAMED_BIT */




export const _decode_BiometricFlags = $._decodeBitString;




export const _encode_BiometricFlags = $._encodeBitString;


/* eslint-enable */
