/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecurityProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityProblem  ::=  INTEGER {
 *   inappropriateAuthentication(1), invalidCredentials(2),
 *   insufficientAccessRights(3), invalidSignature(4), protectionRequired(5),
 *   noInformation(6), blockedCredentials(7), invalidQOPMatch(8), spkmError(9)
 * }
 * ```
 */
export
type SecurityProblem = INTEGER;

/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export
const SecurityProblem_inappropriateAuthentication: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export
const inappropriateAuthentication: SecurityProblem = SecurityProblem_inappropriateAuthentication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidCredentials
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalidCredentials: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidCredentials
 * @constant
 * @type {number}
 */
export
const invalidCredentials: SecurityProblem = SecurityProblem_invalidCredentials; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_insufficientAccessRights
 * @constant
 * @type {number}
 */
export
const SecurityProblem_insufficientAccessRights: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_insufficientAccessRights
 * @constant
 * @type {number}
 */
export
const insufficientAccessRights: SecurityProblem = SecurityProblem_insufficientAccessRights; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidSignature
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalidSignature: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidSignature
 * @constant
 * @type {number}
 */
export
const invalidSignature: SecurityProblem = SecurityProblem_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_protectionRequired
 * @constant
 * @type {number}
 */
export
const SecurityProblem_protectionRequired: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_protectionRequired
 * @constant
 * @type {number}
 */
export
const protectionRequired: SecurityProblem = SecurityProblem_protectionRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_noInformation
 * @constant
 * @type {number}
 */
export
const SecurityProblem_noInformation: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_noInformation
 * @constant
 * @type {number}
 */
export
const noInformation: SecurityProblem = SecurityProblem_noInformation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_blockedCredentials
 * @constant
 * @type {number}
 */
export
const SecurityProblem_blockedCredentials: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_blockedCredentials
 * @constant
 * @type {number}
 */
export
const blockedCredentials: SecurityProblem = SecurityProblem_blockedCredentials; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidQOPMatch
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalidQOPMatch: SecurityProblem = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidQOPMatch
 * @constant
 * @type {number}
 */
export
const invalidQOPMatch: SecurityProblem = SecurityProblem_invalidQOPMatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_spkmError
 * @constant
 * @type {number}
 */
export
const SecurityProblem_spkmError: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_spkmError
 * @constant
 * @type {number}
 */
export
const spkmError: SecurityProblem = SecurityProblem_spkmError; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SecurityProblem: $.ASN1Decoder<SecurityProblem> = $._decodeInteger;

export
const _encode_SecurityProblem: $.ASN1Encoder<SecurityProblem> = $._encodeInteger;

/* eslint-enable */
