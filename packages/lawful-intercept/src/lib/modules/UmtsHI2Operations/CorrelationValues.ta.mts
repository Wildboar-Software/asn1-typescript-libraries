/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRI_to_CC_Correlation, _decode_IRI_to_CC_Correlation, _encode_IRI_to_CC_Correlation } from "../UmtsHI2Operations/IRI-to-CC-Correlation.ta.mjs";
// export { IRI_to_CC_Correlation, _decode_IRI_to_CC_Correlation, _encode_IRI_to_CC_Correlation } from "../UmtsHI2Operations/IRI-to-CC-Correlation.ta.mjs";
import { type IRI_to_IRI_Correlation, _decode_IRI_to_IRI_Correlation, _encode_IRI_to_IRI_Correlation } from "../UmtsHI2Operations/IRI-to-IRI-Correlation.ta.mjs";
// export { IRI_to_IRI_Correlation, _decode_IRI_to_IRI_Correlation, _encode_IRI_to_IRI_Correlation } from "../UmtsHI2Operations/IRI-to-IRI-Correlation.ta.mjs";
import { CorrelationValues_both_IRI_CC, _decode_CorrelationValues_both_IRI_CC, _encode_CorrelationValues_both_IRI_CC } from "../UmtsHI2Operations/CorrelationValues-both-IRI-CC.ta.mjs";
// export { CorrelationValues_both_IRI_CC, _decode_CorrelationValues_both_IRI_CC, _encode_CorrelationValues_both_IRI_CC } from "../UmtsHI2Operations/CorrelationValues-both-IRI-CC.ta.mjs";


/**
 * @summary CorrelationValues
 * @description
 * 
 * Correlation beyond the PDP-context correlation number. The CSCF may generate
 * the value; how it is chosen is an implementation matter.
 * 
 * Table 7.2: IRI-to-content identifies each PDP context or bearer, and a second
 * bearer when signalling and user data use two contexts. IRI-to-IRI is the SIP
 * session correlation, a Call-id or another value that identifies the SIP
 * messages of one session. The same parameter correlates an XCAP request with
 * its response (table 7.6). For separated IMS VoIP, the IMS VoIP correlation
 * may be sent instead.
 * 
 * 3GPP TS 33.108, clause 7.1.3, clause 12.1.4, and table 7.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationValues  ::=  CHOICE {
 * 
 *         iri-to-CC     [0]        IRI-to-CC-Correlation, -- correlates IRI to Content(s)
 *         iri-to-iri    [1]        IRI-to-IRI-Correlation, -- correlates IRI to IRI
 *         both-IRI-CC    [2]        SEQUENCE { -- correlates IRI to IRI and IRI to Content(s)
 *                                 iri-CC    [0]    IRI-to-CC-Correlation,
 *                                 iri-IRI    [1]    IRI-to-IRI-Correlation}
 * }
 * ```
 */
export
type CorrelationValues =
    { iri_to_CC: IRI_to_CC_Correlation } /* CHOICE_ALT_ROOT */
    | { iri_to_iri: IRI_to_IRI_Correlation } /* CHOICE_ALT_ROOT */
    | { both_IRI_CC: CorrelationValues_both_IRI_CC } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CorrelationValues: $.ASN1Decoder<CorrelationValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelationValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelationValues (el: _Element): CorrelationValues {
    if (!_cached_decoder_for_CorrelationValues) { _cached_decoder_for_CorrelationValues = $._decode_inextensible_choice<CorrelationValues>({
    "CONTEXT 0": [ "iri_to_CC", $._decode_implicit<IRI_to_CC_Correlation>(() => _decode_IRI_to_CC_Correlation) ],
    "CONTEXT 1": [ "iri_to_iri", $._decode_implicit<IRI_to_IRI_Correlation>(() => _decode_IRI_to_IRI_Correlation) ],
    "CONTEXT 2": [ "both_IRI_CC", $._decode_implicit<CorrelationValues_both_IRI_CC>(() => _decode_CorrelationValues_both_IRI_CC) ]
}); }
    return _cached_decoder_for_CorrelationValues(el);
}

let _cached_encoder_for_CorrelationValues: $.ASN1Encoder<CorrelationValues> | null = null;

/**
 * @summary Encodes a(n) CorrelationValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelationValues, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelationValues (value: CorrelationValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelationValues) { _cached_encoder_for_CorrelationValues = $._encode_choice<CorrelationValues>({
    "iri_to_CC": $._encode_implicit(_TagClass.context, 0, () => _encode_IRI_to_CC_Correlation, $.BER),
    "iri_to_iri": $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_to_IRI_Correlation, $.BER),
    "both_IRI_CC": $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelationValues_both_IRI_CC, $.BER),
}, $.BER); }
    return _cached_encoder_for_CorrelationValues(value, elGetter);
}


/* eslint-enable */
