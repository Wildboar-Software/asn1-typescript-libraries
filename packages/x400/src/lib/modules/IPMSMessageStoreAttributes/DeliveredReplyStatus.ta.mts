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
 * @summary DeliveredReplyStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveredReplyStatus  ::=  INTEGER {
 *   no-reply-requested(0) -- reply not requested --,
 *   reply-outstanding(1) -- reply requested --, reply-received(2)}
 * ```
 */
export type DeliveredReplyStatus = INTEGER;

/**
 * @summary DeliveredReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const DeliveredReplyStatus_no_reply_requested: DeliveredReplyStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const no_reply_requested: DeliveredReplyStatus = DeliveredReplyStatus_no_reply_requested; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredReplyStatus_reply_outstanding
 * @constant
 * @type {number}
 */
export const DeliveredReplyStatus_reply_outstanding: DeliveredReplyStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredReplyStatus_reply_outstanding
 * @constant
 * @type {number}
 */
export const reply_outstanding: DeliveredReplyStatus = DeliveredReplyStatus_reply_outstanding; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredReplyStatus_reply_received
 * @constant
 * @type {number}
 */
export const DeliveredReplyStatus_reply_received: DeliveredReplyStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveredReplyStatus_reply_received
 * @constant
 * @type {number}
 */
export const reply_received: DeliveredReplyStatus = DeliveredReplyStatus_reply_received; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliveredReplyStatus = $._decodeInteger;


export const _encode_DeliveredReplyStatus = $._encodeInteger;


/* eslint-enable */
