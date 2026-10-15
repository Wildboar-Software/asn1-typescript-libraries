/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticCltuThrowEvent, _decode_DiagnosticCltuThrowEvent, _encode_DiagnosticCltuThrowEvent } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuThrowEvent.ta.mjs";


/**
 * @summary CltuThrowEventReturn_result
 * @description
 * 
 * Result of CLTU-THROW-EVENT. positiveResult (NULL) means the event and its
 * qualifier will be forwarded to SLE Complex Management. It does not report
 * whether the actions succeeded; that arrives later on CLTU-ASYNC-NOTIFY.
 * negativeResult means the event is not forwarded. CCSDS 912.1-B-5, sections
 * 3.11.1.2 and 3.11.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuThrowEventReturn-result ::= CHOICE
 *    {  positiveResult                      [0]   NULL
 *    ,  negativeResult                      [1]   DiagnosticCltuThrowEvent
 *    }
 * ```
 */
export
type CltuThrowEventReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticCltuThrowEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuThrowEventReturn_result: $.ASN1Decoder<CltuThrowEventReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuThrowEventReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuThrowEventReturn_result (el: _Element): CltuThrowEventReturn_result {
    if (!_cached_decoder_for_CltuThrowEventReturn_result) { _cached_decoder_for_CltuThrowEventReturn_result = $._decode_inextensible_choice<CltuThrowEventReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticCltuThrowEvent>(() => _decode_DiagnosticCltuThrowEvent) ]
}); }
    return _cached_decoder_for_CltuThrowEventReturn_result(el);
}

let _cached_encoder_for_CltuThrowEventReturn_result: $.ASN1Encoder<CltuThrowEventReturn_result> | null = null;

/**
 * @summary Encodes a(n) CltuThrowEventReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuThrowEventReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_CltuThrowEventReturn_result (value: CltuThrowEventReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuThrowEventReturn_result) { _cached_encoder_for_CltuThrowEventReturn_result = $._encode_choice<CltuThrowEventReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticCltuThrowEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuThrowEventReturn_result(value, elGetter);
}


/* eslint-enable */
