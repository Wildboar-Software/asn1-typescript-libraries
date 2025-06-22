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
    BPUReport,
    _decode_BPUReport,
    _encode_BPUReport,
} from '../AuthenticationContextForBiometrics/BPUReport.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';

/**
 * @summary BPUReportInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUReportInformation  ::=  CHOICE {
 *     bpuReport           BPUReport,
 *     bpuReportReferrer   URI }
 * ```
 */
export type BPUReportInformation =
    | { bpuReport: BPUReport } /* CHOICE_ALT_ROOT */
    | { bpuReportReferrer: URI } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_BPUReportInformation: $.ASN1Decoder<BPUReportInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUReportInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUReportInformation} The decoded data structure.
 */
export function _decode_BPUReportInformation(el: _Element) {
    if (!_cached_decoder_for_BPUReportInformation) {
        _cached_decoder_for_BPUReportInformation = $._decode_inextensible_choice<BPUReportInformation>(
            {
                'CONTEXT 0': ['bpuReport', _decode_BPUReport],
                'CONTEXT 1': ['bpuReportReferrer', _decode_URI],
            }
        );
    }
    return _cached_decoder_for_BPUReportInformation(el);
}


let _cached_encoder_for_BPUReportInformation: $.ASN1Encoder<BPUReportInformation> | null = null;


/**
 * @summary Encodes a(n) BPUReportInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUReportInformation, encoded as an ASN.1 Element.
 */
export function _encode_BPUReportInformation(
    value: BPUReportInformation,
    elGetter: $.ASN1Encoder<BPUReportInformation>
) {
    if (!_cached_encoder_for_BPUReportInformation) {
        _cached_encoder_for_BPUReportInformation = $._encode_choice<BPUReportInformation>(
            {
                bpuReport: _encode_BPUReport,
                bpuReportReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BPUReportInformation(value, elGetter);
}


/* eslint-enable */
