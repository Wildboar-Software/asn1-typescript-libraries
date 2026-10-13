/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Tetra_IRI_Parameters, _decode_Tetra_IRI_Parameters, _encode_Tetra_IRI_Parameters } from "../TETRA-HI2Operations/Tetra-IRI-Parameters.ta.mjs";
// export { Tetra_IRI_Parameters, _decode_Tetra_IRI_Parameters, _encode_Tetra_IRI_Parameters } from "../TETRA-HI2Operations/Tetra-IRI-Parameters.ta.mjs";


/**
 * @summary TetraIRIContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TetraIRIContent         ::=  CHOICE 
 * {
 *     iRI-Begin-record        [1] Tetra-IRI-Parameters,
 *         -- include at least one optional parameter
 *     iRI-End-record            [2] Tetra-IRI-Parameters,
 *     iRI-Continue-record        [3] Tetra-IRI-Parameters,
 *         -- include at least one optional parameter
 *     iRI-Report-record        [4] Tetra-IRI-Parameters
 *         -- include at least one optional parameter
 * }
 * ```
 */
export
type TetraIRIContent =
    { iRI_Begin_record: Tetra_IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: Tetra_IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Continue_record: Tetra_IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: Tetra_IRI_Parameters } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TetraIRIContent: $.ASN1Decoder<TetraIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TetraIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TetraIRIContent (el: _Element): TetraIRIContent {
    if (!_cached_decoder_for_TetraIRIContent) { _cached_decoder_for_TetraIRIContent = $._decode_inextensible_choice<TetraIRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<Tetra_IRI_Parameters>(() => _decode_Tetra_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<Tetra_IRI_Parameters>(() => _decode_Tetra_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Continue_record", $._decode_implicit<Tetra_IRI_Parameters>(() => _decode_Tetra_IRI_Parameters) ],
    "CONTEXT 4": [ "iRI_Report_record", $._decode_implicit<Tetra_IRI_Parameters>(() => _decode_Tetra_IRI_Parameters) ]
}); }
    return _cached_decoder_for_TetraIRIContent(el);
}

let _cached_encoder_for_TetraIRIContent: $.ASN1Encoder<TetraIRIContent> | null = null;

/**
 * @summary Encodes a(n) TetraIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TetraIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_TetraIRIContent (value: TetraIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TetraIRIContent) { _cached_encoder_for_TetraIRIContent = $._encode_choice<TetraIRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_Tetra_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_Tetra_IRI_Parameters, $.BER),
    "iRI_Continue_record": $._encode_implicit(_TagClass.context, 3, () => _encode_Tetra_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 4, () => _encode_Tetra_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_TetraIRIContent(value, elGetter);
}


/* eslint-enable */
