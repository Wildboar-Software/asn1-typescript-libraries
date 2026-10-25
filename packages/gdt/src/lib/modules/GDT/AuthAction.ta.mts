/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthAction  ::=  INTEGER {
 *     aa-auth-request (0),
 *     aa-auth-result  (1)
 * }
 * ```
 */
export
type AuthAction = INTEGER;

/**
 * @summary AuthAction_aa_auth_request
 * @constant
 * @type {number}
 */
export
const AuthAction_aa_auth_request: 0 = 0 satisfies AuthAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAction_aa_auth_request
 * @constant
 * @type {number}
 */
export
const aa_auth_request: 0 = AuthAction_aa_auth_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAction_aa_auth_result
 * @constant
 * @type {number}
 */
export
const AuthAction_aa_auth_result: 1 = 1 satisfies AuthAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthAction_aa_auth_result
 * @constant
 * @type {number}
 */
export
const aa_auth_result: 1 = AuthAction_aa_auth_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthAction: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_AuthAction: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
