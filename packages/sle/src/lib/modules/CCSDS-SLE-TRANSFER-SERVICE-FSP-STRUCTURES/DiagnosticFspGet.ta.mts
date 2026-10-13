/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
// export { Diagnostics, Diagnostics_duplicateInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, duplicateInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, Diagnostics_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticFspGet_specific, _encode_DiagnosticFspGet_specific, DiagnosticFspGet_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspGet-specific.ta.mjs";
// export { DiagnosticFspGet_specific, DiagnosticFspGet_specific_unknownParameter /* IMPORTED_LONG_NAMED_INTEGER */, unknownParameter /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagnosticFspGet_specific, _encode_DiagnosticFspGet_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspGet-specific.ta.mjs";


/**
 * @summary DiagnosticFspGet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspGet         ::=    CHOICE
 * {  common            [0]   Diagnostics
 * ,  specific          [1]   INTEGER
 *    {  unknownParameter        (0)
 *    }
 * }
 * ```
 */
export
type DiagnosticFspGet =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticFspGet_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticFspGet: $.ASN1Decoder<DiagnosticFspGet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspGet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspGet (el: _Element): DiagnosticFspGet {
    if (!_cached_decoder_for_DiagnosticFspGet) { _cached_decoder_for_DiagnosticFspGet = $._decode_inextensible_choice<DiagnosticFspGet>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticFspGet_specific>(() => _decode_DiagnosticFspGet_specific) ]
}); }
    return _cached_decoder_for_DiagnosticFspGet(el);
}

let _cached_encoder_for_DiagnosticFspGet: $.ASN1Encoder<DiagnosticFspGet> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspGet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspGet, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspGet (value: DiagnosticFspGet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspGet) { _cached_encoder_for_DiagnosticFspGet = $._encode_choice<DiagnosticFspGet>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticFspGet_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticFspGet(value, elGetter);
}


/* eslint-enable */
