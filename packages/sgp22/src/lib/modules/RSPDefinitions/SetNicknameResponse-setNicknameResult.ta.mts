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
 * `ok` (0), `iccidNotFound` (1), or `undefinedError` (127). SGP.22 v3.1
 * §5.7.21.
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
 * @description
 * 
 * The nickname was stored. SGP.22 v3.1 §5.7.21.
 * 
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_ok: SetNicknameResponse_setNicknameResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_ok
 * @description
 * 
 * The nickname was stored. SGP.22 v3.1 §5.7.21.
 * 
 * @constant
 * @type {number}
 */
export
const ok: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_iccidNotFound
 * @description
 * 
 * No installed Profile has that ICCID. SGP.22 v3.1 §5.7.21.
 * 
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_iccidNotFound: SetNicknameResponse_setNicknameResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_iccidNotFound
 * @description
 * 
 * No installed Profile has that ICCID. SGP.22 v3.1 §5.7.21.
 * 
 * @constant
 * @type {number}
 */
export
const iccidNotFound: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_iccidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_undefinedError
 * @description
 * 
 * SetNickname failed for another reason. SGP.22 v3.1 §5.7.21.
 * 
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_undefinedError: SetNicknameResponse_setNicknameResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_undefinedError
 * @description
 * 
 * SetNickname failed for another reason. SGP.22 v3.1 §5.7.21.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetNicknameResponse_setNicknameResult = $._decodeInteger;
export const _encode_SetNicknameResponse_setNicknameResult = $._encodeInteger;


/* eslint-enable */
