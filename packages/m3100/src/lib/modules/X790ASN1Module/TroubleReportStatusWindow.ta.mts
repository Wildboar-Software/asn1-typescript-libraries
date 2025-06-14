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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../X790ASN1Module/TimeInterval.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TroubleReportStatusWindow */
/**
 * @summary TroubleReportStatusWindow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportStatusWindow  ::=  TimeInterval
 * ```
 */
export type TroubleReportStatusWindow = TimeInterval; // DefinedType
/* END_OF_SYMBOL_DEFINITION TroubleReportStatusWindow */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportStatusWindow */
let _cached_decoder_for_TroubleReportStatusWindow: $.ASN1Decoder<TroubleReportStatusWindow> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportStatusWindow */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportStatusWindow */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportStatusWindow
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportStatusWindow} The decoded data structure.
 */
export function _decode_TroubleReportStatusWindow(el: _Element) {
    if (!_cached_decoder_for_TroubleReportStatusWindow) {
        _cached_decoder_for_TroubleReportStatusWindow = _decode_TimeInterval;
    }
    return _cached_decoder_for_TroubleReportStatusWindow(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportStatusWindow */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportStatusWindow */
let _cached_encoder_for_TroubleReportStatusWindow: $.ASN1Encoder<TroubleReportStatusWindow> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportStatusWindow */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportStatusWindow */
/**
 * @summary Encodes a(n) TroubleReportStatusWindow into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportStatusWindow, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportStatusWindow(
    value: TroubleReportStatusWindow,
    elGetter: $.ASN1Encoder<TroubleReportStatusWindow>
) {
    if (!_cached_encoder_for_TroubleReportStatusWindow) {
        _cached_encoder_for_TroubleReportStatusWindow = _encode_TimeInterval;
    }
    return _cached_encoder_for_TroubleReportStatusWindow(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportStatusWindow */

/* eslint-enable */
