/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RafGetParameter, _decode_RafGetParameter, _encode_RafGetParameter } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter.ta.mjs";
import { DiagnosticRafGet, _decode_DiagnosticRafGet, _encode_DiagnosticRafGet } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/DiagnosticRafGet.ta.mjs";


/**
 * @summary RafGetParameterReturn_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameterReturn-result ::= CHOICE
 *     {   positiveResult                     [0] RafGetParameter
 *     ,   negativeResult                     [1] DiagnosticRafGet
 *     }
 * ```
 */
export
type RafGetParameterReturn_result =
    { positiveResult: RafGetParameter } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticRafGet } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RafGetParameterReturn_result: $.ASN1Decoder<RafGetParameterReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameterReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameterReturn_result (el: _Element): RafGetParameterReturn_result {
    if (!_cached_decoder_for_RafGetParameterReturn_result) { _cached_decoder_for_RafGetParameterReturn_result = $._decode_inextensible_choice<RafGetParameterReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_explicit<RafGetParameter>(() => _decode_RafGetParameter) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticRafGet>(() => _decode_DiagnosticRafGet) ]
}); }
    return _cached_decoder_for_RafGetParameterReturn_result(el);
}

let _cached_encoder_for_RafGetParameterReturn_result: $.ASN1Encoder<RafGetParameterReturn_result> | null = null;

/**
 * @summary Encodes a(n) RafGetParameterReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameterReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameterReturn_result (value: RafGetParameterReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameterReturn_result) { _cached_encoder_for_RafGetParameterReturn_result = $._encode_choice<RafGetParameterReturn_result>({
    "positiveResult": $._encode_explicit(_TagClass.context, 0, () => _encode_RafGetParameter, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticRafGet, $.BER),
}, $.BER); }
    return _cached_encoder_for_RafGetParameterReturn_result(value, elGetter);
}


/* eslint-enable */
