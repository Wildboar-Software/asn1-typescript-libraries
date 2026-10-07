/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Connect_fail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Connect-fail  ::=  INTEGER {
 *     not-entitled (0),
 *     tmp-overload (1),
 *     tmp-failure (2),
 *     id-or-passwd (3),
 *     not-supported (4),
 *     inv-SC-addr (5)
 * }
 * ```
 */
export
type Connect_fail = INTEGER;

/**
 * @summary Connect_fail_not_entitled
 * @constant
 * @type {number}
 */
export
const Connect_fail_not_entitled: Connect_fail = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_not_entitled
 * @constant
 * @type {number}
 */
export
const not_entitled: Connect_fail = Connect_fail_not_entitled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_overload
 * @constant
 * @type {number}
 */
export
const Connect_fail_tmp_overload: Connect_fail = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_overload
 * @constant
 * @type {number}
 */
export
const tmp_overload: Connect_fail = Connect_fail_tmp_overload; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_failure
 * @constant
 * @type {number}
 */
export
const Connect_fail_tmp_failure: Connect_fail = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_failure
 * @constant
 * @type {number}
 */
export
const tmp_failure: Connect_fail = Connect_fail_tmp_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_id_or_passwd
 * @constant
 * @type {number}
 */
export
const Connect_fail_id_or_passwd: Connect_fail = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_id_or_passwd
 * @constant
 * @type {number}
 */
export
const id_or_passwd: Connect_fail = Connect_fail_id_or_passwd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_not_supported
 * @constant
 * @type {number}
 */
export
const Connect_fail_not_supported: Connect_fail = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_not_supported
 * @constant
 * @type {number}
 */
export
const not_supported: Connect_fail = Connect_fail_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_inv_SC_addr
 * @constant
 * @type {number}
 */
export
const Connect_fail_inv_SC_addr: Connect_fail = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_inv_SC_addr
 * @constant
 * @type {number}
 */
export
const inv_SC_addr: Connect_fail = Connect_fail_inv_SC_addr; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Connect_fail = $._decodeInteger;
export const _encode_Connect_fail = $._encodeInteger;


/* eslint-enable */
