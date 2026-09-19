/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";
// export { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";


/**
 * @summary MDFCellSiteReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDFCellSiteReport  ::=  SEQUENCE OF CellInformation
 * ```
 */
export
type MDFCellSiteReport = CellInformation[]; // SequenceOfType

let _cached_decoder_for_MDFCellSiteReport: $.ASN1Decoder<MDFCellSiteReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MDFCellSiteReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MDFCellSiteReport (el: _Element): MDFCellSiteReport {
    if (!_cached_decoder_for_MDFCellSiteReport) { _cached_decoder_for_MDFCellSiteReport = $._decodeSequenceOf<CellInformation>(() => _decode_CellInformation); }
    return _cached_decoder_for_MDFCellSiteReport(el);
}

let _cached_encoder_for_MDFCellSiteReport: $.ASN1Encoder<MDFCellSiteReport> | null = null;

/**
 * @summary Encodes a(n) MDFCellSiteReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDFCellSiteReport, encoded as an ASN.1 Element.
 */
export
function _encode_MDFCellSiteReport (value: MDFCellSiteReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MDFCellSiteReport) { _cached_encoder_for_MDFCellSiteReport = $._encodeSequenceOf<CellInformation>(() => _encode_CellInformation, $.BER); }
    return _cached_encoder_for_MDFCellSiteReport(value, elGetter);
}


/* eslint-enable */
