/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AuthenReasonSyntax
 * @description
 *
 * INTEGER, not ENUMERATED (unknown values possible). Notification parameter
 * for why authentication failed. `unknownUser`(0) is a named reason, not
 * "unspecified". `unrecognizedUser`(4) is a distinct code; X.530 does not
 * further define the difference. `inaccessiblePassword`(2) = password could
 * not be accessed; `passwordVerificationLoop`(3) = loop while verifying.
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
 * @description
 *
 * Named reason `0`, not "unspecified".
 *
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unknownUser: 0 = 0 satisfies AuthenReasonSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_unknownUser
 * @description
 *
 * Named reason `0`, not "unspecified".
 *
 * @constant
 * @type {number}
 */
export const unknownUser: 0 = AuthenReasonSyntax_unknownUser; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_incorrectPassword: 1 = 1 satisfies AuthenReasonSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const incorrectPassword: 1 = AuthenReasonSyntax_incorrectPassword; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @description
 *
 * Password could not be accessed (e.g. store unavailable).
 *
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_inaccessiblePassword: 2 = 2 satisfies AuthenReasonSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @description
 *
 * Password could not be accessed (e.g. store unavailable).
 *
 * @constant
 * @type {number}
 */
export const inaccessiblePassword: 2 = AuthenReasonSyntax_inaccessiblePassword; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @description
 *
 * Loop detected while verifying the password.
 *
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_passwordVerificationLoop: 3 = 3 satisfies AuthenReasonSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @description
 *
 * Loop detected while verifying the password.
 *
 * @constant
 * @type {number}
 */
export const passwordVerificationLoop: 3 = AuthenReasonSyntax_passwordVerificationLoop; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @description
 *
 * Distinct from `unknownUser`(0); X.530 does not further define the difference.
 *
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unrecognizedUser: 4 = 4 satisfies AuthenReasonSyntax; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @description
 *
 * Distinct from `unknownUser`(0); X.530 does not further define the difference.
 *
 * @constant
 * @type {number}
 */
export const unrecognizedUser: 4 = AuthenReasonSyntax_unrecognizedUser; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AuthenReasonSyntax: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AuthenReasonSyntax: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
