/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConfigAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigAction  ::=  INTEGER {
 *     ca-cfg-get          (0),
 *     ca-cfg-set          (1),
 *     ca-cfg-replicate    (2),
 *     ca-cfg-ac           (3),
 *     ca-cfg-result       (4),
 *     ca-cfg-user-login   (5),
 *     ca-cfg-user-logout  (6)
 * }
 * ```
 */
export
type ConfigAction = INTEGER;

/**
 * @summary ConfigAction_ca_cfg_get
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_get = 0 satisfies ConfigAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_get
 * @constant
 * @type {number}
 */
export
const ca_cfg_get = ConfigAction_ca_cfg_get; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_set
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_set = 1 satisfies ConfigAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_set
 * @constant
 * @type {number}
 */
export
const ca_cfg_set = ConfigAction_ca_cfg_set; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_replicate
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_replicate = 2 satisfies ConfigAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_replicate
 * @constant
 * @type {number}
 */
export
const ca_cfg_replicate = ConfigAction_ca_cfg_replicate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_ac
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_ac = 3 satisfies ConfigAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_ac
 * @constant
 * @type {number}
 */
export
const ca_cfg_ac = ConfigAction_ca_cfg_ac; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_result
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_result = 4 satisfies ConfigAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_result
 * @constant
 * @type {number}
 */
export
const ca_cfg_result = ConfigAction_ca_cfg_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_login
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_user_login = 5 satisfies ConfigAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_login
 * @constant
 * @type {number}
 */
export
const ca_cfg_user_login = ConfigAction_ca_cfg_user_login; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_logout
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_user_logout = 6 satisfies ConfigAction; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_logout
 * @constant
 * @type {number}
 */
export
const ca_cfg_user_logout = ConfigAction_ca_cfg_user_logout; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConfigAction = $._decodeInteger;
export const _encode_ConfigAction = $._encodeInteger;


/* eslint-enable */
