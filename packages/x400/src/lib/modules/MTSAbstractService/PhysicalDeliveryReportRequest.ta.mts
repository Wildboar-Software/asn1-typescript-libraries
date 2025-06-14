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

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest */
/**
 * @summary PhysicalDeliveryReportRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryReportRequest  ::=  INTEGER {
 *   return-of-undeliverable-mail-by-PDS(0), return-of-notification-by-PDS(1),
 *   return-of-notification-by-MHS(2), return-of-notification-by-MHS-and-PDS(3)
 * }(0..ub-integer-options)
 * ```
 */
export type PhysicalDeliveryReportRequest = INTEGER;
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS: PhysicalDeliveryReportRequest = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS */

/* START_OF_SYMBOL_DEFINITION return_of_undeliverable_mail_by_PDS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS
 * @constant
 * @type {number}
 */
export const return_of_undeliverable_mail_by_PDS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_undeliverable_mail_by_PDS; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION return_of_undeliverable_mail_by_PDS */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_notification_by_PDS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_PDS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_notification_by_PDS: PhysicalDeliveryReportRequest = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_notification_by_PDS */

/* START_OF_SYMBOL_DEFINITION return_of_notification_by_PDS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_PDS
 * @constant
 * @type {number}
 */
export const return_of_notification_by_PDS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_notification_by_PDS; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION return_of_notification_by_PDS */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_notification_by_MHS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_notification_by_MHS: PhysicalDeliveryReportRequest = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_notification_by_MHS */

/* START_OF_SYMBOL_DEFINITION return_of_notification_by_MHS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS
 * @constant
 * @type {number}
 */
export const return_of_notification_by_MHS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_notification_by_MHS; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION return_of_notification_by_MHS */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS
 * @constant
 * @type {number}
 */
export const PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS: PhysicalDeliveryReportRequest = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS */

/* START_OF_SYMBOL_DEFINITION return_of_notification_by_MHS_and_PDS */
/**
 * @summary PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS
 * @constant
 * @type {number}
 */
export const return_of_notification_by_MHS_and_PDS: PhysicalDeliveryReportRequest = PhysicalDeliveryReportRequest_return_of_notification_by_MHS_and_PDS; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION return_of_notification_by_MHS_and_PDS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryReportRequest */
let _cached_decoder_for_PhysicalDeliveryReportRequest: $.ASN1Decoder<PhysicalDeliveryReportRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryReportRequest */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryReportRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryReportRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryReportRequest} The decoded data structure.
 */
export function _decode_PhysicalDeliveryReportRequest(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryReportRequest) {
        _cached_decoder_for_PhysicalDeliveryReportRequest = $._decodeInteger;
    }
    return _cached_decoder_for_PhysicalDeliveryReportRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryReportRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryReportRequest */
let _cached_encoder_for_PhysicalDeliveryReportRequest: $.ASN1Encoder<PhysicalDeliveryReportRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryReportRequest */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryReportRequest */
/**
 * @summary Encodes a(n) PhysicalDeliveryReportRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryReportRequest, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryReportRequest(
    value: PhysicalDeliveryReportRequest,
    elGetter: $.ASN1Encoder<PhysicalDeliveryReportRequest>
) {
    if (!_cached_encoder_for_PhysicalDeliveryReportRequest) {
        _cached_encoder_for_PhysicalDeliveryReportRequest = $._encodeInteger;
    }
    return _cached_encoder_for_PhysicalDeliveryReportRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryReportRequest */

/* eslint-enable */
