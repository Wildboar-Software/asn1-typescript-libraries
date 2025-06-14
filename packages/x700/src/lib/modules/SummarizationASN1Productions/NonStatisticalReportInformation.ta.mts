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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    NonStatisticalScan,
    _decode_NonStatisticalScan,
    _encode_NonStatisticalScan,
} from '../SummarizationASN1Productions/NonStatisticalScan.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NonStatisticalReportInformation */
/**
 * @summary NonStatisticalReportInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonStatisticalReportInformation  ::=  SET OF NonStatisticalScan
 * ```
 */
export type NonStatisticalReportInformation = NonStatisticalScan[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NonStatisticalReportInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonStatisticalReportInformation */
let _cached_decoder_for_NonStatisticalReportInformation: $.ASN1Decoder<NonStatisticalReportInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonStatisticalReportInformation */

/* START_OF_SYMBOL_DEFINITION _decode_NonStatisticalReportInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) NonStatisticalReportInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonStatisticalReportInformation} The decoded data structure.
 */
export function _decode_NonStatisticalReportInformation(el: _Element) {
    if (!_cached_decoder_for_NonStatisticalReportInformation) {
        _cached_decoder_for_NonStatisticalReportInformation = $._decodeSetOf<NonStatisticalScan>(
            () => _decode_NonStatisticalScan
        );
    }
    return _cached_decoder_for_NonStatisticalReportInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonStatisticalReportInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonStatisticalReportInformation */
let _cached_encoder_for_NonStatisticalReportInformation: $.ASN1Encoder<NonStatisticalReportInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonStatisticalReportInformation */

/* START_OF_SYMBOL_DEFINITION _encode_NonStatisticalReportInformation */
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
) {
    if (!_cached_encoder_for_NonStatisticalReportInformation) {
        _cached_encoder_for_NonStatisticalReportInformation = $._encodeSetOf<NonStatisticalScan>(
            () => _encode_NonStatisticalScan,
            $.BER
        );
    }
    return _cached_encoder_for_NonStatisticalReportInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonStatisticalReportInformation */

/* eslint-enable */
