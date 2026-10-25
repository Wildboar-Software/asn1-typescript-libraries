/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../ProSeHI2Operations/IRI-Parameters.ta.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../ProSeHI2Operations/IRI-Parameters.ta.mjs";


/**
 * @summary ProSeIRIContent
 * @description
 * 
 * ProSe HI2 record. The only defined alternative is a report record.
 *
 * Direct discovery uses a report both for a discovery request and for a match
 * report (table 13.2.1-1). The report is for a non-communication target action.
 * 3GPP TS 33.108, clause 13.2.2.2 and annex B.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeIRIContent         ::=  CHOICE
 * {
 *     iRI-Report-record        [1] IRI-Parameters,    
 *    ...
 * }
 * ```
 */
export
type ProSeIRIContent =
    { iRI_Report_record: IRI_Parameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ProSeIRIContent: $.ASN1Decoder<ProSeIRIContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeIRIContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeIRIContent (el: _Element): ProSeIRIContent {
    if (!_cached_decoder_for_ProSeIRIContent) { _cached_decoder_for_ProSeIRIContent = $._decode_extensible_choice<ProSeIRIContent>({
    "CONTEXT 1": [ "iRI_Report_record", $._decode_implicit<IRI_Parameters>(() => _decode_IRI_Parameters) ]
}); }
    return _cached_decoder_for_ProSeIRIContent(el);
}

let _cached_encoder_for_ProSeIRIContent: $.ASN1Encoder<ProSeIRIContent> | null = null;

/**
 * @summary Encodes a(n) ProSeIRIContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeIRIContent, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeIRIContent (value: ProSeIRIContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeIRIContent) { _cached_encoder_for_ProSeIRIContent = $._encode_choice<ProSeIRIContent>({
    "iRI_Report_record": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_Parameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProSeIRIContent(value, elGetter);
}


/* eslint-enable */
