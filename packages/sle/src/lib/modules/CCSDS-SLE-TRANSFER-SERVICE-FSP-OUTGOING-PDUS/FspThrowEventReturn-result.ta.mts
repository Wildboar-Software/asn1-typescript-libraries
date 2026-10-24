/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticFspThrowEvent, _decode_DiagnosticFspThrowEvent, _encode_DiagnosticFspThrowEvent } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspThrowEvent.ta.mjs";


/**
 * @summary FspThrowEventReturn_result
 * @description
 * 
 * Result of FSP-THROW-EVENT. `positiveResult` is empty. A positive result omits
 * the diagnostic. `negativeResult` carries the diagnostic.
 * 
 * CCSDS 912.3-B-3, sections 3.11.2.8 and 3.11.2.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspThrowEventReturn-result ::= CHOICE
 *    {  positiveResult    [0]   NULL
 *    ,  negativeResult    [1]   DiagnosticFspThrowEvent
 *    }
 * ```
 */
export
type FspThrowEventReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticFspThrowEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspThrowEventReturn_result: $.ASN1Decoder<FspThrowEventReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspThrowEventReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspThrowEventReturn_result (el: _Element): FspThrowEventReturn_result {
    if (!_cached_decoder_for_FspThrowEventReturn_result) { _cached_decoder_for_FspThrowEventReturn_result = $._decode_inextensible_choice<FspThrowEventReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticFspThrowEvent>(() => _decode_DiagnosticFspThrowEvent) ]
}); }
    return _cached_decoder_for_FspThrowEventReturn_result(el);
}

let _cached_encoder_for_FspThrowEventReturn_result: $.ASN1Encoder<FspThrowEventReturn_result> | null = null;

/**
 * @summary Encodes a(n) FspThrowEventReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspThrowEventReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_FspThrowEventReturn_result (value: FspThrowEventReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspThrowEventReturn_result) { _cached_encoder_for_FspThrowEventReturn_result = $._encode_choice<FspThrowEventReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticFspThrowEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspThrowEventReturn_result(value, elGetter);
}


/* eslint-enable */
