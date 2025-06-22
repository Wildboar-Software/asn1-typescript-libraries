/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EntryClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryClass  ::=  INTEGER {
 *   delivery(0),
 *   -- 1994 extensions
 *   submission(1), draft(2), stored-message(3), delivery-log(4),
 *   submission-log(5), message-log(6), auto-action-log(7)}(0..ub-entry-classes)
 * ```
 */
export type EntryClass = INTEGER;

/**
 * @summary EntryClass_delivery
 * @constant
 * @type {number}
 */
export const EntryClass_delivery: EntryClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_delivery
 * @constant
 * @type {number}
 */
export const delivery: EntryClass = EntryClass_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission
 * @constant
 * @type {number}
 */
export const EntryClass_submission: EntryClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission
 * @constant
 * @type {number}
 */
export const submission: EntryClass = EntryClass_submission; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_draft
 * @constant
 * @type {number}
 */
export const EntryClass_draft: EntryClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_draft
 * @constant
 * @type {number}
 */
export const draft: EntryClass = EntryClass_draft; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_stored_message
 * @constant
 * @type {number}
 */
export const EntryClass_stored_message: EntryClass = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_stored_message
 * @constant
 * @type {number}
 */
export const stored_message: EntryClass = EntryClass_stored_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_delivery_log
 * @constant
 * @type {number}
 */
export const EntryClass_delivery_log: EntryClass = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_delivery_log
 * @constant
 * @type {number}
 */
export const delivery_log: EntryClass = EntryClass_delivery_log; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission_log
 * @constant
 * @type {number}
 */
export const EntryClass_submission_log: EntryClass = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission_log
 * @constant
 * @type {number}
 */
export const submission_log: EntryClass = EntryClass_submission_log; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_message_log
 * @constant
 * @type {number}
 */
export const EntryClass_message_log: EntryClass = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_message_log
 * @constant
 * @type {number}
 */
export const message_log: EntryClass = EntryClass_message_log; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_auto_action_log
 * @constant
 * @type {number}
 */
export const EntryClass_auto_action_log: EntryClass = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_auto_action_log
 * @constant
 * @type {number}
 */
export const auto_action_log: EntryClass = EntryClass_auto_action_log; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_EntryClass = $._decodeInteger;


export const _encode_EntryClass = $._encodeInteger;


/* eslint-enable */
