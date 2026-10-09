/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetNicknameResponse_setNicknameResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetNicknameResponse-setNicknameResult ::= INTEGER {
 *     ok(0),
 *     iccidNotFound(1),
 *     undefinedError(127)
 * }
 * ```
 */
export
type SetNicknameResponse_setNicknameResult = INTEGER;

/**
 * @summary SetNicknameResponse_setNicknameResult_ok
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_ok: SetNicknameResponse_setNicknameResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_ok
 * @constant
 * @type {number}
 */
export
const ok: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_iccidNotFound
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_iccidNotFound: SetNicknameResponse_setNicknameResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_iccidNotFound
 * @constant
 * @type {number}
 */
export
const iccidNotFound: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_iccidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_undefinedError
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_undefinedError: SetNicknameResponse_setNicknameResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetNicknameResponse_setNicknameResult = $._decodeInteger;
export const _encode_SetNicknameResponse_setNicknameResult = $._encodeInteger;


/* eslint-enable */
