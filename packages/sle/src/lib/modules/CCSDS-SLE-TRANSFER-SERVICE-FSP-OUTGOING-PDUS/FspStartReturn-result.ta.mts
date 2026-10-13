/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FspStartReturn_result_positiveResult, _decode_FspStartReturn_result_positiveResult, _encode_FspStartReturn_result_positiveResult } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspStartReturn-result-positiveResult.ta.mjs";
// export { FspStartReturn_result_positiveResult, _decode_FspStartReturn_result_positiveResult, _encode_FspStartReturn_result_positiveResult } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspStartReturn-result-positiveResult.ta.mjs";
import { DiagnosticFspStart, _decode_DiagnosticFspStart, _encode_DiagnosticFspStart } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspStart.ta.mjs";
// export { DiagnosticFspStart, _decode_DiagnosticFspStart, _encode_DiagnosticFspStart } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspStart.ta.mjs";


/**
 * @summary FspStartReturn_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspStartReturn-result ::= CHOICE
 *    {  positiveResult    [0]   SEQUENCE
 *       {  startProductionTime     Time
 *       ,  stopProductionTime      ConditionalTime
 *       }
 *    ,  negativeResult    [1]   DiagnosticFspStart
 *    }
 * ```
 */
export
type FspStartReturn_result =
    { positiveResult: FspStartReturn_result_positiveResult } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticFspStart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspStartReturn_result: $.ASN1Decoder<FspStartReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspStartReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspStartReturn_result (el: _Element): FspStartReturn_result {
    if (!_cached_decoder_for_FspStartReturn_result) { _cached_decoder_for_FspStartReturn_result = $._decode_inextensible_choice<FspStartReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<FspStartReturn_result_positiveResult>(() => _decode_FspStartReturn_result_positiveResult) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticFspStart>(() => _decode_DiagnosticFspStart) ]
}); }
    return _cached_decoder_for_FspStartReturn_result(el);
}

let _cached_encoder_for_FspStartReturn_result: $.ASN1Encoder<FspStartReturn_result> | null = null;

/**
 * @summary Encodes a(n) FspStartReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspStartReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_FspStartReturn_result (value: FspStartReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspStartReturn_result) { _cached_encoder_for_FspStartReturn_result = $._encode_choice<FspStartReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => _encode_FspStartReturn_result_positiveResult, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticFspStart, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspStartReturn_result(value, elGetter);
}


/* eslint-enable */
