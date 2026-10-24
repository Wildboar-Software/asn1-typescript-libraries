/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRcfStart_specific, _encode_DiagnosticRcfStart_specific, DiagnosticRcfStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/DiagnosticRcfStart-specific.ta.mjs";


/**
 * @summary DiagnosticRcfStart
 * @description
 *
 * Why RCF-START was rejected. Present only when the result is negative. The
 * provider should test in the order listed in section 3.4.2.9 and return the
 * first match. common carries the shared diagnostics duplicate Invoke-ID and
 * other reason. specific carries the RCF-START diagnostics. 'other reason' is
 * used only when no listed value fits.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.9, 3.1.1.4, and 3.1.3.4.
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
