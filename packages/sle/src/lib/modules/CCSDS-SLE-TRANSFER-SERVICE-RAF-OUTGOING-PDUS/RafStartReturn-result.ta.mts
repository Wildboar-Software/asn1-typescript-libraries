/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticRafStart, _decode_DiagnosticRafStart, _encode_DiagnosticRafStart } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/DiagnosticRafStart.ta.mjs";
// export { DiagnosticRafStart, _decode_DiagnosticRafStart, _encode_DiagnosticRafStart } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/DiagnosticRafStart.ta.mjs";


/**
 * @summary RafStartReturn_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafStartReturn-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RafStartReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticRafStart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RafStartReturn_result: $.ASN1Decoder<RafStartReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafStartReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafStartReturn_result (el: _Element): RafStartReturn_result {
    if (!_cached_decoder_for_RafStartReturn_result) { _cached_decoder_for_RafStartReturn_result = $._decode_inextensible_choice<RafStartReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticRafStart>(() => _decode_DiagnosticRafStart) ]
}); }
    return _cached_decoder_for_RafStartReturn_result(el);
}

let _cached_encoder_for_RafStartReturn_result: $.ASN1Encoder<RafStartReturn_result> | null = null;

/**
 * @summary Encodes a(n) RafStartReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafStartReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_RafStartReturn_result (value: RafStartReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafStartReturn_result) { _cached_encoder_for_RafStartReturn_result = $._encode_choice<RafStartReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticRafStart, $.BER),
}, $.BER); }
    return _cached_encoder_for_RafStartReturn_result(value, elGetter);
}


/* eslint-enable */
