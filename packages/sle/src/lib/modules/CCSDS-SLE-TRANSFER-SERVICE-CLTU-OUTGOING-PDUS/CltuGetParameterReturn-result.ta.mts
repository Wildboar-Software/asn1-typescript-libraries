/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CltuGetParameter, _decode_CltuGetParameter, _encode_CltuGetParameter } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter.ta.mjs";
import { DiagnosticCltuGetParameter, _decode_DiagnosticCltuGetParameter, _encode_DiagnosticCltuGetParameter } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuGetParameter.ta.mjs";


/**
 * @summary CltuGetParameterReturn_result
 * @description
 * 
 * Result of CLTU-GET-PARAMETER. positiveResult returns the requested parameter.
 * negativeResult returns DiagnosticCltuGetParameter and the parameter is
 * omitted. CCSDS 912.1-B-5, sections 3.10.2.5 through 3.10.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameterReturn-result ::= CHOICE
 *    {  positiveResult                   [0]   CltuGetParameter
 *    ,  negativeResult                   [1]   DiagnosticCltuGetParameter
 *    }
 * ```
 */
export
type CltuGetParameterReturn_result =
    { positiveResult: CltuGetParameter } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticCltuGetParameter } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuGetParameterReturn_result: $.ASN1Decoder<CltuGetParameterReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameterReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameterReturn_result (el: _Element): CltuGetParameterReturn_result {
    if (!_cached_decoder_for_CltuGetParameterReturn_result) { _cached_decoder_for_CltuGetParameterReturn_result = $._decode_inextensible_choice<CltuGetParameterReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_explicit<CltuGetParameter>(() => _decode_CltuGetParameter) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticCltuGetParameter>(() => _decode_DiagnosticCltuGetParameter) ]
}); }
    return _cached_decoder_for_CltuGetParameterReturn_result(el);
}

let _cached_encoder_for_CltuGetParameterReturn_result: $.ASN1Encoder<CltuGetParameterReturn_result> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameterReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameterReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameterReturn_result (value: CltuGetParameterReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameterReturn_result) { _cached_encoder_for_CltuGetParameterReturn_result = $._encode_choice<CltuGetParameterReturn_result>({
    "positiveResult": $._encode_explicit(_TagClass.context, 0, () => _encode_CltuGetParameter, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticCltuGetParameter, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuGetParameterReturn_result(value, elGetter);
}


/* eslint-enable */
