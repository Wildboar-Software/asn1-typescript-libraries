/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
const ConfigAction_ca_cfg_get: ConfigAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_get
 * @constant
 * @type {number}
 */
export
const ca_cfg_get: ConfigAction = ConfigAction_ca_cfg_get; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_set
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_set: ConfigAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_set
 * @constant
 * @type {number}
 */
export
const ca_cfg_set: ConfigAction = ConfigAction_ca_cfg_set; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_replicate
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_replicate: ConfigAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_replicate
 * @constant
 * @type {number}
 */
export
const ca_cfg_replicate: ConfigAction = ConfigAction_ca_cfg_replicate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_ac
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_ac: ConfigAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_ac
 * @constant
 * @type {number}
 */
export
const ca_cfg_ac: ConfigAction = ConfigAction_ca_cfg_ac; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_result
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_result: ConfigAction = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_result
 * @constant
 * @type {number}
 */
export
const ca_cfg_result: ConfigAction = ConfigAction_ca_cfg_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_login
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_user_login: ConfigAction = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_login
 * @constant
 * @type {number}
 */
export
const ca_cfg_user_login: ConfigAction = ConfigAction_ca_cfg_user_login; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_logout
 * @constant
 * @type {number}
 */
export
const ConfigAction_ca_cfg_user_logout: ConfigAction = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigAction_ca_cfg_user_logout
 * @constant
 * @type {number}
 */
export
const ca_cfg_user_logout: ConfigAction = ConfigAction_ca_cfg_user_logout; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConfigAction = $._decodeInteger;
export const _encode_ConfigAction = $._encodeInteger;


/* eslint-enable */
