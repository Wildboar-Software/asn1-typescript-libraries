/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FspGetParameter, _decode_FspGetParameter, _encode_FspGetParameter } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter.ta.mjs";
import { DiagnosticFspGet, _decode_DiagnosticFspGet, _encode_DiagnosticFspGet } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspGet.ta.mjs";


/**
 * @summary FspGetParameterReturn_result
 * @description
 *
 * `positiveResult` is the current value of the parameter named in the
 * invocation (table 3-11). `negativeResult` is the rejection diagnostic.
 * Duplicate invoke-ID and other reason are the common diagnostics;
 * `unknownParameter` is FSP-specific.
 *
 * CCSDS 912.3-B-3, sections 3.10.2.7 and 3.10.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameterReturn-result ::= CHOICE
 *    {  positiveResult    [0]   FspGetParameter
 *    ,  negativeResult    [1]   DiagnosticFspGet
 *    }
 * ```
 */
export
type FspGetParameterReturn_result =
    { positiveResult: FspGetParameter } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticFspGet } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspGetParameterReturn_result: $.ASN1Decoder<FspGetParameterReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameterReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameterReturn_result (el: _Element): FspGetParameterReturn_result {
    if (!_cached_decoder_for_FspGetParameterReturn_result) { _cached_decoder_for_FspGetParameterReturn_result = $._decode_inextensible_choice<FspGetParameterReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_explicit<FspGetParameter>(() => _decode_FspGetParameter) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticFspGet>(() => _decode_DiagnosticFspGet) ]
}); }
    return _cached_decoder_for_FspGetParameterReturn_result(el);
}

let _cached_encoder_for_FspGetParameterReturn_result: $.ASN1Encoder<FspGetParameterReturn_result> | null = null;

/**
 * @summary Encodes a(n) FspGetParameterReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameterReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameterReturn_result (value: FspGetParameterReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameterReturn_result) { _cached_encoder_for_FspGetParameterReturn_result = $._encode_choice<FspGetParameterReturn_result>({
    "positiveResult": $._encode_explicit(_TagClass.context, 0, () => _encode_FspGetParameter, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticFspGet, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspGetParameterReturn_result(value, elGetter);
}


/* eslint-enable */
