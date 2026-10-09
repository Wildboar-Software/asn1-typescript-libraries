/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PromptId_enummeratedPrompt_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptId-enummeratedPrompt-type ::= INTEGER {
 *     groupId (0),
 *     userId (1),
 *     password (2),
 *     newPassword (3),
 *     copyright (4),
 *     -- See comment 7
 *     sessionId (5)
 * }
 * ```
 */
export
type PromptId_enummeratedPrompt_type = INTEGER;

/**
 * @summary PromptId_enummeratedPrompt_type_groupId
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_groupId: PromptId_enummeratedPrompt_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_groupId
 * @constant
 * @type {number}
 */
export
const groupId: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_groupId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_userId
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_userId: PromptId_enummeratedPrompt_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_userId
 * @constant
 * @type {number}
 */
export
const userId: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_userId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_password
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_password: PromptId_enummeratedPrompt_type = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_password
 * @constant
 * @type {number}
 */
export
const password: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_password; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_newPassword
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_newPassword: PromptId_enummeratedPrompt_type = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_newPassword
 * @constant
 * @type {number}
 */
export
const newPassword: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_newPassword; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_copyright
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_copyright: PromptId_enummeratedPrompt_type = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_copyright
 * @constant
 * @type {number}
 */
export
const copyright: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_copyright; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_sessionId
 * @constant
 * @type {number}
 */
export
const PromptId_enummeratedPrompt_type_sessionId: PromptId_enummeratedPrompt_type = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PromptId_enummeratedPrompt_type_sessionId
 * @constant
 * @type {number}
 */
export
const sessionId: PromptId_enummeratedPrompt_type = PromptId_enummeratedPrompt_type_sessionId; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PromptId_enummeratedPrompt_type = $._decodeInteger;
export const _encode_PromptId_enummeratedPrompt_type = $._encodeInteger;


/* eslint-enable */
