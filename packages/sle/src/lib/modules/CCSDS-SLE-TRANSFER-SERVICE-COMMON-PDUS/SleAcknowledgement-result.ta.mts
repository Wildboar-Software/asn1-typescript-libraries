/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
// export { Diagnostics, Diagnostics_duplicateInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, duplicateInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, Diagnostics_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";


/**
 * @summary SleAcknowledgement_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleAcknowledgement-result ::= CHOICE
 *    { positiveResult     [0]    NULL
 *    , negativeResult     [1]    Diagnostics
 *    }
 * ```
 */
export
type SleAcknowledgement_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: Diagnostics } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SleAcknowledgement_result: $.ASN1Decoder<SleAcknowledgement_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleAcknowledgement_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleAcknowledgement_result (el: _Element): SleAcknowledgement_result {
    if (!_cached_decoder_for_SleAcknowledgement_result) { _cached_decoder_for_SleAcknowledgement_result = $._decode_inextensible_choice<SleAcknowledgement_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ]
}); }
    return _cached_decoder_for_SleAcknowledgement_result(el);
}

let _cached_encoder_for_SleAcknowledgement_result: $.ASN1Encoder<SleAcknowledgement_result> | null = null;

/**
 * @summary Encodes a(n) SleAcknowledgement_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleAcknowledgement_result, encoded as an ASN.1 Element.
 */
export
function _encode_SleAcknowledgement_result (value: SleAcknowledgement_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleAcknowledgement_result) { _cached_encoder_for_SleAcknowledgement_result = $._encode_choice<SleAcknowledgement_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_implicit(_TagClass.context, 1, () => _encode_Diagnostics, $.BER),
}, $.BER); }
    return _cached_encoder_for_SleAcknowledgement_result(value, elGetter);
}


/* eslint-enable */
