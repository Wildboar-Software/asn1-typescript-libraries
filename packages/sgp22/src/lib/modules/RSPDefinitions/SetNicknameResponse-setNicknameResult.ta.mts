/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
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
const SetNicknameResponse_setNicknameResult_ok = 0 satisfies SetNicknameResponse_setNicknameResult; /* LONG_NAMED_INTEGER_VALUE */

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
const ok = SetNicknameResponse_setNicknameResult_ok satisfies SetNicknameResponse_setNicknameResult; /* SHORT_NAMED_INTEGER_VALUE */

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
const SetNicknameResponse_setNicknameResult_iccidNotFound = 1 satisfies SetNicknameResponse_setNicknameResult; /* LONG_NAMED_INTEGER_VALUE */

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
const iccidNotFound = SetNicknameResponse_setNicknameResult_iccidNotFound satisfies SetNicknameResponse_setNicknameResult; /* SHORT_NAMED_INTEGER_VALUE */

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
const SetNicknameResponse_setNicknameResult_undefinedError = 127 satisfies SetNicknameResponse_setNicknameResult; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedError = SetNicknameResponse_setNicknameResult_undefinedError satisfies SetNicknameResponse_setNicknameResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetNicknameResponse_setNicknameResult = $._decodeInteger;
export const _encode_SetNicknameResponse_setNicknameResult = $._encodeInteger;


/* eslint-enable */
