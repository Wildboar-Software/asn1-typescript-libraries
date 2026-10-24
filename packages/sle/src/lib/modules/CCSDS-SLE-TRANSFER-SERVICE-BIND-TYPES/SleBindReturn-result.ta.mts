/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VersionNumber, _decode_VersionNumber, _encode_VersionNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/VersionNumber.ta.mjs";
import { BindDiagnostic, _decode_BindDiagnostic, _encode_BindDiagnostic } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/BindDiagnostic.ta.mjs";


/**
 * @summary SleBindReturn_result
 * @description
 * 
 * Outcome of BIND. `positive` carries the version that governs the association:
 * the version the initiator proposed, or a lower version when the responder
 * negotiates. `negative` carries the `BindDiagnostic`. The version is absent
 * when the result is negative, and the diagnostic is absent when the result is
 * positive.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.8 and 3.2.2.11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleBindReturn-result ::= CHOICE
 *    { positive          [0]   VersionNumber
 *    , negative          [1]   BindDiagnostic
 *    }
 * ```
 */
export
type SleBindReturn_result =
    { positive: VersionNumber } /* CHOICE_ALT_ROOT */
    | { negative: BindDiagnostic } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SleBindReturn_result: $.ASN1Decoder<SleBindReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleBindReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleBindReturn_result (el: _Element): SleBindReturn_result {
    if (!_cached_decoder_for_SleBindReturn_result) { _cached_decoder_for_SleBindReturn_result = $._decode_inextensible_choice<SleBindReturn_result>({
    "CONTEXT 0": [ "positive", $._decode_implicit<VersionNumber>(() => _decode_VersionNumber) ],
    "CONTEXT 1": [ "negative", $._decode_implicit<BindDiagnostic>(() => _decode_BindDiagnostic) ]
}); }
    return _cached_decoder_for_SleBindReturn_result(el);
}

let _cached_encoder_for_SleBindReturn_result: $.ASN1Encoder<SleBindReturn_result> | null = null;

/**
 * @summary Encodes a(n) SleBindReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleBindReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_SleBindReturn_result (value: SleBindReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleBindReturn_result) { _cached_encoder_for_SleBindReturn_result = $._encode_choice<SleBindReturn_result>({
    "positive": $._encode_implicit(_TagClass.context, 0, () => _encode_VersionNumber, $.BER),
    "negative": $._encode_implicit(_TagClass.context, 1, () => _encode_BindDiagnostic, $.BER),
}, $.BER); }
    return _cached_encoder_for_SleBindReturn_result(value, elGetter);
}


/* eslint-enable */
