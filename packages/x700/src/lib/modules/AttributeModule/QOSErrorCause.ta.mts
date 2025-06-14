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

/* START_OF_SYMBOL_DEFINITION QOSErrorCause */
/**
 * @summary QOSErrorCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QOSErrorCause  ::=  INTEGER {
 *   responseTimeExcessive(0), queueSizeExceeded(1), bandwidthReduced(2),
 *   retransmissionRateExcessive(3)}
 * ```
 */
export type QOSErrorCause = INTEGER;
/* END_OF_SYMBOL_DEFINITION QOSErrorCause */

/* START_OF_SYMBOL_DEFINITION QOSErrorCause_responseTimeExcessive */
/**
 * @summary QOSErrorCause_responseTimeExcessive
 * @constant
 * @type {number}
 */
export const QOSErrorCause_responseTimeExcessive: QOSErrorCause = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION QOSErrorCause_responseTimeExcessive */

/* START_OF_SYMBOL_DEFINITION responseTimeExcessive */
/**
 * @summary QOSErrorCause_responseTimeExcessive
 * @constant
 * @type {number}
 */
export const responseTimeExcessive: QOSErrorCause = QOSErrorCause_responseTimeExcessive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION responseTimeExcessive */

/* START_OF_SYMBOL_DEFINITION QOSErrorCause_queueSizeExceeded */
/**
 * @summary QOSErrorCause_queueSizeExceeded
 * @constant
 * @type {number}
 */
export const QOSErrorCause_queueSizeExceeded: QOSErrorCause = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION QOSErrorCause_queueSizeExceeded */

/* START_OF_SYMBOL_DEFINITION queueSizeExceeded */
/**
 * @summary QOSErrorCause_queueSizeExceeded
 * @constant
 * @type {number}
 */
export const queueSizeExceeded: QOSErrorCause = QOSErrorCause_queueSizeExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION queueSizeExceeded */

/* START_OF_SYMBOL_DEFINITION QOSErrorCause_bandwidthReduced */
/**
 * @summary QOSErrorCause_bandwidthReduced
 * @constant
 * @type {number}
 */
export const QOSErrorCause_bandwidthReduced: QOSErrorCause = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION QOSErrorCause_bandwidthReduced */

/* START_OF_SYMBOL_DEFINITION bandwidthReduced */
/**
 * @summary QOSErrorCause_bandwidthReduced
 * @constant
 * @type {number}
 */
export const bandwidthReduced: QOSErrorCause = QOSErrorCause_bandwidthReduced; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION bandwidthReduced */

/* START_OF_SYMBOL_DEFINITION QOSErrorCause_retransmissionRateExcessive */
/**
 * @summary QOSErrorCause_retransmissionRateExcessive
 * @constant
 * @type {number}
 */
export const QOSErrorCause_retransmissionRateExcessive: QOSErrorCause = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION QOSErrorCause_retransmissionRateExcessive */

/* START_OF_SYMBOL_DEFINITION retransmissionRateExcessive */
/**
 * @summary QOSErrorCause_retransmissionRateExcessive
 * @constant
 * @type {number}
 */
export const retransmissionRateExcessive: QOSErrorCause = QOSErrorCause_retransmissionRateExcessive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION retransmissionRateExcessive */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QOSErrorCause */
let _cached_decoder_for_QOSErrorCause: $.ASN1Decoder<QOSErrorCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QOSErrorCause */

/* START_OF_SYMBOL_DEFINITION _decode_QOSErrorCause */
/**
 * @summary Decodes an ASN.1 element into a(n) QOSErrorCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QOSErrorCause} The decoded data structure.
 */
export function _decode_QOSErrorCause(el: _Element) {
    if (!_cached_decoder_for_QOSErrorCause) {
        _cached_decoder_for_QOSErrorCause = $._decodeInteger;
    }
    return _cached_decoder_for_QOSErrorCause(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QOSErrorCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QOSErrorCause */
let _cached_encoder_for_QOSErrorCause: $.ASN1Encoder<QOSErrorCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QOSErrorCause */

/* START_OF_SYMBOL_DEFINITION _encode_QOSErrorCause */
/**
 * @summary Encodes a(n) QOSErrorCause into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSErrorCause, encoded as an ASN.1 Element.
 */
export function _encode_QOSErrorCause(
    value: QOSErrorCause,
    elGetter: $.ASN1Encoder<QOSErrorCause>
) {
    if (!_cached_encoder_for_QOSErrorCause) {
        _cached_encoder_for_QOSErrorCause = $._encodeInteger;
    }
    return _cached_encoder_for_QOSErrorCause(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_QOSErrorCause */

/* eslint-enable */
