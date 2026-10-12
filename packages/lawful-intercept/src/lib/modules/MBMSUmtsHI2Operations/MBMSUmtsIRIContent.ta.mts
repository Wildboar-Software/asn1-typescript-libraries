/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../MBMSUmtsHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../MBMSUmtsHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary MBMSUmtsIRIContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSUmtsIRIContent         ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,    
 *     iRI-End-record            [2] IRI-Parameters,
 *     iRI-Report-record        [3] IRI-Parameters,    
 *    ...
 * }
 * ```
 */
export
type MBMSUmtsIRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MBMSUmtsIRIContent: $.ASN1Decoder<MBMSUmtsIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSUmtsIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSUmtsIRIContent (el: _Element): MBMSUmtsIRIContent {
    if (!_cached_decoder_for_MBMSUmtsIRIContent) { _cached_decoder_for_MBMSUmtsIRIContent = $._decode_extensible_choice<MBMSUmtsIRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_MBMSUmtsIRIContent(el);
}

let _cached_encoder_for_MBMSUmtsIRIContent: $.ASN1Encoder<MBMSUmtsIRIContent> | null = null;

/**
 * @summary Encodes a(n) MBMSUmtsIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSUmtsIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSUmtsIRIContent (value: MBMSUmtsIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSUmtsIRIContent) { _cached_encoder_for_MBMSUmtsIRIContent = $._encode_choice<MBMSUmtsIRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_MBMSUmtsIRIContent(value, elGetter);
}


/* eslint-enable */
