/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * The Stored-message entry-class contains entries which represent complete messages,
 * reports, probes, and draft messages for an unrestricted range of content-types. See
 * ITU-T X.413 (1999), §6.
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
export const EntryClass_delivery: 0 = 0 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_delivery
 * @constant
 * @type {number}
 */
export const delivery: 0 = EntryClass_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission
 * @constant
 * @type {number}
 */
export const EntryClass_submission: 1 = 1 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission
 * @constant
 * @type {number}
 */
export const submission: 1 = EntryClass_submission; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_draft
 * @constant
 * @type {number}
 */
export const EntryClass_draft: 2 = 2 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_draft
 * @constant
 * @type {number}
 */
export const draft: 2 = EntryClass_draft; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_stored_message
 * @constant
 * @type {number}
 */
export const EntryClass_stored_message: 3 = 3 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_stored_message
 * @constant
 * @type {number}
 */
export const stored_message: 3 = EntryClass_stored_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_delivery_log
 * @constant
 * @type {number}
 */
export const EntryClass_delivery_log: 4 = 4 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_delivery_log
 * @constant
 * @type {number}
 */
export const delivery_log: 4 = EntryClass_delivery_log; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission_log
 * @constant
 * @type {number}
 */
export const EntryClass_submission_log: 5 = 5 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_submission_log
 * @constant
 * @type {number}
 */
export const submission_log: 5 = EntryClass_submission_log; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_message_log
 * @constant
 * @type {number}
 */
export const EntryClass_message_log: 6 = 6 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_message_log
 * @constant
 * @type {number}
 */
export const message_log: 6 = EntryClass_message_log; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_auto_action_log
 * @constant
 * @type {number}
 */
export const EntryClass_auto_action_log: 7 = 7 satisfies EntryClass; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryClass_auto_action_log
 * @constant
 * @type {number}
 */
export const auto_action_log: 7 = EntryClass_auto_action_log; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_EntryClass: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_EntryClass: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
