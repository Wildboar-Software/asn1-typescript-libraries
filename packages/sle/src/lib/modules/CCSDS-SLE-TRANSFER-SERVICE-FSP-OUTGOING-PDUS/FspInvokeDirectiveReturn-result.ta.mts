/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticFspInvokeDirective, _decode_DiagnosticFspInvokeDirective, _encode_DiagnosticFspInvokeDirective } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspInvokeDirective.ta.mjs";


/**
 * @summary FspInvokeDirectiveReturn_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspInvokeDirectiveReturn-result ::= CHOICE
 *    {  positiveResult       [0]   NULL
 *    ,  negativeResult       [1]   DiagnosticFspInvokeDirective
 *    }
 * ```
 */
export
type FspInvokeDirectiveReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticFspInvokeDirective } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspInvokeDirectiveReturn_result: $.ASN1Decoder<FspInvokeDirectiveReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspInvokeDirectiveReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspInvokeDirectiveReturn_result (el: _Element): FspInvokeDirectiveReturn_result {
    if (!_cached_decoder_for_FspInvokeDirectiveReturn_result) { _cached_decoder_for_FspInvokeDirectiveReturn_result = $._decode_inextensible_choice<FspInvokeDirectiveReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticFspInvokeDirective>(() => _decode_DiagnosticFspInvokeDirective) ]
}); }
    return _cached_decoder_for_FspInvokeDirectiveReturn_result(el);
}

let _cached_encoder_for_FspInvokeDirectiveReturn_result: $.ASN1Encoder<FspInvokeDirectiveReturn_result> | null = null;

/**
 * @summary Encodes a(n) FspInvokeDirectiveReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspInvokeDirectiveReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_FspInvokeDirectiveReturn_result (value: FspInvokeDirectiveReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspInvokeDirectiveReturn_result) { _cached_encoder_for_FspInvokeDirectiveReturn_result = $._encode_choice<FspInvokeDirectiveReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticFspInvokeDirective, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspInvokeDirectiveReturn_result(value, elGetter);
}


/* eslint-enable */
