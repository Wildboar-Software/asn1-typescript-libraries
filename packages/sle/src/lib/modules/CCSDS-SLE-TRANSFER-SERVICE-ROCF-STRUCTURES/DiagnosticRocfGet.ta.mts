/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
// export { Diagnostics, Diagnostics_duplicateInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, duplicateInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, Diagnostics_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRocfGet_specific, _encode_DiagnosticRocfGet_specific, DiagnosticRocfGet_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfGet-specific.ta.mjs";
// export { DiagnosticRocfGet_specific, DiagnosticRocfGet_specific_unknownParameter /* IMPORTED_LONG_NAMED_INTEGER */, unknownParameter /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagnosticRocfGet_specific, _encode_DiagnosticRocfGet_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfGet-specific.ta.mjs";


/**
 * @summary DiagnosticRocfGet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRocfGet        ::=    CHOICE
 * {  common            [0]   Diagnostics
 * ,  specific          [1]   INTEGER
 *    {  unknownParameter        (0)
 *    }
 * }
 * ```
 */
export
type DiagnosticRocfGet =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticRocfGet_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticRocfGet: $.ASN1Decoder<DiagnosticRocfGet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRocfGet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRocfGet (el: _Element): DiagnosticRocfGet {
    if (!_cached_decoder_for_DiagnosticRocfGet) { _cached_decoder_for_DiagnosticRocfGet = $._decode_inextensible_choice<DiagnosticRocfGet>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticRocfGet_specific>(() => _decode_DiagnosticRocfGet_specific) ]
}); }
    return _cached_decoder_for_DiagnosticRocfGet(el);
}

let _cached_encoder_for_DiagnosticRocfGet: $.ASN1Encoder<DiagnosticRocfGet> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRocfGet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRocfGet, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRocfGet (value: DiagnosticRocfGet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRocfGet) { _cached_encoder_for_DiagnosticRocfGet = $._encode_choice<DiagnosticRocfGet>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticRocfGet_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticRocfGet(value, elGetter);
}


/* eslint-enable */
