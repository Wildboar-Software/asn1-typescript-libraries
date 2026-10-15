/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../MmsHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../MmsHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary MmsIRIContent
 * @description
 * 
 * One HI2 record.
 * 
 * `iRI_Begin_record`, `iRI_End_record`, and `iRI_Continue_record` are not
 * applicable in this specification. `iRI_Report_record` carries the MMS events
 * and includes at least one of the record's optional parameters. The same
 * record may also carry events that correspond to UMTS/GPRS or EPS. Parameters
 * that share tag numbers stay identical from Release 14 onward.
 * 
 * Clause 15.3 sends every MMS event as a REPORT.
 * 
 * 3GPP TS 33.108, clause 15.3.6 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MmsIRIContent         ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,    -- not applicable for the present document
 *     iRI-End-record        [2] IRI-Parameters, -- not applicable for the present document
 *     iRI-Continue-record        [3] IRI-Parameters,    -- not applicable for the present document
 * 
 *     iRI-Report-record        [4] IRI-Parameters    -- include at least one optional parameter
 * }
 * ```
 */
export
type MmsIRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Continue_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MmsIRIContent: $.ASN1Decoder<MmsIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MmsIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MmsIRIContent (el: _Element): MmsIRIContent {
    if (!_cached_decoder_for_MmsIRIContent) { _cached_decoder_for_MmsIRIContent = $._decode_inextensible_choice<MmsIRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Continue_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 4": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_MmsIRIContent(el);
}

let _cached_encoder_for_MmsIRIContent: $.ASN1Encoder<MmsIRIContent> | null = null;

/**
 * @summary Encodes a(n) MmsIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MmsIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_MmsIRIContent (value: MmsIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MmsIRIContent) { _cached_encoder_for_MmsIRIContent = $._encode_choice<MmsIRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Continue_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_MmsIRIContent(value, elGetter);
}


/* eslint-enable */
