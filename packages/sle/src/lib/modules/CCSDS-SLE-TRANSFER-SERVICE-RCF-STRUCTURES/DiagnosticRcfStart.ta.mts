/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
// export { Diagnostics, Diagnostics_duplicateInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, duplicateInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, Diagnostics_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRcfStart_specific, _encode_DiagnosticRcfStart_specific, DiagnosticRcfStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/DiagnosticRcfStart-specific.ta.mjs";
// export { DiagnosticRcfStart_specific, DiagnosticRcfStart_specific_outOfService /* IMPORTED_LONG_NAMED_INTEGER */, outOfService /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRcfStart_specific_unableToComply /* IMPORTED_LONG_NAMED_INTEGER */, unableToComply /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRcfStart_specific_invalidStartTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidStartTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRcfStart_specific_invalidStopTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidStopTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRcfStart_specific_missingTimeValue /* IMPORTED_LONG_NAMED_INTEGER */, missingTimeValue /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRcfStart_specific_invalidGvcid /* IMPORTED_LONG_NAMED_INTEGER */, invalidGvcid /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagnosticRcfStart_specific, _encode_DiagnosticRcfStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/DiagnosticRcfStart-specific.ta.mjs";


/**
 * @summary DiagnosticRcfStart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRcfStart             ::=  CHOICE
 * {   common                            [0] Diagnostics
 * ,   specific                          [1] INTEGER
 *     {   outOfService                          (0)
 *     ,   unableToComply                        (1)
 *     ,   invalidStartTime                      (2)
 *     ,   invalidStopTime                       (3)
 *     ,   missingTimeValue                      (4)
 *     ,   invalidGvcid                          (5)
 *     }
 * }
 * ```
 */
export
type DiagnosticRcfStart =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticRcfStart_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticRcfStart: $.ASN1Decoder<DiagnosticRcfStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRcfStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRcfStart (el: _Element): DiagnosticRcfStart {
    if (!_cached_decoder_for_DiagnosticRcfStart) { _cached_decoder_for_DiagnosticRcfStart = $._decode_inextensible_choice<DiagnosticRcfStart>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticRcfStart_specific>(() => _decode_DiagnosticRcfStart_specific) ]
}); }
    return _cached_decoder_for_DiagnosticRcfStart(el);
}

let _cached_encoder_for_DiagnosticRcfStart: $.ASN1Encoder<DiagnosticRcfStart> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRcfStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRcfStart, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRcfStart (value: DiagnosticRcfStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRcfStart) { _cached_encoder_for_DiagnosticRcfStart = $._encode_choice<DiagnosticRcfStart>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticRcfStart_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticRcfStart(value, elGetter);
}


/* eslint-enable */
