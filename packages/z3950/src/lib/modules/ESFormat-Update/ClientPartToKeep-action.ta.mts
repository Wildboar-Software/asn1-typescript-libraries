/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartToKeep_action
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-action ::= INTEGER {
 *     recordInsert (1),
 *     recordReplace (2),
 *     recordDelete (3),
 *     elementUpdate (4)
 * }
 * ```
 */
export
type ClientPartToKeep_action = INTEGER;

/**
 * @summary ClientPartToKeep_action_recordInsert
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordInsert: ClientPartToKeep_action = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordInsert
 * @constant
 * @type {number}
 */
export
const recordInsert: ClientPartToKeep_action = ClientPartToKeep_action_recordInsert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordReplace
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordReplace: ClientPartToKeep_action = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordReplace
 * @constant
 * @type {number}
 */
export
const recordReplace: ClientPartToKeep_action = ClientPartToKeep_action_recordReplace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordDelete
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordDelete: ClientPartToKeep_action = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordDelete
 * @constant
 * @type {number}
 */
export
const recordDelete: ClientPartToKeep_action = ClientPartToKeep_action_recordDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_elementUpdate
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_elementUpdate: ClientPartToKeep_action = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_elementUpdate
 * @constant
 * @type {number}
 */
export
const elementUpdate: ClientPartToKeep_action = ClientPartToKeep_action_elementUpdate; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ClientPartToKeep_action = $._decodeInteger;
export const _encode_ClientPartToKeep_action = $._encodeInteger;


/* eslint-enable */
