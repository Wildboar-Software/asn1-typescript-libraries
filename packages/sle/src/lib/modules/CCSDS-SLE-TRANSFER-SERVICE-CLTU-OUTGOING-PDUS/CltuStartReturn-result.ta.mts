/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CltuStartReturn_result_positiveResult, _decode_CltuStartReturn_result_positiveResult, _encode_CltuStartReturn_result_positiveResult } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuStartReturn-result-positiveResult.ta.mjs";
import { type DiagnosticCltuStart, _decode_DiagnosticCltuStart, _encode_DiagnosticCltuStart } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuStart.ta.mjs";


/**
 * @summary CltuStartReturn_result
 * @description
 * 
 * Result of CLTU-START. positiveResult means the provider entered state 3
 * (active) and will accept CLTU-TRANSFER-DATA; the radiation window is
 * included. negativeResult means the provider stayed in state 2 (ready) and
 * will reject CLTU-TRANSFER-DATA; the diagnostic says why. CCSDS 912.1-B-5,
 * sections 3.4.2.8 and 3.4.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuStartReturn-result ::= CHOICE
 * {  positiveResult                      [0]   SEQUENCE
 *       {  startRadiationTime         Time
 *       ,  stopRadiationTime          ConditionalTime
 *       }
 *    ,  negativeResult                   [1]   DiagnosticCltuStart
 *    }
 * ```
 */
export
type CltuStartReturn_result =
    { positiveResult: CltuStartReturn_result_positiveResult } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticCltuStart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuStartReturn_result: $.ASN1Decoder<CltuStartReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuStartReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuStartReturn_result (el: _Element): CltuStartReturn_result {
    if (!_cached_decoder_for_CltuStartReturn_result) { _cached_decoder_for_CltuStartReturn_result = $._decode_inextensible_choice<CltuStartReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<CltuStartReturn_result_positiveResult>(() => _decode_CltuStartReturn_result_positiveResult) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticCltuStart>(() => _decode_DiagnosticCltuStart) ]
}); }
    return _cached_decoder_for_CltuStartReturn_result(el);
}

let _cached_encoder_for_CltuStartReturn_result: $.ASN1Encoder<CltuStartReturn_result> | null = null;

/**
 * @summary Encodes a(n) CltuStartReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuStartReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_CltuStartReturn_result (value: CltuStartReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuStartReturn_result) { _cached_encoder_for_CltuStartReturn_result = $._encode_choice<CltuStartReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => _encode_CltuStartReturn_result_positiveResult, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticCltuStart, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuStartReturn_result(value, elGetter);
}


/* eslint-enable */
