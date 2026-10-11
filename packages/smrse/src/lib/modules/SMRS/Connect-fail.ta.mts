/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Connect_fail
 * @description
 *
 * Why `SMR-Bind-Failure` was returned.
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.2 defines values 0 to 4 and gives the meanings below.
 * The Nokia profile adds `inv-SC-addr` (5). Clause 3.2 spells the
 * names `temporary-overload`, `temporary-failure`, and
 * `incorrect-ID-or-password`.
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
 * @description
 *
 * The responder is not entitled to accept an association with the
 * initiator (clause 3.2).
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_not_entitled: Connect_fail = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_not_entitled
 * @description
 *
 * The responder is not entitled to accept an association with the
 * initiator (clause 3.2).
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
 * temporarily overloaded. Clause 3.2 names this
 * `temporary-overload`.
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_tmp_overload: Connect_fail = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_overload
 * @description
 *
 * The responder cannot establish the association because it is
 * temporarily overloaded. Clause 3.2 names this
 * `temporary-overload`.
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
 * The responder cannot establish the association because of a
 * temporary failure at SM-RL or in a layer above. Clause 3.2 names
 * this `temporary-failure`.
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_tmp_failure: Connect_fail = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_tmp_failure
 * @description
 *
 * The responder cannot establish the association because of a
 * temporary failure at SM-RL or in a layer above. Clause 3.2 names
 * this `temporary-failure`.
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
 * The responder rejects the association because the identity or
 * password is wrong. Clause 3.2 names this
 * `incorrect-ID-or-password`.
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_id_or_passwd: Connect_fail = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_id_or_passwd
 * @description
 *
 * The responder rejects the association because the identity or
 * password is wrong. Clause 3.2 names this
 * `incorrect-ID-or-password`.
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
 * The responder does not recognize the initiator's
 * telecommunication subsystem type, or cannot support any operation
 * suggested for the association (clause 3.2). This profile's
 * `SMR-Bind` carries neither a subsystem type nor an operation list.
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_not_supported: Connect_fail = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_not_supported
 * @description
 *
 * The responder does not recognize the initiator's
 * telecommunication subsystem type, or cannot support any operation
 * suggested for the association (clause 3.2). This profile's
 * `SMR-Bind` carries neither a subsystem type nor an operation list.
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
 * That service centre is not allowed to establish a connection.
 * Nokia profile addition. Clause 3.2's `Connect-failure` stops at
 * `not-supported` (4).
 *
 * @constant
 * @type {number}
 */
export
const Connect_fail_inv_SC_addr: Connect_fail = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Connect_fail_inv_SC_addr
 * @description
 *
 * That service centre is not allowed to establish a connection.
 * Nokia profile addition. Clause 3.2's `Connect-failure` stops at
 * `not-supported` (4).
 *
 * @constant
 * @type {number}
 */
export
const inv_SC_addr: Connect_fail = Connect_fail_inv_SC_addr; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Connect_fail = $._decodeInteger;
export const _encode_Connect_fail = $._encodeInteger;


/* eslint-enable */
