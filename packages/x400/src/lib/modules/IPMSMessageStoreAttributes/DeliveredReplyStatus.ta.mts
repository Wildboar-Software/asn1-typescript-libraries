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

/* START_OF_SYMBOL_DEFINITION DeliveredReplyStatus */
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
/* END_OF_SYMBOL_DEFINITION DeliveredReplyStatus */

/* START_OF_SYMBOL_DEFINITION DeliveredReplyStatus_no_reply_requested */
/**
 * @summary DeliveredReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const DeliveredReplyStatus_no_reply_requested: DeliveredReplyStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredReplyStatus_no_reply_requested */

/* START_OF_SYMBOL_DEFINITION no_reply_requested */
/**
 * @summary DeliveredReplyStatus_no_reply_requested
 * @constant
 * @type {number}
 */
export const no_reply_requested: DeliveredReplyStatus = DeliveredReplyStatus_no_reply_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_reply_requested */

/* START_OF_SYMBOL_DEFINITION DeliveredReplyStatus_reply_outstanding */
/**
 * @summary DeliveredReplyStatus_reply_outstanding
 * @constant
 * @type {number}
 */
export const DeliveredReplyStatus_reply_outstanding: DeliveredReplyStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredReplyStatus_reply_outstanding */

/* START_OF_SYMBOL_DEFINITION reply_outstanding */
/**
 * @summary DeliveredReplyStatus_reply_outstanding
 * @constant
 * @type {number}
 */
export const reply_outstanding: DeliveredReplyStatus = DeliveredReplyStatus_reply_outstanding; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reply_outstanding */

/* START_OF_SYMBOL_DEFINITION DeliveredReplyStatus_reply_received */
/**
 * @summary DeliveredReplyStatus_reply_received
 * @constant
 * @type {number}
 */
export const DeliveredReplyStatus_reply_received: DeliveredReplyStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveredReplyStatus_reply_received */

/* START_OF_SYMBOL_DEFINITION reply_received */
/**
 * @summary DeliveredReplyStatus_reply_received
 * @constant
 * @type {number}
 */
export const reply_received: DeliveredReplyStatus = DeliveredReplyStatus_reply_received; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reply_received */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredReplyStatus */
let _cached_decoder_for_DeliveredReplyStatus: $.ASN1Decoder<DeliveredReplyStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveredReplyStatus */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveredReplyStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveredReplyStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveredReplyStatus} The decoded data structure.
 */
export function _decode_DeliveredReplyStatus(el: _Element) {
    if (!_cached_decoder_for_DeliveredReplyStatus) {
        _cached_decoder_for_DeliveredReplyStatus = $._decodeInteger;
    }
    return _cached_decoder_for_DeliveredReplyStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveredReplyStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredReplyStatus */
let _cached_encoder_for_DeliveredReplyStatus: $.ASN1Encoder<DeliveredReplyStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveredReplyStatus */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveredReplyStatus */
/**
 * @summary Encodes a(n) DeliveredReplyStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveredReplyStatus, encoded as an ASN.1 Element.
 */
export function _encode_DeliveredReplyStatus(
    value: DeliveredReplyStatus,
    elGetter: $.ASN1Encoder<DeliveredReplyStatus>
) {
    if (!_cached_encoder_for_DeliveredReplyStatus) {
        _cached_encoder_for_DeliveredReplyStatus = $._encodeInteger;
    }
    return _cached_encoder_for_DeliveredReplyStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveredReplyStatus */

/* eslint-enable */
