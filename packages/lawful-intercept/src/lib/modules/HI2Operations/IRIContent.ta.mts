/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../HI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../HI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary IRIContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIContent  ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,
 *         -- At least one optional parameter must be included within the iRI-Begin-Record.
 *     iRI-End-record            [2] IRI-Parameters,
 *     iRI-Continue-record        [3] IRI-Parameters,
 *         -- At least one optional parameter must be included within the iRI-Continue-Record.
 *     iRI-Report-record        [4] IRI-Parameters,
 *         -- At least one optional parameter must be included within the iRI-Report-Record.
 *     ...
 * }
 * ```
 */
export
type IRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Continue_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IRIContent: $.ASN1Decoder<IRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIContent (el: _Element): IRIContent {
    if (!_cached_decoder_for_IRIContent) { _cached_decoder_for_IRIContent = $._decode_extensible_choice<IRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Continue_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 4": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_IRIContent(el);
}

let _cached_encoder_for_IRIContent: $.ASN1Encoder<IRIContent> | null = null;

/**
 * @summary Encodes a(n) IRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_IRIContent (value: IRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIContent) { _cached_encoder_for_IRIContent = $._encode_choice<IRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Continue_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_IRIContent(value, elGetter);
}


/* eslint-enable */
