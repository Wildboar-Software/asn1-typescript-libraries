/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../UmtsHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../UmtsHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary UmtsIRIContent
 * @description
 * 
 * One HI2 IRI record for UMTS packet-domain and IMS interception (annex B.3).
 * The four alternatives are independent of any one signalling message; the
 * event inside the record says what happened.
 * 
 * Begin opens a communication attempt. In the packet domain that is successful
 * PDP context activation, start of interception while a PDP context is active
 * (one begin per active context), an inter-SGSN routing area update that
 * changes the PLMN while a context is active, or entry to an interception area
 * with a context active (clause 6.5.1.2). Begin, continue, and report each
 * include at least one optional parameter.
 * 
 * End closes the attempt. In the packet domain it is PDP context deactivation
 * (clause 6.5.1.4). If interception is turned off while a PDP context stays up,
 * no end record is sent (clause 4.5.3).
 * 
 * Continue is used during the attempt. In the packet domain it reports PDP
 * context modification and an inter-SGSN routing area update that does not
 * change the PLMN (clause 6.5.1.3). While a PDP context is active, continue
 * carries CC-relevant IRI and report carries the other IRI (clause 4.5.3). A
 * continue does not allocate a new correlation number.
 * 
 * Report is for non-communication events, unsuccessful attempts, LALS, and cell
 * site reports (clauses 4.5.3, 6.5.1, and 16.4). IMS uses report for every
 * event in table 7.1; clause 7.5 says IMS record types differ from clause
 * 4.5.3. PTC events in clause 17 name their own begin, continue, end, or report
 * record.
 * 
 * 3GPP TS 33.108, clauses 4.5.3, 6.5.1, 7.5, 16, and 17; annex B.3.
 * https://www.3gpp.org/DynaReport/33108.htm
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
