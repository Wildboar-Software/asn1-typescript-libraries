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

/* START_OF_SYMBOL_DEFINITION EnvelopeType */
/**
 * @summary EnvelopeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopeType  ::=  INTEGER {
 *   message-delivery-envelope(0), message-submission-envelope(1),
 *   message-transfer-envelope(2), probe-submission-envelope(3),
 *   probe-transfer-envelope(4), report-delivery-envelope(5),
 *   report-transfer-envelope(6)}
 * ```
 */
export type EnvelopeType = INTEGER;
/* END_OF_SYMBOL_DEFINITION EnvelopeType */

/* START_OF_SYMBOL_DEFINITION EnvelopeType_message_delivery_envelope */
/**
 * @summary EnvelopeType_message_delivery_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_message_delivery_envelope: EnvelopeType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopeType_message_delivery_envelope */

/* START_OF_SYMBOL_DEFINITION message_delivery_envelope */
/**
 * @summary EnvelopeType_message_delivery_envelope
 * @constant
 * @type {number}
 */
export const message_delivery_envelope: EnvelopeType = EnvelopeType_message_delivery_envelope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_delivery_envelope */

/* START_OF_SYMBOL_DEFINITION EnvelopeType_message_submission_envelope */
/**
 * @summary EnvelopeType_message_submission_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_message_submission_envelope: EnvelopeType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopeType_message_submission_envelope */

/* START_OF_SYMBOL_DEFINITION message_submission_envelope */
/**
 * @summary EnvelopeType_message_submission_envelope
 * @constant
 * @type {number}
 */
export const message_submission_envelope: EnvelopeType = EnvelopeType_message_submission_envelope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_submission_envelope */

/* START_OF_SYMBOL_DEFINITION EnvelopeType_message_transfer_envelope */
/**
 * @summary EnvelopeType_message_transfer_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_message_transfer_envelope: EnvelopeType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopeType_message_transfer_envelope */

/* START_OF_SYMBOL_DEFINITION message_transfer_envelope */
/**
 * @summary EnvelopeType_message_transfer_envelope
 * @constant
 * @type {number}
 */
export const message_transfer_envelope: EnvelopeType = EnvelopeType_message_transfer_envelope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_transfer_envelope */

/* START_OF_SYMBOL_DEFINITION EnvelopeType_probe_submission_envelope */
/**
 * @summary EnvelopeType_probe_submission_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_probe_submission_envelope: EnvelopeType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopeType_probe_submission_envelope */

/* START_OF_SYMBOL_DEFINITION probe_submission_envelope */
/**
 * @summary EnvelopeType_probe_submission_envelope
 * @constant
 * @type {number}
 */
export const probe_submission_envelope: EnvelopeType = EnvelopeType_probe_submission_envelope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION probe_submission_envelope */

/* START_OF_SYMBOL_DEFINITION EnvelopeType_probe_transfer_envelope */
/**
 * @summary EnvelopeType_probe_transfer_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_probe_transfer_envelope: EnvelopeType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopeType_probe_transfer_envelope */

/* START_OF_SYMBOL_DEFINITION probe_transfer_envelope */
/**
 * @summary EnvelopeType_probe_transfer_envelope
 * @constant
 * @type {number}
 */
export const probe_transfer_envelope: EnvelopeType = EnvelopeType_probe_transfer_envelope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION probe_transfer_envelope */

/* START_OF_SYMBOL_DEFINITION EnvelopeType_report_delivery_envelope */
/**
 * @summary EnvelopeType_report_delivery_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_report_delivery_envelope: EnvelopeType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopeType_report_delivery_envelope */

/* START_OF_SYMBOL_DEFINITION report_delivery_envelope */
/**
 * @summary EnvelopeType_report_delivery_envelope
 * @constant
 * @type {number}
 */
export const report_delivery_envelope: EnvelopeType = EnvelopeType_report_delivery_envelope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION report_delivery_envelope */

/* START_OF_SYMBOL_DEFINITION EnvelopeType_report_transfer_envelope */
/**
 * @summary EnvelopeType_report_transfer_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_report_transfer_envelope: EnvelopeType = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopeType_report_transfer_envelope */

/* START_OF_SYMBOL_DEFINITION report_transfer_envelope */
/**
 * @summary EnvelopeType_report_transfer_envelope
 * @constant
 * @type {number}
 */
export const report_transfer_envelope: EnvelopeType = EnvelopeType_report_transfer_envelope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION report_transfer_envelope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopeType */
let _cached_decoder_for_EnvelopeType: $.ASN1Decoder<EnvelopeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopeType */

/* START_OF_SYMBOL_DEFINITION _decode_EnvelopeType */
/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnvelopeType} The decoded data structure.
 */
export function _decode_EnvelopeType(el: _Element) {
    if (!_cached_decoder_for_EnvelopeType) {
        _cached_decoder_for_EnvelopeType = $._decodeInteger;
    }
    return _cached_decoder_for_EnvelopeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnvelopeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopeType */
let _cached_encoder_for_EnvelopeType: $.ASN1Encoder<EnvelopeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopeType */

/* START_OF_SYMBOL_DEFINITION _encode_EnvelopeType */
/**
 * @summary Encodes a(n) EnvelopeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopeType, encoded as an ASN.1 Element.
 */
export function _encode_EnvelopeType(
    value: EnvelopeType,
    elGetter: $.ASN1Encoder<EnvelopeType>
) {
    if (!_cached_encoder_for_EnvelopeType) {
        _cached_encoder_for_EnvelopeType = $._encodeInteger;
    }
    return _cached_encoder_for_EnvelopeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnvelopeType */

/* eslint-enable */
