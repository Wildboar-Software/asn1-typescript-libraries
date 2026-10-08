/* eslint-disable */
import {
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
 *
 * Why `SMR-Bind-Failure` was returned (clauses 2.2 and 3.2). The report
 * spells these `not-entitled`, `temporary-overload`,
 * `temporary-failure`, `incorrect-ID-or-password`, and `not-supported`.
 * This module shortens those names and adds `inv-SC-addr` (5), which
 * the report does not define.
 */
export
type Connect_fail = INTEGER;

/**
 * @summary Connect_fail_not_entitled
 * @description
 *
 * The responder is not entitled to accept an association between itself
 * and the initiator (`not-entitled` in clause 2.2).
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_not_entitled: Connect_fail = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `not_entitled`.
 * @description
 *
 * The responder is not entitled to accept the association. Same value
 * as {@link Connect_fail_not_entitled}.
 *
 * @constant
 * @type {number}
 */
export
const not_entitled: Connect_fail = Connect_fail_not_entitled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_overload
 * @description
 *
 * The responder cannot establish the association because it is
 * temporarily overloaded (`temporary-overload` in clause 2.2).
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_tmp_overload: Connect_fail = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `tmp_overload`.
 * @description
 *
 * Temporary overload. Same value as {@link Connect_fail_tmp_overload}.
 *
 * @constant
 * @type {number}
 */
export
const tmp_overload: Connect_fail = Connect_fail_tmp_overload; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_failure
 * @description
 *
 * The responder cannot establish the association because of a temporary
 * failure that affects an entity at the SM-RL or above
 * (`temporary-failure` in clause 2.2).
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_tmp_failure: Connect_fail = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `tmp_failure`.
 * @description
 *
 * Temporary failure at the SM-RL or above. Same value as
 * {@link Connect_fail_tmp_failure}.
 *
 * @constant
 * @type {number}
 */
export
const tmp_failure: Connect_fail = Connect_fail_tmp_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_id_or_passwd
 * @description
 *
 * The responder rejects the association because the identity or the
 * password is wrong (`incorrect-ID-or-password` in clause 2.2).
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_id_or_passwd: Connect_fail = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `id_or_passwd`.
 * @description
 *
 * Incorrect identity or password. Same value as
 * {@link Connect_fail_id_or_passwd}.
 *
 * @constant
 * @type {number}
 */
export
const id_or_passwd: Connect_fail = Connect_fail_id_or_passwd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_not_supported
 * @description
 *
 * The responder does not recognize the initiator's telecommunication
 * subsystem type, or cannot support any of the operations proposed for
 * the association (`not-supported` in clause 2.2). This module's
 * `SMR-Bind` does not carry a system type or an operations list, so
 * the report does not say which check produces this cause here.
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_not_supported: Connect_fail = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `not_supported`.
 * @description
 *
 * Initiator type or proposed operations are not supported. Same value
 * as {@link Connect_fail_not_supported}.
 *
 * @constant
 * @type {number}
 */
export
const not_supported: Connect_fail = Connect_fail_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_inv_SC_addr
 * @description
 *
 * The addressed SC is not allowed to establish the connection. Not
 * defined in TR 101 635. The SMRP profile this module follows adds it
 * with that meaning.
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_inv_SC_addr: Connect_fail = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `inv_SC_addr`.
 * @description
 *
 * The addressed SC is not allowed to establish the connection. Same
 * value as {@link Connect_fail_inv_SC_addr}. Not in TR 101 635.
 *
 * @constant
 * @type {number}
 */
export
const inv_SC_addr: Connect_fail = Connect_fail_inv_SC_addr; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Connect_fail = $._decodeInteger;
export const _encode_Connect_fail = $._encodeInteger;


/* eslint-enable */
