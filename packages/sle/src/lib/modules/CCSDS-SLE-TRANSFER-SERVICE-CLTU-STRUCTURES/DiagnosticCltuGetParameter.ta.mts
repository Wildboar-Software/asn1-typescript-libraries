/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, type Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticCltuGetParameter_specific, _encode_DiagnosticCltuGetParameter_specific, type DiagnosticCltuGetParameter_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuGetParameter-specific.ta.mjs";


/**
 * @summary DiagnosticCltuGetParameter
 * @description
 * 
 * Why CLTU-GET-PARAMETER failed. common carries duplicate invoke id, when the
 * invoke-ID matches an invocation still awaiting a return, and other reason,
 * used only when no listed diagnostic fits. specific carries unknown parameter.
 * CCSDS 912.1-B-5, sections 3.10.2.8 and 3.1.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuGetParameter        ::=    CHOICE
 * {  common                                 [0]   Diagnostics
 * ,  specific                               [1]   INTEGER
 *    {  unknownParameter                 (0)
 *    }
 * }
 * ```
 */
export
type DiagnosticCltuGetParameter =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticCltuGetParameter_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticCltuGetParameter: $.ASN1Decoder<DiagnosticCltuGetParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuGetParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuGetParameter (el: _Element): DiagnosticCltuGetParameter {
    if (!_cached_decoder_for_DiagnosticCltuGetParameter) { _cached_decoder_for_DiagnosticCltuGetParameter = $._decode_inextensible_choice<DiagnosticCltuGetParameter>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticCltuGetParameter_specific>(() => _decode_DiagnosticCltuGetParameter_specific) ]
}); }
    return _cached_decoder_for_DiagnosticCltuGetParameter(el);
}

let _cached_encoder_for_DiagnosticCltuGetParameter: $.ASN1Encoder<DiagnosticCltuGetParameter> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuGetParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuGetParameter, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuGetParameter (value: DiagnosticCltuGetParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuGetParameter) { _cached_encoder_for_DiagnosticCltuGetParameter = $._encode_choice<DiagnosticCltuGetParameter>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticCltuGetParameter_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticCltuGetParameter(value, elGetter);
}


/* eslint-enable */
