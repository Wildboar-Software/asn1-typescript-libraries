/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRafGet_specific, _encode_DiagnosticRafGet_specific, DiagnosticRafGet_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/DiagnosticRafGet-specific.ta.mjs";


/**
 * @summary DiagnosticRafGet
 * @description
 * 
 * Negative-result diagnostic of RAF-GET-PARAMETER. A positive result includes
 * no diagnostic. `common` carries the shared diagnostics `duplicateInvokeId`
 * and `otherReason`. `specific` carries `unknownParameter`. `otherReason` is
 * used only when no listed value fits. Checks should follow the order in
 * section 3.10.2.8.
 * 
 * CCSDS 911.1-B-5, sections 3.10.2.8, 3.1.1.4, and 3.1.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRafGet               ::=  CHOICE
 * {   common                            [0] Diagnostics
 * ,   specific                          [1] INTEGER
 *     {   unknownParameter                      (0)
 *     }
 * }
 * ```
 */
export
type DiagnosticRafGet =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticRafGet_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticRafGet: $.ASN1Decoder<DiagnosticRafGet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRafGet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRafGet (el: _Element): DiagnosticRafGet {
    if (!_cached_decoder_for_DiagnosticRafGet) { _cached_decoder_for_DiagnosticRafGet = $._decode_inextensible_choice<DiagnosticRafGet>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticRafGet_specific>(() => _decode_DiagnosticRafGet_specific) ]
}); }
    return _cached_decoder_for_DiagnosticRafGet(el);
}

let _cached_encoder_for_DiagnosticRafGet: $.ASN1Encoder<DiagnosticRafGet> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRafGet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRafGet, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRafGet (value: DiagnosticRafGet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRafGet) { _cached_encoder_for_DiagnosticRafGet = $._encode_choice<DiagnosticRafGet>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticRafGet_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticRafGet(value, elGetter);
}


/* eslint-enable */
