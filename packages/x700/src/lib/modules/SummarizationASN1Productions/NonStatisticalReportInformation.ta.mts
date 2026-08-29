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
    NonStatisticalScan,
    _decode_NonStatisticalScan,
    _encode_NonStatisticalScan,
} from '../SummarizationASN1Productions/NonStatisticalScan.ta.mjs';
/**
 * @summary NonStatisticalReportInformation
 * @description
 *
 * Per-object scanned attribute values in a statistical
 * report (`observationReportList`,
 * `{summarizationAttribute 14}`). Omitted if object
 * instances are suppressed and the scan-attribute list
 * is empty. ITU-T Rec. X.738 (11/93)
 * [§8.2.2.2.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.1.3.3, A.4, A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonStatisticalReportInformation  ::=  SET OF NonStatisticalScan
 * ```
 */
export type NonStatisticalReportInformation = NonStatisticalScan[]; // SetOfType

let _cached_decoder_for_NonStatisticalReportInformation: $.ASN1Decoder<NonStatisticalReportInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonStatisticalReportInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonStatisticalReportInformation} The decoded data structure.
 */
export function _decode_NonStatisticalReportInformation(el: _Element): NonStatisticalReportInformation {
    if (!_cached_decoder_for_NonStatisticalReportInformation) {
        _cached_decoder_for_NonStatisticalReportInformation = $._decodeSetOf<NonStatisticalScan>(
            () => _decode_NonStatisticalScan
        );
    }
    return _cached_decoder_for_NonStatisticalReportInformation(el);
}

let _cached_encoder_for_NonStatisticalReportInformation: $.ASN1Encoder<NonStatisticalReportInformation> | null = null;

/**
 * @summary Encodes a(n) NonStatisticalReportInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonStatisticalReportInformation, encoded as an ASN.1 Element.
 */
export function _encode_NonStatisticalReportInformation(
    value: NonStatisticalReportInformation,
    elGetter: $.ASN1Encoder<NonStatisticalReportInformation>
): _Element {
    if (!_cached_encoder_for_NonStatisticalReportInformation) {
        _cached_encoder_for_NonStatisticalReportInformation = $._encodeSetOf<NonStatisticalScan>(
            () => _encode_NonStatisticalScan,
            $.BER
        );
    }
    return _cached_encoder_for_NonStatisticalReportInformation(value, elGetter);
}


/* eslint-enable */
