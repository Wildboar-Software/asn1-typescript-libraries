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
 * @summary EntryType
 * @description
 *
 * MS entry type INTEGER (ITU-T X.413 (1999), §11): delivered-message, delivered-report,
 * returned-IPM, etc. Used to filter list/summarize.
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
export const EntryType_delivered_message: 0 = 0 satisfies EntryType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_delivered_message
 * @constant
 * @type {number}
 */
export const delivered_message: 0 = EntryType_delivered_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_delivered_report
 * @constant
 * @type {number}
 */
export const EntryType_delivered_report: 1 = 1 satisfies EntryType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_delivered_report
 * @constant
 * @type {number}
 */
export const delivered_report: 1 = EntryType_delivered_report; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_returned_content
 * @constant
 * @type {number}
 */
export const EntryType_returned_content: 2 = 2 satisfies EntryType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_returned_content
 * @constant
 * @type {number}
 */
export const returned_content: 2 = EntryType_returned_content; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_message
 * @constant
 * @type {number}
 */
export const EntryType_submitted_message: 3 = 3 satisfies EntryType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_message
 * @constant
 * @type {number}
 */
export const submitted_message: 3 = EntryType_submitted_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_probe
 * @constant
 * @type {number}
 */
export const EntryType_submitted_probe: 4 = 4 satisfies EntryType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_submitted_probe
 * @constant
 * @type {number}
 */
export const submitted_probe: 4 = EntryType_submitted_probe; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_draft_message
 * @constant
 * @type {number}
 */
export const EntryType_draft_message: 5 = 5 satisfies EntryType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_draft_message
 * @constant
 * @type {number}
 */
export const draft_message: 5 = EntryType_draft_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_auto_action_event
 * @constant
 * @type {number}
 */
export const EntryType_auto_action_event: 6 = 6 satisfies EntryType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryType_auto_action_event
 * @constant
 * @type {number}
 */
export const auto_action_event: 6 = EntryType_auto_action_event; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_EntryType: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_EntryType: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
