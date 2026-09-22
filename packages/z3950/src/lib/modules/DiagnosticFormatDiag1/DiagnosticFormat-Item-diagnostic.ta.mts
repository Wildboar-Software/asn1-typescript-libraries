/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagFormat, _decode_DiagFormat, _encode_DiagFormat } from "../DiagnosticFormatDiag1/DiagFormat.ta.mjs";
// export { DiagFormat, _decode_DiagFormat, _encode_DiagFormat } from "../DiagnosticFormatDiag1/DiagFormat.ta.mjs";


/**
 * @summary DiagnosticFormat_Item_diagnostic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFormat-Item-diagnostic ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticFormat_Item_diagnostic =
    { defaultDiagRec: DefaultDiagFormat } /* CHOICE_ALT_ROOT */
    | { explicitDiagnostic: DiagFormat } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticFormat_Item_diagnostic: $.ASN1Decoder<DiagnosticFormat_Item_diagnostic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFormat_Item_diagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFormat_Item_diagnostic (el: _Element): DiagnosticFormat_Item_diagnostic {
    if (!_cached_decoder_for_DiagnosticFormat_Item_diagnostic) { _cached_decoder_for_DiagnosticFormat_Item_diagnostic = $._decode_inextensible_choice<DiagnosticFormat_Item_diagnostic>({
    "CONTEXT 1": [ "defaultDiagRec", $._decode_implicit<DefaultDiagFormat>(() => _decode_DefaultDiagFormat) ],
    "CONTEXT 2": [ "explicitDiagnostic", $._decode_explicit<DiagFormat>(() => _decode_DiagFormat) ]
}); }
    return _cached_decoder_for_DiagnosticFormat_Item_diagnostic(el);
}

let _cached_encoder_for_DiagnosticFormat_Item_diagnostic: $.ASN1Encoder<DiagnosticFormat_Item_diagnostic> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFormat_Item_diagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFormat_Item_diagnostic, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFormat_Item_diagnostic (value: DiagnosticFormat_Item_diagnostic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFormat_Item_diagnostic) { _cached_encoder_for_DiagnosticFormat_Item_diagnostic = $._encode_choice<DiagnosticFormat_Item_diagnostic>({
    "defaultDiagRec": $._encode_implicit(_TagClass.context, 1, () => _encode_DefaultDiagFormat, $.BER),
    "explicitDiagnostic": $._encode_explicit(_TagClass.context, 2, () => _encode_DiagFormat, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticFormat_Item_diagnostic(value, elGetter);
}


/* eslint-enable */
