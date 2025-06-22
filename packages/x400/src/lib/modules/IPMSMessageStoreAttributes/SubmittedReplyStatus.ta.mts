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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SubmittedReplyStatus
 * @description
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
export const SubmittedReplyStatus_no_reply_requested: SubmittedReplyStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const no_reply_requested: SubmittedReplyStatus = SubmittedReplyStatus_no_reply_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_no_reply_intended
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_no_reply_intended: SubmittedReplyStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_no_reply_intended
 * @constant
 * @type {number}
 */
export const no_reply_intended: SubmittedReplyStatus = SubmittedReplyStatus_no_reply_intended; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_pending
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_reply_pending: SubmittedReplyStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_pending
 * @constant
 * @type {number}
 */
export const reply_pending: SubmittedReplyStatus = SubmittedReplyStatus_reply_pending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_sent
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_reply_sent: SubmittedReplyStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SubmittedReplyStatus_reply_sent
 * @constant
 * @type {number}
 */
export const reply_sent: SubmittedReplyStatus = SubmittedReplyStatus_reply_sent; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SubmittedReplyStatus = $._decodeInteger;


export const _encode_SubmittedReplyStatus = $._encodeInteger;


/* eslint-enable */
