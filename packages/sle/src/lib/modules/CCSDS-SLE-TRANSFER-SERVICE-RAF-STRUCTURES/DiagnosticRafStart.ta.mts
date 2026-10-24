/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRafStart_specific, _encode_DiagnosticRafStart_specific, DiagnosticRafStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/DiagnosticRafStart-specific.ta.mjs";


/**
 * @summary DiagnosticRafStart
 * @description
 * 
 * Negative-result diagnostic of RAF-START. A positive result includes no
 * diagnostic, and the provider stays in state 2 when the result is negative.
 * `common` carries `duplicateInvokeId` and `otherReason`. `specific` carries
 * the RAF-START codes in section 3.4.2.9. Checks should follow that section's
 * order: duplicate invoke-ID, out of service, unable to comply, missing time
 * value, invalid start time, invalid stop time, then other reason.
 * 
 * CCSDS 911.1-B-5, sections 3.4.2.9, 3.4.3, and 3.1.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRafStart             ::=  CHOICE
 * {   common                            [0] Diagnostics
 * ,   specific                          [1] INTEGER
 *     {   outOfService                          (0)
 *     ,   unableToComply                        (1)
 *     ,   invalidStartTime                      (2)
 *     ,   invalidStopTime                       (3)
 *     ,   missingTimeValue                      (4)
 *     }
 * }
 * ```
 */
export
type DiagnosticRafStart =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticRafStart_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticRafStart: $.ASN1Decoder<DiagnosticRafStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRafStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRafStart (el: _Element): DiagnosticRafStart {
    if (!_cached_decoder_for_DiagnosticRafStart) { _cached_decoder_for_DiagnosticRafStart = $._decode_inextensible_choice<DiagnosticRafStart>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticRafStart_specific>(() => _decode_DiagnosticRafStart_specific) ]
}); }
    return _cached_decoder_for_DiagnosticRafStart(el);
}

let _cached_encoder_for_DiagnosticRafStart: $.ASN1Encoder<DiagnosticRafStart> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRafStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRafStart, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRafStart (value: DiagnosticRafStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRafStart) { _cached_encoder_for_DiagnosticRafStart = $._encode_choice<DiagnosticRafStart>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticRafStart_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticRafStart(value, elGetter);
}


/* eslint-enable */
