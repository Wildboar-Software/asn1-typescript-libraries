/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RocfGetParameter, _decode_RocfGetParameter, _encode_RocfGetParameter } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter.ta.mjs";
import { DiagnosticRocfGet, _decode_DiagnosticRocfGet, _encode_DiagnosticRocfGet } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfGet.ta.mjs";


/**
 * @summary RocfGetParameterReturn_result
 * @description
 * 
 * Outcome of ROCF-GET-PARAMETER. positiveResult is the table 3-11 parameter
 * and its value. negativeResult is the diagnostic, and no parameter value is
 * returned.
 *
 * CCSDS 911.5-B-4, sections 3.10.2.6 and 3.10.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameterReturn-result ::= CHOICE
 *    {  positiveResult    [0]   RocfGetParameter
 *    ,  negativeResult    [1]   DiagnosticRocfGet
 *    }
 * ```
 */
export
type RocfGetParameterReturn_result =
    { positiveResult: RocfGetParameter } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticRocfGet } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RocfGetParameterReturn_result: $.ASN1Decoder<RocfGetParameterReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameterReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameterReturn_result (el: _Element): RocfGetParameterReturn_result {
    if (!_cached_decoder_for_RocfGetParameterReturn_result) { _cached_decoder_for_RocfGetParameterReturn_result = $._decode_inextensible_choice<RocfGetParameterReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_explicit<RocfGetParameter>(() => _decode_RocfGetParameter) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticRocfGet>(() => _decode_DiagnosticRocfGet) ]
}); }
    return _cached_decoder_for_RocfGetParameterReturn_result(el);
}

let _cached_encoder_for_RocfGetParameterReturn_result: $.ASN1Encoder<RocfGetParameterReturn_result> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameterReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameterReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameterReturn_result (value: RocfGetParameterReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameterReturn_result) { _cached_encoder_for_RocfGetParameterReturn_result = $._encode_choice<RocfGetParameterReturn_result>({
    "positiveResult": $._encode_explicit(_TagClass.context, 0, () => _encode_RocfGetParameter, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticRocfGet, $.BER),
}, $.BER); }
    return _cached_encoder_for_RocfGetParameterReturn_result(value, elGetter);
}


/* eslint-enable */
