/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticCltuStart_specific, _encode_DiagnosticCltuStart_specific, DiagnosticCltuStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuStart-specific.ta.mjs";


/**
 * @summary DiagnosticCltuStart
 * @description
 * 
 * Why CLTU-START failed. common carries duplicate invoke id and other reason.
 * specific carries out of service, unable to comply, production time expired,
 * and invalid cltu-ID. Present only when result is negative. CCSDS 912.1-B-5,
 * section 3.4.2.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuStart               ::=    CHOICE
 * {  common                                 [0]   Diagnostics
 * ,  specific                               [1]   INTEGER
 *    {  outOfService                     (0)
 *    ,  unableToComply                   (1)
 *    ,  productionTimeExpired            (2)
 *    , invalidCltuId                     (3)
 *    }
 * }
 * ```
 */
export
type DiagnosticCltuStart =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticCltuStart_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticCltuStart: $.ASN1Decoder<DiagnosticCltuStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuStart (el: _Element): DiagnosticCltuStart {
    if (!_cached_decoder_for_DiagnosticCltuStart) { _cached_decoder_for_DiagnosticCltuStart = $._decode_inextensible_choice<DiagnosticCltuStart>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticCltuStart_specific>(() => _decode_DiagnosticCltuStart_specific) ]
}); }
    return _cached_decoder_for_DiagnosticCltuStart(el);
}

let _cached_encoder_for_DiagnosticCltuStart: $.ASN1Encoder<DiagnosticCltuStart> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuStart, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuStart (value: DiagnosticCltuStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuStart) { _cached_encoder_for_DiagnosticCltuStart = $._encode_choice<DiagnosticCltuStart>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticCltuStart_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticCltuStart(value, elGetter);
}


/* eslint-enable */
