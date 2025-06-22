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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta.mjs';
import {
    EncapsulatedContentInfoBPUReport,
    _decode_EncapsulatedContentInfoBPUReport,
    _encode_EncapsulatedContentInfoBPUReport,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoBPUReport.ta.mjs';

/**
 * @summary ContentBPUReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentBPUReport  ::=  SIGNEDDATA { EncapsulatedContentInfoBPUReport }
 * ```
 */
export type ContentBPUReport = SIGNEDDATA<EncapsulatedContentInfoBPUReport>; // DefinedType


let _cached_decoder_for_ContentBPUReport: $.ASN1Decoder<ContentBPUReport> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ContentBPUReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentBPUReport} The decoded data structure.
 */
export function _decode_ContentBPUReport(el: _Element) {
    if (!_cached_decoder_for_ContentBPUReport) {
        _cached_decoder_for_ContentBPUReport = _get_decoder_for_SIGNEDDATA<EncapsulatedContentInfoBPUReport>(
            _decode_EncapsulatedContentInfoBPUReport
        );
    }
    return _cached_decoder_for_ContentBPUReport(el);
}


let _cached_encoder_for_ContentBPUReport: $.ASN1Encoder<ContentBPUReport> | null = null;


/**
 * @summary Encodes a(n) ContentBPUReport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentBPUReport, encoded as an ASN.1 Element.
 */
export function _encode_ContentBPUReport(
    value: ContentBPUReport,
    elGetter: $.ASN1Encoder<ContentBPUReport>
) {
    if (!_cached_encoder_for_ContentBPUReport) {
        _cached_encoder_for_ContentBPUReport = _get_encoder_for_SIGNEDDATA<EncapsulatedContentInfoBPUReport>(
            _encode_EncapsulatedContentInfoBPUReport
        );
    }
    return _cached_encoder_for_ContentBPUReport(value, elGetter);
}


/* eslint-enable */
