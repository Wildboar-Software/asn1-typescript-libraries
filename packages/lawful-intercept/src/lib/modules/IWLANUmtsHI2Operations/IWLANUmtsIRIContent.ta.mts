/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../IWLANUmtsHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../IWLANUmtsHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary IWLANUmtsIRIContent
 * @description
 * 
 * One HI2 record for an I-WLAN event.
 * 
 * `iRI_Begin_record` is the first event of an intercepted tunnel: successful
 * tunnel establishment, or start of intercept when at least one tunnel is
 * already up (one Begin for each such tunnel). `iRI_End_record` is tunnel
 * disconnect. `iRI_Report_record` covers access initiation and termination,
 * unsuccessful tunnel setup, start of intercept with no tunnel yet, and
 * packet-data header information.
 * 
 * Table 8.1 maps each event to Begin, End, or Report. There is no Continue
 * record in this module.
 * 
 * 3GPP TS 33.108, clause 8.5.1 and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IWLANUmtsIRIContent         ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,    
 *     iRI-End-record            [2] IRI-Parameters,
 *     iRI-Report-record        [3] IRI-Parameters,    
 *    ...
 * }
 * ```
 */
export
type IWLANUmtsIRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IWLANUmtsIRIContent: $.ASN1Decoder<IWLANUmtsIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IWLANUmtsIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IWLANUmtsIRIContent (el: _Element): IWLANUmtsIRIContent {
    if (!_cached_decoder_for_IWLANUmtsIRIContent) { _cached_decoder_for_IWLANUmtsIRIContent = $._decode_extensible_choice<IWLANUmtsIRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_IWLANUmtsIRIContent(el);
}

let _cached_encoder_for_IWLANUmtsIRIContent: $.ASN1Encoder<IWLANUmtsIRIContent> | null = null;

/**
 * @summary Encodes a(n) IWLANUmtsIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IWLANUmtsIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_IWLANUmtsIRIContent (value: IWLANUmtsIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IWLANUmtsIRIContent) { _cached_encoder_for_IWLANUmtsIRIContent = $._encode_choice<IWLANUmtsIRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_IWLANUmtsIRIContent(value, elGetter);
}


/* eslint-enable */
