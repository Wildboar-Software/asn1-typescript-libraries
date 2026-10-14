/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRcfGet_specific, _encode_DiagnosticRcfGet_specific, DiagnosticRcfGet_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/DiagnosticRcfGet-specific.ta.mjs";


/**
 * @summary DiagnosticRcfGet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRcfGet               ::=  CHOICE
 * {   common                            [0] Diagnostics
 * ,   specific                          [1] INTEGER
 *     {   unknownParameter                      (0)
 *     }
 * }
 * ```
 */
export
type DiagnosticRcfGet =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticRcfGet_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticRcfGet: $.ASN1Decoder<DiagnosticRcfGet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRcfGet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRcfGet (el: _Element): DiagnosticRcfGet {
    if (!_cached_decoder_for_DiagnosticRcfGet) { _cached_decoder_for_DiagnosticRcfGet = $._decode_inextensible_choice<DiagnosticRcfGet>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticRcfGet_specific>(() => _decode_DiagnosticRcfGet_specific) ]
}); }
    return _cached_decoder_for_DiagnosticRcfGet(el);
}

let _cached_encoder_for_DiagnosticRcfGet: $.ASN1Encoder<DiagnosticRcfGet> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRcfGet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRcfGet, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRcfGet (value: DiagnosticRcfGet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRcfGet) { _cached_encoder_for_DiagnosticRcfGet = $._encode_choice<DiagnosticRcfGet>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticRcfGet_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticRcfGet(value, elGetter);
}


/* eslint-enable */
