/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax */
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
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unknownUser */
/**
 * @summary AuthenReasonSyntax_unknownUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unknownUser: AuthenReasonSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unknownUser */

/* START_OF_SYMBOL_DEFINITION unknownUser */
/**
 * @summary AuthenReasonSyntax_unknownUser
 * @constant
 * @type {number}
 */
export const unknownUser: AuthenReasonSyntax = AuthenReasonSyntax_unknownUser; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownUser */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_incorrectPassword */
/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_incorrectPassword: AuthenReasonSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_incorrectPassword */

/* START_OF_SYMBOL_DEFINITION incorrectPassword */
/**
 * @summary AuthenReasonSyntax_incorrectPassword
 * @constant
 * @type {number}
 */
export const incorrectPassword: AuthenReasonSyntax = AuthenReasonSyntax_incorrectPassword; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION incorrectPassword */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_inaccessiblePassword */
/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_inaccessiblePassword: AuthenReasonSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_inaccessiblePassword */

/* START_OF_SYMBOL_DEFINITION inaccessiblePassword */
/**
 * @summary AuthenReasonSyntax_inaccessiblePassword
 * @constant
 * @type {number}
 */
export const inaccessiblePassword: AuthenReasonSyntax = AuthenReasonSyntax_inaccessiblePassword; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inaccessiblePassword */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_passwordVerificationLoop */
/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_passwordVerificationLoop: AuthenReasonSyntax = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_passwordVerificationLoop */

/* START_OF_SYMBOL_DEFINITION passwordVerificationLoop */
/**
 * @summary AuthenReasonSyntax_passwordVerificationLoop
 * @constant
 * @type {number}
 */
export const passwordVerificationLoop: AuthenReasonSyntax = AuthenReasonSyntax_passwordVerificationLoop; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION passwordVerificationLoop */

/* START_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unrecognizedUser */
/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @constant
 * @type {number}
 */
export const AuthenReasonSyntax_unrecognizedUser: AuthenReasonSyntax = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AuthenReasonSyntax_unrecognizedUser */

/* START_OF_SYMBOL_DEFINITION unrecognizedUser */
/**
 * @summary AuthenReasonSyntax_unrecognizedUser
 * @constant
 * @type {number}
 */
export const unrecognizedUser: AuthenReasonSyntax = AuthenReasonSyntax_unrecognizedUser; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedUser */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenReasonSyntax */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenReasonSyntax */
export const _decode_AuthenReasonSyntax = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenReasonSyntax */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenReasonSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenReasonSyntax */
export const _encode_AuthenReasonSyntax = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AuthenReasonSyntax */

/* eslint-enable */
