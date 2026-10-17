/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../GCSEHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../GCSEHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary GcseIRIContent
 * @description
 * 
 * GCSE HI2 record type (table 14.1).
 *
 * `iRI-Begin-record`: activation of a group that includes the target, the
 * target added to an active group, or start of interception while the target
 * is already a member. `iRI-Continue-record`: user added, user dropped, or
 * the target's connection to the GCS AS changed. `iRI-End-record`:
 * deactivation, the target dropped from an active group, or interception
 * deactivated for a target who is still a member. `iRI-Report-record` is
 * defined in annex B.14.1; table 14.1 does not map a GCSE event to a report.
 *
 * Begin, continue, and report records include at least one parameter that
 * the module marks optional. 3GPP TS 33.108, clause 14.2.6 and annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseIRIContent         ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,    -- include at least one optional parameter
 *     iRI-End-record            [2] IRI-Parameters,
 *     iRI-Continue-record        [3] IRI-Parameters,    -- include at least one optional parameter
 *     iRI-Report-record        [4] IRI-Parameters,    -- include at least one optional parameter
 *    ...
 * }
 * ```
 */
export
type GcseIRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Continue_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GcseIRIContent: $.ASN1Decoder<GcseIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseIRIContent (el: _Element): GcseIRIContent {
    if (!_cached_decoder_for_GcseIRIContent) { _cached_decoder_for_GcseIRIContent = $._decode_extensible_choice<GcseIRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Continue_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 4": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_GcseIRIContent(el);
}

let _cached_encoder_for_GcseIRIContent: $.ASN1Encoder<GcseIRIContent> | null = null;

/**
 * @summary Encodes a(n) GcseIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_GcseIRIContent (value: GcseIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseIRIContent) { _cached_encoder_for_GcseIRIContent = $._encode_choice<GcseIRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Continue_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_GcseIRIContent(value, elGetter);
}


/* eslint-enable */
