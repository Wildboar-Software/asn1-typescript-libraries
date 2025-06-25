/* eslint-disable */
import {
    NULL,
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
    PerRecipientReport,
    _decode_PerRecipientReport,
    _encode_PerRecipientReport,
} from '../MSGeneralAttributeTypes/PerRecipientReport.ta.mjs';
/**
 * @summary ReportLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportLocation  ::=  CHOICE {
 *   no-correlated-reports  [0]  NULL,
 *   location               [1]  SEQUENCE OF PerRecipientReport
 * }
 * ```
 */
export type ReportLocation =
    | { no_correlated_reports: NULL } /* CHOICE_ALT_ROOT */
    | { location: PerRecipientReport[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReportLocation: $.ASN1Decoder<ReportLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportLocation} The decoded data structure.
 */
export function _decode_ReportLocation(el: _Element): ReportLocation {
    if (!_cached_decoder_for_ReportLocation) {
        _cached_decoder_for_ReportLocation = $._decode_inextensible_choice<ReportLocation>(
            {
                'CONTEXT 0': [
                    'no_correlated_reports',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'location',
                    $._decode_implicit<PerRecipientReport[]>(() =>
                        $._decodeSequenceOf<PerRecipientReport>(
                            () => _decode_PerRecipientReport
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ReportLocation(el);
}

let _cached_encoder_for_ReportLocation: $.ASN1Encoder<ReportLocation> | null = null;

/**
 * @summary Encodes a(n) ReportLocation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportLocation, encoded as an ASN.1 Element.
 */
export function _encode_ReportLocation(
    value: ReportLocation,
    elGetter: $.ASN1Encoder<ReportLocation>
): _Element {
    if (!_cached_encoder_for_ReportLocation) {
        _cached_encoder_for_ReportLocation = $._encode_choice<ReportLocation>(
            {
                no_correlated_reports: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                location: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<PerRecipientReport>(
                            () => _encode_PerRecipientReport,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReportLocation(value, elGetter);
}


/* eslint-enable */
