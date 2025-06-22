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
 * @summary EntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryType  ::=  INTEGER {
 *   delivered-message(0), delivered-report(1),
 *   returned-content(2),
 *   -- 1994 extensions
 *   submitted-message(3), submitted-probe(4), draft-message(5),
 *   auto-action-event(6)}
 * ```
 */
export type EntryType = INTEGER;

/**
 * @summary EntryType_delivered_message
 * @constant
 * @type {number}
 */
export const EntryType_delivered_message: EntryType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_delivered_message
 * @constant
 * @type {number}
 */
export const delivered_message: EntryType = EntryType_delivered_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_delivered_report
 * @constant
 * @type {number}
 */
export const EntryType_delivered_report: EntryType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_delivered_report
 * @constant
 * @type {number}
 */
export const delivered_report: EntryType = EntryType_delivered_report; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_returned_content
 * @constant
 * @type {number}
 */
export const EntryType_returned_content: EntryType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_returned_content
 * @constant
 * @type {number}
 */
export const returned_content: EntryType = EntryType_returned_content; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_message
 * @constant
 * @type {number}
 */
export const EntryType_submitted_message: EntryType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_message
 * @constant
 * @type {number}
 */
export const submitted_message: EntryType = EntryType_submitted_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_probe
 * @constant
 * @type {number}
 */
export const EntryType_submitted_probe: EntryType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_probe
 * @constant
 * @type {number}
 */
export const submitted_probe: EntryType = EntryType_submitted_probe; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_draft_message
 * @constant
 * @type {number}
 */
export const EntryType_draft_message: EntryType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_draft_message
 * @constant
 * @type {number}
 */
export const draft_message: EntryType = EntryType_draft_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_auto_action_event
 * @constant
 * @type {number}
 */
export const EntryType_auto_action_event: EntryType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_auto_action_event
 * @constant
 * @type {number}
 */
export const auto_action_event: EntryType = EntryType_auto_action_event; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_EntryType = $._decodeInteger;


export const _encode_EntryType = $._encodeInteger;


/* eslint-enable */
