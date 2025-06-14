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

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode */
/**
 * @summary NonDeliveryReasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonDeliveryReasonCode  ::=  INTEGER {
 *   transfer-failure(0), unable-to-transfer(1), conversion-not-performed(2),
 *   physical-rendition-not-performed(3), physical-delivery-not-performed(4),
 *   restricted-delivery(5), directory-operation-unsuccessful(6),
 *   deferred-delivery-not-performed(7), transfer-failure-for-security-reason(8)
 * }(0..ub-reason-codes)
 * ```
 */
export type NonDeliveryReasonCode = INTEGER;
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_transfer_failure */
/**
 * @summary NonDeliveryReasonCode_transfer_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_transfer_failure: NonDeliveryReasonCode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_transfer_failure */

/* START_OF_SYMBOL_DEFINITION transfer_failure */
/**
 * @summary NonDeliveryReasonCode_transfer_failure
 * @constant
 * @type {number}
 */
export const transfer_failure: NonDeliveryReasonCode = NonDeliveryReasonCode_transfer_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION transfer_failure */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_unable_to_transfer */
/**
 * @summary NonDeliveryReasonCode_unable_to_transfer
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_unable_to_transfer: NonDeliveryReasonCode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_unable_to_transfer */

/* START_OF_SYMBOL_DEFINITION unable_to_transfer */
/**
 * @summary NonDeliveryReasonCode_unable_to_transfer
 * @constant
 * @type {number}
 */
export const unable_to_transfer: NonDeliveryReasonCode = NonDeliveryReasonCode_unable_to_transfer; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_transfer */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_conversion_not_performed */
/**
 * @summary NonDeliveryReasonCode_conversion_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_conversion_not_performed: NonDeliveryReasonCode = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_conversion_not_performed */

/* START_OF_SYMBOL_DEFINITION conversion_not_performed */
/**
 * @summary NonDeliveryReasonCode_conversion_not_performed
 * @constant
 * @type {number}
 */
export const conversion_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_conversion_not_performed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION conversion_not_performed */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_physical_rendition_not_performed */
/**
 * @summary NonDeliveryReasonCode_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_physical_rendition_not_performed: NonDeliveryReasonCode = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_physical_rendition_not_performed */

/* START_OF_SYMBOL_DEFINITION physical_rendition_not_performed */
/**
 * @summary NonDeliveryReasonCode_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const physical_rendition_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_physical_rendition_not_performed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_rendition_not_performed */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_physical_delivery_not_performed */
/**
 * @summary NonDeliveryReasonCode_physical_delivery_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_physical_delivery_not_performed: NonDeliveryReasonCode = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_physical_delivery_not_performed */

/* START_OF_SYMBOL_DEFINITION physical_delivery_not_performed */
/**
 * @summary NonDeliveryReasonCode_physical_delivery_not_performed
 * @constant
 * @type {number}
 */
export const physical_delivery_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_physical_delivery_not_performed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_delivery_not_performed */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_restricted_delivery */
/**
 * @summary NonDeliveryReasonCode_restricted_delivery
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_restricted_delivery: NonDeliveryReasonCode = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_restricted_delivery */

/* START_OF_SYMBOL_DEFINITION restricted_delivery */
/**
 * @summary NonDeliveryReasonCode_restricted_delivery
 * @constant
 * @type {number}
 */
export const restricted_delivery: NonDeliveryReasonCode = NonDeliveryReasonCode_restricted_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION restricted_delivery */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_directory_operation_unsuccessful */
/**
 * @summary NonDeliveryReasonCode_directory_operation_unsuccessful
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_directory_operation_unsuccessful: NonDeliveryReasonCode = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_directory_operation_unsuccessful */

/* START_OF_SYMBOL_DEFINITION directory_operation_unsuccessful */
/**
 * @summary NonDeliveryReasonCode_directory_operation_unsuccessful
 * @constant
 * @type {number}
 */
export const directory_operation_unsuccessful: NonDeliveryReasonCode = NonDeliveryReasonCode_directory_operation_unsuccessful; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION directory_operation_unsuccessful */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_deferred_delivery_not_performed */
/**
 * @summary NonDeliveryReasonCode_deferred_delivery_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_deferred_delivery_not_performed: NonDeliveryReasonCode = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_deferred_delivery_not_performed */

/* START_OF_SYMBOL_DEFINITION deferred_delivery_not_performed */
/**
 * @summary NonDeliveryReasonCode_deferred_delivery_not_performed
 * @constant
 * @type {number}
 */
export const deferred_delivery_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_deferred_delivery_not_performed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deferred_delivery_not_performed */

/* START_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_transfer_failure_for_security_reason */
/**
 * @summary NonDeliveryReasonCode_transfer_failure_for_security_reason
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_transfer_failure_for_security_reason: NonDeliveryReasonCode = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NonDeliveryReasonCode_transfer_failure_for_security_reason */

/* START_OF_SYMBOL_DEFINITION transfer_failure_for_security_reason */
/**
 * @summary NonDeliveryReasonCode_transfer_failure_for_security_reason
 * @constant
 * @type {number}
 */
export const transfer_failure_for_security_reason: NonDeliveryReasonCode = NonDeliveryReasonCode_transfer_failure_for_security_reason; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION transfer_failure_for_security_reason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryReasonCode */
let _cached_decoder_for_NonDeliveryReasonCode: $.ASN1Decoder<NonDeliveryReasonCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonDeliveryReasonCode */

/* START_OF_SYMBOL_DEFINITION _decode_NonDeliveryReasonCode */
/**
 * @summary Decodes an ASN.1 element into a(n) NonDeliveryReasonCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonDeliveryReasonCode} The decoded data structure.
 */
export function _decode_NonDeliveryReasonCode(el: _Element) {
    if (!_cached_decoder_for_NonDeliveryReasonCode) {
        _cached_decoder_for_NonDeliveryReasonCode = $._decodeInteger;
    }
    return _cached_decoder_for_NonDeliveryReasonCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonDeliveryReasonCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryReasonCode */
let _cached_encoder_for_NonDeliveryReasonCode: $.ASN1Encoder<NonDeliveryReasonCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonDeliveryReasonCode */

/* START_OF_SYMBOL_DEFINITION _encode_NonDeliveryReasonCode */
/**
 * @summary Encodes a(n) NonDeliveryReasonCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonDeliveryReasonCode, encoded as an ASN.1 Element.
 */
export function _encode_NonDeliveryReasonCode(
    value: NonDeliveryReasonCode,
    elGetter: $.ASN1Encoder<NonDeliveryReasonCode>
) {
    if (!_cached_encoder_for_NonDeliveryReasonCode) {
        _cached_encoder_for_NonDeliveryReasonCode = $._encodeInteger;
    }
    return _cached_encoder_for_NonDeliveryReasonCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonDeliveryReasonCode */

/* eslint-enable */
