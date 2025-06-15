/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SecurityProblem */
/**
 * @summary SecurityProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityProblem  ::=  INTEGER {
 *   inappropriateAuthentication     (1),
 *   invalidCredentials              (2),
 *   insufficientAccessRights        (3),
 *   invalidSignature                (4),
 *   protectionRequired              (5),
 *   noInformation                   (6),
 *   blockedCredentials              (7),
 *   -- invalidQOPMatch              (8), obsolete
 *   spkmError                       (9),
 *   unsupportedAuthenticationMethod (10),
 *   passwordExpired                 (11),
 *   inappropriateAlgorithms         (12) }
 * ```
 */
export type SecurityProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION SecurityProblem */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAuthentication */
/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export const SecurityProblem_inappropriateAuthentication: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAuthentication */

/* START_OF_SYMBOL_DEFINITION inappropriateAuthentication */
/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export const inappropriateAuthentication: SecurityProblem = SecurityProblem_inappropriateAuthentication; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inappropriateAuthentication */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_invalidCredentials */
/**
 * @summary SecurityProblem_invalidCredentials
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalidCredentials: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_invalidCredentials */

/* START_OF_SYMBOL_DEFINITION invalidCredentials */
/**
 * @summary SecurityProblem_invalidCredentials
 * @constant
 * @type {number}
 */
export const invalidCredentials: SecurityProblem = SecurityProblem_invalidCredentials; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidCredentials */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_insufficientAccessRights */
/**
 * @summary SecurityProblem_insufficientAccessRights
 * @constant
 * @type {number}
 */
export const SecurityProblem_insufficientAccessRights: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_insufficientAccessRights */

/* START_OF_SYMBOL_DEFINITION insufficientAccessRights */
/**
 * @summary SecurityProblem_insufficientAccessRights
 * @constant
 * @type {number}
 */
export const insufficientAccessRights: SecurityProblem = SecurityProblem_insufficientAccessRights; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION insufficientAccessRights */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_invalidSignature */
/**
 * @summary SecurityProblem_invalidSignature
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalidSignature: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_invalidSignature */

/* START_OF_SYMBOL_DEFINITION invalidSignature */
/**
 * @summary SecurityProblem_invalidSignature
 * @constant
 * @type {number}
 */
export const invalidSignature: SecurityProblem = SecurityProblem_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSignature */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_protectionRequired */
/**
 * @summary SecurityProblem_protectionRequired
 * @constant
 * @type {number}
 */
export const SecurityProblem_protectionRequired: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_protectionRequired */

/* START_OF_SYMBOL_DEFINITION protectionRequired */
/**
 * @summary SecurityProblem_protectionRequired
 * @constant
 * @type {number}
 */
export const protectionRequired: SecurityProblem = SecurityProblem_protectionRequired; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION protectionRequired */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_noInformation */
/**
 * @summary SecurityProblem_noInformation
 * @constant
 * @type {number}
 */
export const SecurityProblem_noInformation: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_noInformation */

/* START_OF_SYMBOL_DEFINITION noInformation */
/**
 * @summary SecurityProblem_noInformation
 * @constant
 * @type {number}
 */
export const noInformation: SecurityProblem = SecurityProblem_noInformation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noInformation */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_blockedCredentials */
/**
 * @summary SecurityProblem_blockedCredentials
 * @constant
 * @type {number}
 */
export const SecurityProblem_blockedCredentials: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_blockedCredentials */

/* START_OF_SYMBOL_DEFINITION blockedCredentials */
/**
 * @summary SecurityProblem_blockedCredentials
 * @constant
 * @type {number}
 */
export const blockedCredentials: SecurityProblem = SecurityProblem_blockedCredentials; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION blockedCredentials */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_spkmError */
/**
 * @summary SecurityProblem_spkmError
 * @constant
 * @type {number}
 */
export const SecurityProblem_spkmError: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_spkmError */

/* START_OF_SYMBOL_DEFINITION spkmError */
/**
 * @summary SecurityProblem_spkmError
 * @constant
 * @type {number}
 */
export const spkmError: SecurityProblem = SecurityProblem_spkmError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION spkmError */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unsupportedAuthenticationMethod */
/**
 * @summary SecurityProblem_unsupportedAuthenticationMethod
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupportedAuthenticationMethod: SecurityProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unsupportedAuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION unsupportedAuthenticationMethod */
/**
 * @summary SecurityProblem_unsupportedAuthenticationMethod
 * @constant
 * @type {number}
 */
export const unsupportedAuthenticationMethod: SecurityProblem = SecurityProblem_unsupportedAuthenticationMethod; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedAuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_passwordExpired */
/**
 * @summary SecurityProblem_passwordExpired
 * @constant
 * @type {number}
 */
export const SecurityProblem_passwordExpired: SecurityProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_passwordExpired */

/* START_OF_SYMBOL_DEFINITION passwordExpired */
/**
 * @summary SecurityProblem_passwordExpired
 * @constant
 * @type {number}
 */
export const passwordExpired: SecurityProblem = SecurityProblem_passwordExpired; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION passwordExpired */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAlgorithms */
/**
 * @summary SecurityProblem_inappropriateAlgorithms
 * @constant
 * @type {number}
 */
export const SecurityProblem_inappropriateAlgorithms: SecurityProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAlgorithms */

/* START_OF_SYMBOL_DEFINITION inappropriateAlgorithms */
/**
 * @summary SecurityProblem_inappropriateAlgorithms
 * @constant
 * @type {number}
 */
export const inappropriateAlgorithms: SecurityProblem = SecurityProblem_inappropriateAlgorithms; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inappropriateAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityProblem */
export const _decode_SecurityProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityProblem */
export const _encode_SecurityProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityProblem */

/* eslint-enable */
