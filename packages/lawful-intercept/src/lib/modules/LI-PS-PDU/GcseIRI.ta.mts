/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as GCSEHI2Operations from "../GCSEHI2Operations/index.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../GCSEHI2Operations/IRI-Parameters.ta.mjs";
// export { GcseIRIsContent, _decode_GcseIRIsContent, _encode_GcseIRIsContent } from "../GCSEHI2Operations/GcseIRIsContent.ta.mjs";


/**
 * @summary GcseIRI
 * @description
 * 
 * GCSE IRI from 3GPP TS 33.108: GCSE IRI parameters or `GcseIRIsContent`. May
 * be commented out when unused. See clause 4.4.2.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.4.2, annex A, clause A.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseIRI  ::=  CHOICE
 *     -- This structure may be commented out if not used
 * {
 *     iRI-Gcse-Parameters     [0] GCSEHI2Operations.IRI-Parameters,
 *     gcseIRIsContent         [1] GCSEHI2Operations.GcseIRIsContent,
 *     ...
 * }
 * ```
 */
export
type GcseIRI =
    { iRI_Gcse_Parameters: GCSEHI2Operations.IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { gcseIRIsContent: GCSEHI2Operations.GcseIRIsContent } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GcseIRI: $.ASN1Decoder<GcseIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseIRI (el: _Element): GcseIRI {
    if (!_cached_decoder_for_GcseIRI) { _cached_decoder_for_GcseIRI = $._decode_extensible_choice<GcseIRI>({
    "CONTEXT 0": [ "iRI_Gcse_Parameters", $._decode_implicit<GCSEHI2Operations.IRI_Parameters>(() => GCSEHI2Operations._decode_IRI_Parameters) ],
    "CONTEXT 1": [ "gcseIRIsContent", $._decode_explicit<GCSEHI2Operations.GcseIRIsContent>(() => GCSEHI2Operations._decode_GcseIRIsContent) ]
}); }
    return _cached_decoder_for_GcseIRI(el);
}

let _cached_encoder_for_GcseIRI: $.ASN1Encoder<GcseIRI> | null = null;

/**
 * @summary Encodes a(n) GcseIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseIRI, encoded as an ASN.1 Element.
 */
export
function _encode_GcseIRI (value: GcseIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseIRI) { _cached_encoder_for_GcseIRI = $._encode_choice<GcseIRI>({
    "iRI_Gcse_Parameters": $._encode_implicit(_TagClass.context, 0, () => GCSEHI2Operations._encode_IRI_Parameters, $.BER),
    "gcseIRIsContent": $._encode_explicit(_TagClass.context, 1, () => GCSEHI2Operations._encode_GcseIRIsContent, $.BER),
}, $.BER); }
    return _cached_encoder_for_GcseIRI(value, elGetter);
}


/* eslint-enable */
