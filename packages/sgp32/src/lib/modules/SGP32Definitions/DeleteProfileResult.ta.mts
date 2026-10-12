/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteProfileResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInDisabledState(2),
 *     disallowedByPolicy(3),
 *     rollbackNotAvailable(20),
 *     returnFallbackProfile(21),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type DeleteProfileResult = INTEGER;

/**
 * @summary DeleteProfileResult_ok
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_ok: DeleteProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DeleteProfileResult = DeleteProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_iccidOrAidNotFound: DeleteProfileResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DeleteProfileResult = DeleteProfileResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_profileNotInDisabledState: DeleteProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: DeleteProfileResult = DeleteProfileResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_disallowedByPolicy: DeleteProfileResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DeleteProfileResult = DeleteProfileResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_rollbackNotAvailable
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_rollbackNotAvailable: DeleteProfileResult = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_rollbackNotAvailable
 * @constant
 * @type {number}
 */
export
const rollbackNotAvailable: DeleteProfileResult = DeleteProfileResult_rollbackNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_returnFallbackProfile
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_returnFallbackProfile: DeleteProfileResult = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_returnFallbackProfile
 * @constant
 * @type {number}
 */
export
const returnFallbackProfile: DeleteProfileResult = DeleteProfileResult_returnFallbackProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_undefinedError: DeleteProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DeleteProfileResult = DeleteProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteProfileResult: $.ASN1Decoder<DeleteProfileResult> = $._decodeInteger;
export const _encode_DeleteProfileResult: $.ASN1Encoder<DeleteProfileResult> = $._encodeInteger;


/* eslint-enable */
