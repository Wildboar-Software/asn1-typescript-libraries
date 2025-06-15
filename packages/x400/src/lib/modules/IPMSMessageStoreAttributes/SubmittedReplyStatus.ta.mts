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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION SubmittedReplyStatus */
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
/* END_OF_SYMBOL_DEFINITION SubmittedReplyStatus */

/* START_OF_SYMBOL_DEFINITION SubmittedReplyStatus_no_reply_requested */
/**
 * @summary SubmittedReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_no_reply_requested: SubmittedReplyStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedReplyStatus_no_reply_requested */

/* START_OF_SYMBOL_DEFINITION no_reply_requested */
/**
 * @summary SubmittedReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const no_reply_requested: SubmittedReplyStatus = SubmittedReplyStatus_no_reply_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_reply_requested */

/* START_OF_SYMBOL_DEFINITION SubmittedReplyStatus_no_reply_intended */
/**
 * @summary SubmittedReplyStatus_no_reply_intended
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_no_reply_intended: SubmittedReplyStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedReplyStatus_no_reply_intended */

/* START_OF_SYMBOL_DEFINITION no_reply_intended */
/**
 * @summary SubmittedReplyStatus_no_reply_intended
 * @constant
 * @type {number}
 */
export const no_reply_intended: SubmittedReplyStatus = SubmittedReplyStatus_no_reply_intended; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_reply_intended */

/* START_OF_SYMBOL_DEFINITION SubmittedReplyStatus_reply_pending */
/**
 * @summary SubmittedReplyStatus_reply_pending
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_reply_pending: SubmittedReplyStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedReplyStatus_reply_pending */

/* START_OF_SYMBOL_DEFINITION reply_pending */
/**
 * @summary SubmittedReplyStatus_reply_pending
 * @constant
 * @type {number}
 */
export const reply_pending: SubmittedReplyStatus = SubmittedReplyStatus_reply_pending; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reply_pending */

/* START_OF_SYMBOL_DEFINITION SubmittedReplyStatus_reply_sent */
/**
 * @summary SubmittedReplyStatus_reply_sent
 * @constant
 * @type {number}
 */
export const SubmittedReplyStatus_reply_sent: SubmittedReplyStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedReplyStatus_reply_sent */

/* START_OF_SYMBOL_DEFINITION reply_sent */
/**
 * @summary SubmittedReplyStatus_reply_sent
 * @constant
 * @type {number}
 */
export const reply_sent: SubmittedReplyStatus = SubmittedReplyStatus_reply_sent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reply_sent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmittedReplyStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmittedReplyStatus */

/* START_OF_SYMBOL_DEFINITION _decode_SubmittedReplyStatus */
export const _decode_SubmittedReplyStatus = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SubmittedReplyStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmittedReplyStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmittedReplyStatus */

/* START_OF_SYMBOL_DEFINITION _encode_SubmittedReplyStatus */
export const _encode_SubmittedReplyStatus = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SubmittedReplyStatus */

/* eslint-enable */
