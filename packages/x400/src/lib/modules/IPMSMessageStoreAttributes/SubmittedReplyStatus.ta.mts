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
 * @summary SubmittedReplyStatus
 * @description
 *
 * The AC Submitted Reply Status attribute indicates whether a reply to a delivered IPM was
 * requested and whether one has been sent.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmittedReplyStatus  ::=  INTEGER {
 *   no-reply-requested(0), no-reply-intended(1), reply-pending(2), reply-sent(3)
 * }
 * ```
 */
export type SubmittedReplyStatus = INTEGER;

/**
 * @summary SubmittedReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_no_reply_requested: 0 = 0 satisfies SubmittedReplyStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const no_reply_requested: 0 = SubmittedReplyStatus_no_reply_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_no_reply_intended
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_no_reply_intended: 1 = 1 satisfies SubmittedReplyStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_no_reply_intended
 * @constant
 * @type {number}
 */
export const no_reply_intended: 1 = SubmittedReplyStatus_no_reply_intended; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_pending
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_reply_pending: 2 = 2 satisfies SubmittedReplyStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_pending
 * @constant
 * @type {number}
 */
export const reply_pending: 2 = SubmittedReplyStatus_reply_pending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_sent
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_reply_sent: 3 = 3 satisfies SubmittedReplyStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_sent
 * @constant
 * @type {number}
 */
export const reply_sent: 3 = SubmittedReplyStatus_reply_sent; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmittedReplyStatus: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_SubmittedReplyStatus: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
