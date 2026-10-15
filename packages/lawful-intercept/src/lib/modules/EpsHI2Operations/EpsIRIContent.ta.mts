/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../EpsHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../EpsHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary EpsIRIContent
 * @description
 * 
 * One HI2 record delivered to the LEMF (clause 10.5.1, annex B.9).
 * 
 * iRI-Begin-record is the first event of an EPS communication: successful
 * bearer or tunnel establishment, start of interception with an active bearer
 * or tunnel, an S-GW relocation that changes the PLMN, or entry to an
 * interception area with a bearer or tunnel active. The last of those is for
 * further study (clause 10.5.1.2). The module comment requires at least one
 * optional parameter.
 * 
 * iRI-End-record is the last event: bearer or tunnel deactivation, or
 * resource-allocation deactivation (clause 10.5.1.4).
 * 
 * iRI-Continue-record is a later event of the same communication, such as
 * bearer modification or a PMIP or DSMIP session modification (clause
 * 10.5.1.3). The module comment requires at least one optional parameter.
 * 
 * iRI-Report-record is a non-communication action, an unsuccessful attempt, a
 * LALS report, or another report in clause 10.5.1.1. The module comment
 * requires at least one optional parameter. Clause 16.4 also uses the report
 * record for a cell-site report.
 * 
 * The same four records carry IMS, PTC, and ProSe IRI when those clauses use
 * this module.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EpsIRIContent         ::=  CHOICE
 * {
 *     iRI-Begin-record        [1] IRI-Parameters,    -- include at least one optional parameter
 *     iRI-End-record            [2] IRI-Parameters,
 *     iRI-Continue-record        [3] IRI-Parameters,    -- include at least one optional parameter
 *     iRI-Report-record        [4] IRI-Parameters    -- include at least one optional parameter
 * }
 * ```
 */
export
type EpsIRIContent =
    { iRI_Begin_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_End_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Continue_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EpsIRIContent: $.ASN1Decoder<EpsIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EpsIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EpsIRIContent (el: _Element): EpsIRIContent {
    if (!_cached_decoder_for_EpsIRIContent) { _cached_decoder_for_EpsIRIContent = $._decode_inextensible_choice<EpsIRIContent>({
    "CONTEXT 1": [ "iRI_Begin_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 2": [ "iRI_End_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 3": [ "iRI_Continue_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ],
    "CONTEXT 4": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_EpsIRIContent(el);
}

let _cached_encoder_for_EpsIRIContent: $.ASN1Encoder<EpsIRIContent> | null = null;

/**
 * @summary Encodes a(n) EpsIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpsIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_EpsIRIContent (value: EpsIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EpsIRIContent) { _cached_encoder_for_EpsIRIContent = $._encode_choice<EpsIRIContent>({
    "iRI_Begin_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
    "iRI_End_record": $._encode_implicit(_TagClass.context, 2, () => _encode_IRI_Parameters, $.BER),
    "iRI_Continue_record": $._encode_implicit(_TagClass.context, 3, () => _encode_IRI_Parameters, $.BER),
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_EpsIRIContent(value, elGetter);
}


/* eslint-enable */
