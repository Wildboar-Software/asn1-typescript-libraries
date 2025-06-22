/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthenReasonSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenReasonSyntax  ::=  INTEGER {
 *   unknownUser(0), incorrectPassword(1), inaccessiblePassword(2),
 *   passwordVerificationLoop(3), unrecognizedUser(4)}
 * ```
 */
export type AuthenReasonSyntax = INTEGER;

/**
 * @summary AuthenReasonSyntax_unknownUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unknownUser: AuthenReasonSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_unknownUser
 * @constant
 * @type {number}
 */
export const unknownUser: AuthenReasonSyntax = AuthenReasonSyntax_unknownUser; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_incorrectPassword: AuthenReasonSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const incorrectPassword: AuthenReasonSyntax = AuthenReasonSyntax_incorrectPassword; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_inaccessiblePassword: AuthenReasonSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @constant
 * @type {number}
 */
export const inaccessiblePassword: AuthenReasonSyntax = AuthenReasonSyntax_inaccessiblePassword; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_passwordVerificationLoop: AuthenReasonSyntax = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @constant
 * @type {number}
 */
export const passwordVerificationLoop: AuthenReasonSyntax = AuthenReasonSyntax_passwordVerificationLoop; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unrecognizedUser: AuthenReasonSyntax = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @constant
 * @type {number}
 */
export const unrecognizedUser: AuthenReasonSyntax = AuthenReasonSyntax_unrecognizedUser; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AuthenReasonSyntax = $._decodeInteger;


export const _encode_AuthenReasonSyntax = $._encodeInteger;


/* eslint-enable */
