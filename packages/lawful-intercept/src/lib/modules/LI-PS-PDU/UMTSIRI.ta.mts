/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as UmtsHI2Operations from "../UmtsHI2Operations/index.mjs";
import * as UmtsCS_HI2Operations from "../UmtsCS-HI2Operations/index.mjs";

// export { UmtsIRIsContent, _decode_UmtsIRIsContent, _encode_UmtsIRIsContent } from "../UmtsHI2Operations/UmtsIRIsContent.ta.mjs";
// export { UmtsCS_IRIsContent, _decode_UmtsCS_IRIsContent, _encode_UmtsCS_IRIsContent } from "../UmtsCS-HI2Operations/UmtsCS-IRIsContent.ta.mjs";


/**
 * @summary UMTSIRI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTSIRI  ::=  CHOICE
 *     -- This structure may be commented out if not used
 * {
 *     iRI-Parameters      [0] UmtsHI2Operations.IRI-Parameters,
 *     umtsIRIsContent     [1] UmtsHI2Operations.UmtsIRIsContent,
 *     ...,
 *     iRI-CS-Parameters   [2] UmtsCS-HI2Operations.IRI-Parameters,
 *     umtsCS-IRIsContent  [3] UmtsCS-HI2Operations.UmtsCS-IRIsContent
 * }
 * ```
 */
export
type UMTSIRI =
    { iRI_Parameters: UmtsHI2Operations.IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { umtsIRIsContent: UmtsHI2Operations.UmtsIRIsContent } /* CHOICE_ALT_ROOT */
    | { iRI_CS_Parameters: UmtsCS_HI2Operations.IRI_Parameters } /* CHOICE_ALT_EXT */
    | { umtsCS_IRIsContent: UmtsCS_HI2Operations.UmtsCS_IRIsContent } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UMTSIRI: $.ASN1Decoder<UMTSIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UMTSIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UMTSIRI (el: _Element): UMTSIRI {
    if (!_cached_decoder_for_UMTSIRI) { _cached_decoder_for_UMTSIRI = $._decode_extensible_choice<UMTSIRI>({
    "CONTEXT 0": [ "iRI_Parameters", $._decode_implicit<UmtsHI2Operations.IRI_Parameters>(() => UmtsHI2Operations._decode_IRI_Parameters) ],
    "CONTEXT 1": [ "umtsIRIsContent", $._decode_explicit<UmtsHI2Operations.UmtsIRIsContent>(() => UmtsHI2Operations._decode_UmtsIRIsContent) ],
    "CONTEXT 2": [ "iRI_CS_Parameters", $._decode_implicit<UmtsCS_HI2Operations.IRI_Parameters>(() => UmtsCS_HI2Operations._decode_IRI_Parameters) ],
    "CONTEXT 3": [ "umtsCS_IRIsContent", $._decode_explicit<UmtsCS_HI2Operations.UmtsCS_IRIsContent>(() => UmtsCS_HI2Operations._decode_UmtsCS_IRIsContent) ]
}); }
    return _cached_decoder_for_UMTSIRI(el);
}

let _cached_encoder_for_UMTSIRI: $.ASN1Encoder<UMTSIRI> | null = null;

/**
 * @summary Encodes a(n) UMTSIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UMTSIRI, encoded as an ASN.1 Element.
 */
export
function _encode_UMTSIRI (value: UMTSIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UMTSIRI) { _cached_encoder_for_UMTSIRI = $._encode_choice<UMTSIRI>({
    "iRI_Parameters": $._encode_implicit(_TagClass.context, 0, () => UmtsHI2Operations._encode_IRI_Parameters, $.BER),
    "umtsIRIsContent": $._encode_explicit(_TagClass.context, 1, () => UmtsHI2Operations._encode_UmtsIRIsContent, $.BER),
    "iRI_CS_Parameters": $._encode_implicit(_TagClass.context, 2, () => UmtsCS_HI2Operations._encode_IRI_Parameters, $.BER),
    "umtsCS_IRIsContent": $._encode_explicit(_TagClass.context, 3, () => UmtsCS_HI2Operations._encode_UmtsCS_IRIsContent, $.BER),
}, $.BER); }
    return _cached_encoder_for_UMTSIRI(value, elGetter);
}


/* eslint-enable */
