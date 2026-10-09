/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteProfileResponse_deleteResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteProfileResponse-deleteResult ::= INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInDisabledState(2),
 *     disallowedByPolicy(3),
 *     undefinedError(127)
 * }
 * ```
 */
export
type DeleteProfileResponse_deleteResult = INTEGER;

/**
 * @summary DeleteProfileResponse_deleteResult_ok
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_ok: DeleteProfileResponse_deleteResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_iccidOrAidNotFound: DeleteProfileResponse_deleteResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_profileNotInDisabledState: DeleteProfileResponse_deleteResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_disallowedByPolicy: DeleteProfileResponse_deleteResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_undefinedError: DeleteProfileResponse_deleteResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteProfileResponse_deleteResult = $._decodeInteger;
export const _encode_DeleteProfileResponse_deleteResult = $._encodeInteger;


/* eslint-enable */
