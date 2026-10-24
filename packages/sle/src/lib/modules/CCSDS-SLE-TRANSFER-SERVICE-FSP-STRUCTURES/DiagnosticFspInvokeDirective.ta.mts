/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticFspInvokeDirective_specific, _encode_DiagnosticFspInvokeDirective_specific, DiagnosticFspInvokeDirective_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspInvokeDirective-specific.ta.mjs";


/**
 * @summary DiagnosticFspInvokeDirective
 * @description
 * 
 * Negative-result diagnostic of FSP-INVOKE-DIRECTIVE. A positive result omits
 * the diagnostic and forwards the directive. The provider stays in state 3.
 * `common` carries `duplicateInvokeId` and `otherReason`. `specific` carries
 * the codes in section 3.12.2.8. Checks follow the order in that section.
 * 
 * CCSDS 912.3-B-3, sections 3.12.2.8, 3.12.3, and 3.1.3.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspInvokeDirective            ::=    CHOICE
 * {  common                           [0]   Diagnostics
 * ,  specific                         [1]   INTEGER
 *    {  directiveInvocationNotAllowed          (0)
 *    ,  directiveIdentificationOutOfSequence   (1)
 *    ,  directiveError                         (2)
 *    }
 * }
 * ```
 */
export
type DiagnosticFspInvokeDirective =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticFspInvokeDirective_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticFspInvokeDirective: $.ASN1Decoder<DiagnosticFspInvokeDirective> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspInvokeDirective
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspInvokeDirective (el: _Element): DiagnosticFspInvokeDirective {
    if (!_cached_decoder_for_DiagnosticFspInvokeDirective) { _cached_decoder_for_DiagnosticFspInvokeDirective = $._decode_inextensible_choice<DiagnosticFspInvokeDirective>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticFspInvokeDirective_specific>(() => _decode_DiagnosticFspInvokeDirective_specific) ]
}); }
    return _cached_decoder_for_DiagnosticFspInvokeDirective(el);
}

let _cached_encoder_for_DiagnosticFspInvokeDirective: $.ASN1Encoder<DiagnosticFspInvokeDirective> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspInvokeDirective into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspInvokeDirective, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspInvokeDirective (value: DiagnosticFspInvokeDirective, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspInvokeDirective) { _cached_encoder_for_DiagnosticFspInvokeDirective = $._encode_choice<DiagnosticFspInvokeDirective>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticFspInvokeDirective_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticFspInvokeDirective(value, elGetter);
}


/* eslint-enable */
