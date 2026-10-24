/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Tetra_IRI_Parameters, _decode_Tetra_IRI_Parameters, _encode_Tetra_IRI_Parameters } from "../TETRA-HI2Operations/Tetra-IRI-Parameters.ta.mjs";
// export { Tetra_IRI_Parameters, _decode_Tetra_IRI_Parameters, _encode_Tetra_IRI_Parameters } from "../TETRA-HI2Operations/Tetra-IRI-Parameters.ta.mjs";


/**
 * @summary TetraIRIContent
 * @description
 * 
 * One IRI record. Clause 8.2 defines four types, independent of the signalling
 * message that caused the record. IRI-BEGIN opens the transaction at the first
 * event of a communication attempt. IRI-END closes it when the communication or
 * attempt ends. IRI-CONTINUE is sent at any time during that transaction.
 * IRI-REPORT is used for events that are not part of a communication, such as
 * subscriber-controlled input, and may also report a simple unsuccessful
 * attempt.
 *
 * For TETRA, BEGIN is call setup with the A party or the B party as the target.
 * CONTINUE is ringing, queueing, connected, handover, call forward, call hold,
 * or TxGranted. END is call release. REPORT is location update, SDS mobile
 * originating, SDS mobile terminating, group indication, mobile on, mobile off,
 * or direct mode.
 *
 * BEGIN, CONTINUE, and REPORT shall each include at least one optional
 * parameter. The module comment does not put that requirement on END. Clause
 * A.3.5 does not otherwise restrict which parameters appear in which record
 * type, apart from the mandatory control information. A value already sent is
 * not normally repeated: a called-party number is not expected in IRI-END.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 8.2, clause A.3.5, clause A.9.2,
 * clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
