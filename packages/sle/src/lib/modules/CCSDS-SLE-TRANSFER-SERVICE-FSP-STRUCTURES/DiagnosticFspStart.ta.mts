/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticFspStart_specific, _encode_DiagnosticFspStart_specific, DiagnosticFspStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspStart-specific.ta.mjs";


/**
 * @summary DiagnosticFspStart
 * @description
 * 
 * Negative-result diagnostic of FSP-START. A positive result omits the
 * diagnostic, and the provider stays in state 2. `common` carries
 * `duplicateInvokeId` and `otherReason`. `specific` carries the FSP-START codes
 * in section 3.4.2.9. Checks follow the order in which that section lists the
 * diagnostics.
 * 
 * CCSDS 912.3-B-3, sections 3.4.2.9, 3.4.3, and 3.1.3.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspStart       ::=    CHOICE
 * {  common            [0]   Diagnostics
 * ,  specific          [1]   INTEGER
 *    {  outOfService            (0)
 *    ,  unableToComply          (1)
 *    ,  productionTimeExpired   (2)
 *    }
 * }
 * ```
 */
export
type DiagnosticFspStart =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticFspStart_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticFspStart: $.ASN1Decoder<DiagnosticFspStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspStart (el: _Element): DiagnosticFspStart {
    if (!_cached_decoder_for_DiagnosticFspStart) { _cached_decoder_for_DiagnosticFspStart = $._decode_inextensible_choice<DiagnosticFspStart>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticFspStart_specific>(() => _decode_DiagnosticFspStart_specific) ]
}); }
    return _cached_decoder_for_DiagnosticFspStart(el);
}

let _cached_encoder_for_DiagnosticFspStart: $.ASN1Encoder<DiagnosticFspStart> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspStart, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspStart (value: DiagnosticFspStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspStart) { _cached_encoder_for_DiagnosticFspStart = $._encode_choice<DiagnosticFspStart>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticFspStart_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticFspStart(value, elGetter);
}


/* eslint-enable */
