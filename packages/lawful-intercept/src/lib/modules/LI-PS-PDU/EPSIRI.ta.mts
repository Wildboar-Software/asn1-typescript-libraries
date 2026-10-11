/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as EpsHI2Operations from "../EpsHI2Operations/index.mjs";

// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../EpsHI2Operations/IRI-Parameters.ta.mjs";
// export { EpsIRIsContent, _decode_EpsIRIsContent, _encode_EpsIRIsContent } from "../EpsHI2Operations/EpsIRIsContent.ta.mjs";

/**
 * @summary EPSIRI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSIRI  ::=  CHOICE
 *     -- This structure may be commented out if not used
 * {
 *     iRI-EPS-Parameters  [0] EpsHI2Operations.IRI-Parameters,
 *     epsIRIsContent      [1] EpsHI2Operations.EpsIRIsContent,
 *     ...
 * }
 * ```
 */
export
type EPSIRI =
    { iRI_EPS_Parameters: EpsHI2Operations.IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { epsIRIsContent: EpsHI2Operations.EpsIRIsContent } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_EPSIRI: $.ASN1Decoder<EPSIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSIRI (el: _Element): EPSIRI {
    if (!_cached_decoder_for_EPSIRI) { _cached_decoder_for_EPSIRI = $._decode_extensible_choice<EPSIRI>({
    "CONTEXT 0": [ "iRI_EPS_Parameters", $._decode_implicit<EpsHI2Operations.IRI_Parameters>(() => EpsHI2Operations._decode_IRI_Parameters) ],
    "CONTEXT 1": [ "epsIRIsContent", $._decode_explicit<EpsHI2Operations.EpsIRIsContent>(() => EpsHI2Operations._decode_EpsIRIsContent) ]
}); }
    return _cached_decoder_for_EPSIRI(el);
}

let _cached_encoder_for_EPSIRI: $.ASN1Encoder<EPSIRI> | null = null;

/**
 * @summary Encodes a(n) EPSIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSIRI, encoded as an ASN.1 Element.
 */
export
function _encode_EPSIRI (value: EPSIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSIRI) { _cached_encoder_for_EPSIRI = $._encode_choice<EPSIRI>({
    "iRI_EPS_Parameters": $._encode_implicit(_TagClass.context, 0, () => EpsHI2Operations._encode_IRI_Parameters, $.BER),
    "epsIRIsContent": $._encode_explicit(_TagClass.context, 1, () => EpsHI2Operations._encode_EpsIRIsContent, $.BER),
}, $.BER); }
    return _cached_encoder_for_EPSIRI(value, elGetter);
}

/* eslint-enable */
