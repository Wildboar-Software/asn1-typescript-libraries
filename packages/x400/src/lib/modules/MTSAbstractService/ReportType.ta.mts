/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    DeliveryReport,
    _decode_DeliveryReport,
    _encode_DeliveryReport,
} from '../MTSAbstractService/DeliveryReport.ta.mjs';
import {
    NonDeliveryReport,
    _decode_NonDeliveryReport,
    _encode_NonDeliveryReport,
} from '../MTSAbstractService/NonDeliveryReport.ta.mjs';
/**
 * @summary ReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportType  ::=  CHOICE {
 *   delivery      [0]  DeliveryReport,
 *   non-delivery  [1]  NonDeliveryReport
 * }
 * ```
 */
export type ReportType =
    | { delivery: DeliveryReport } /* CHOICE_ALT_ROOT */
    | { non_delivery: NonDeliveryReport } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReportType: $.ASN1Decoder<ReportType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportType} The decoded data structure.
 */
export function _decode_ReportType(el: _Element) {
    if (!_cached_decoder_for_ReportType) {
        _cached_decoder_for_ReportType = $._decode_inextensible_choice<ReportType>(
            {
                'CONTEXT 0': [
                    'delivery',
                    $._decode_implicit<DeliveryReport>(
                        () => _decode_DeliveryReport
                    ),
                ],
                'CONTEXT 1': [
                    'non_delivery',
                    $._decode_implicit<NonDeliveryReport>(
                        () => _decode_NonDeliveryReport
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ReportType(el);
}

let _cached_encoder_for_ReportType: $.ASN1Encoder<ReportType> | null = null;

/**
 * @summary Encodes a(n) ReportType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportType, encoded as an ASN.1 Element.
 */
export function _encode_ReportType(
    value: ReportType,
    elGetter: $.ASN1Encoder<ReportType>
) {
    if (!_cached_encoder_for_ReportType) {
        _cached_encoder_for_ReportType = $._encode_choice<ReportType>(
            {
                delivery: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DeliveryReport,
                    $.BER
                ),
                non_delivery: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NonDeliveryReport,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReportType(value, elGetter);
}


/* eslint-enable */
