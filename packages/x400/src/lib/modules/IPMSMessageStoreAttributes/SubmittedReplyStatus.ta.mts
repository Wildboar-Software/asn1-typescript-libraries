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
let _cached_decoder_for_SubmittedReplyStatus: $.ASN1Decoder<SubmittedReplyStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmittedReplyStatus */

/* START_OF_SYMBOL_DEFINITION _decode_SubmittedReplyStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) SubmittedReplyStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmittedReplyStatus} The decoded data structure.
 */
export function _decode_SubmittedReplyStatus(el: _Element) {
    if (!_cached_decoder_for_SubmittedReplyStatus) {
        _cached_decoder_for_SubmittedReplyStatus = $._decodeInteger;
    }
    return _cached_decoder_for_SubmittedReplyStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubmittedReplyStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmittedReplyStatus */
let _cached_encoder_for_SubmittedReplyStatus: $.ASN1Encoder<SubmittedReplyStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmittedReplyStatus */

/* START_OF_SYMBOL_DEFINITION _encode_SubmittedReplyStatus */
/**
 * @summary Encodes a(n) SubmittedReplyStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmittedReplyStatus, encoded as an ASN.1 Element.
 */
export function _encode_SubmittedReplyStatus(
    value: SubmittedReplyStatus,
    elGetter: $.ASN1Encoder<SubmittedReplyStatus>
) {
    if (!_cached_encoder_for_SubmittedReplyStatus) {
        _cached_encoder_for_SubmittedReplyStatus = $._encodeInteger;
    }
    return _cached_encoder_for_SubmittedReplyStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubmittedReplyStatus */

/* eslint-enable */
