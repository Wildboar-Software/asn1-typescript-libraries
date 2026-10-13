/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RcfGetParameter, _decode_RcfGetParameter, _encode_RcfGetParameter } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter.ta.mjs";
// export { RcfGetParameter, _decode_RcfGetParameter, _encode_RcfGetParameter } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter.ta.mjs";
import { DiagnosticRcfGet, _decode_DiagnosticRcfGet, _encode_DiagnosticRcfGet } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/DiagnosticRcfGet.ta.mjs";
// export { DiagnosticRcfGet, _decode_DiagnosticRcfGet, _encode_DiagnosticRcfGet } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/DiagnosticRcfGet.ta.mjs";


/**
 * @summary RcfGetParameterReturn_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameterReturn-result ::= CHOICE
 *     {   positiveResult                     [0] RcfGetParameter
 *     ,   negativeResult                     [1] DiagnosticRcfGet
 *     }
 * ```
 */
export
type RcfGetParameterReturn_result =
    { positiveResult: RcfGetParameter } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticRcfGet } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RcfGetParameterReturn_result: $.ASN1Decoder<RcfGetParameterReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameterReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameterReturn_result (el: _Element): RcfGetParameterReturn_result {
    if (!_cached_decoder_for_RcfGetParameterReturn_result) { _cached_decoder_for_RcfGetParameterReturn_result = $._decode_inextensible_choice<RcfGetParameterReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_explicit<RcfGetParameter>(() => _decode_RcfGetParameter) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticRcfGet>(() => _decode_DiagnosticRcfGet) ]
}); }
    return _cached_decoder_for_RcfGetParameterReturn_result(el);
}

let _cached_encoder_for_RcfGetParameterReturn_result: $.ASN1Encoder<RcfGetParameterReturn_result> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameterReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameterReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameterReturn_result (value: RcfGetParameterReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameterReturn_result) { _cached_encoder_for_RcfGetParameterReturn_result = $._encode_choice<RcfGetParameterReturn_result>({
    "positiveResult": $._encode_explicit(_TagClass.context, 0, () => _encode_RcfGetParameter, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticRcfGet, $.BER),
}, $.BER); }
    return _cached_encoder_for_RcfGetParameterReturn_result(value, elGetter);
}


/* eslint-enable */
