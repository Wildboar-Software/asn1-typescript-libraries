/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION TroubleReportNumberList */
/**
 * @summary TroubleReportNumberList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportNumberList  ::=  SET OF GraphicString(SIZE (0..64))
 * ```
 */
export type TroubleReportNumberList = GraphicString[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TroubleReportNumberList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportNumberList */
let _cached_decoder_for_TroubleReportNumberList: $.ASN1Decoder<TroubleReportNumberList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportNumberList */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportNumberList */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportNumberList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportNumberList} The decoded data structure.
 */
export function _decode_TroubleReportNumberList(el: _Element) {
    if (!_cached_decoder_for_TroubleReportNumberList) {
        _cached_decoder_for_TroubleReportNumberList = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_TroubleReportNumberList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportNumberList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportNumberList */
let _cached_encoder_for_TroubleReportNumberList: $.ASN1Encoder<TroubleReportNumberList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportNumberList */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportNumberList */
/**
 * @summary Encodes a(n) TroubleReportNumberList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportNumberList, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportNumberList(
    value: TroubleReportNumberList,
    elGetter: $.ASN1Encoder<TroubleReportNumberList>
) {
    if (!_cached_encoder_for_TroubleReportNumberList) {
        _cached_encoder_for_TroubleReportNumberList = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_TroubleReportNumberList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportNumberList */

/* eslint-enable */
