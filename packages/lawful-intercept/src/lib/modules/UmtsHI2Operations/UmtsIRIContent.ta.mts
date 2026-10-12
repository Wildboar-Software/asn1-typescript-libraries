/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../UmtsHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../UmtsHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary UmtsIRIContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UmtsIRIContent         ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,    -- include at least one optional parameter
 *     iRI-End-record            [2] IRI-Parameters,
 *     iRI-Continue-record        [3] IRI-Parameters,    -- include at least one optional parameter
 *     iRI-Report-record        [4] IRI-Parameters    -- include at least one optional parameter
 * }
 * ```
 */
export
type UmtsIRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Continue_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UmtsIRIContent: $.ASN1Decoder<UmtsIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UmtsIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UmtsIRIContent (el: _Element): UmtsIRIContent {
    if (!_cached_decoder_for_UmtsIRIContent) { _cached_decoder_for_UmtsIRIContent = $._decode_inextensible_choice<UmtsIRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Continue_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 4": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_UmtsIRIContent(el);
}

let _cached_encoder_for_UmtsIRIContent: $.ASN1Encoder<UmtsIRIContent> | null = null;

/**
 * @summary Encodes a(n) UmtsIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UmtsIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_UmtsIRIContent (value: UmtsIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UmtsIRIContent) { _cached_encoder_for_UmtsIRIContent = $._encode_choice<UmtsIRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Continue_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_UmtsIRIContent(value, elGetter);
}


/* eslint-enable */
