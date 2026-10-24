/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../UmtsHI2Operations/CorrelationValues.ta.mjs";
// export { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../UmtsHI2Operations/CorrelationValues.ta.mjs";
import { IMS_VoIP_Correlation, _decode_IMS_VoIP_Correlation, _encode_IMS_VoIP_Correlation } from "../UmtsHI2Operations/IMS-VoIP-Correlation.ta.mjs";
// export { IMS_VoIP_Correlation, _decode_IMS_VoIP_Correlation, _encode_IMS_VoIP_Correlation } from "../UmtsHI2Operations/IMS-VoIP-Correlation.ta.mjs";


/**
 * @summary ConfCorrelation
 * @description
 * 
 * Correlation for one conference session, shared with the content of
 * communication when that is delivered.
 *
 * `correlationNumber` is a single correlation value used for both IRI and
 * content. `imsVoIP` is the IMS VoIP correlation form. Informative annex N.3.1
 * says `correlationValues` remains only for historical compatibility and that
 * the other two alternatives are the ones used; that annex is not a
 * requirement, and its context tags differ from this module. For an
 * interception of a conference identity alone, either the single number or the
 * IMS VoIP form may be used. For a target-initiated ad hoc conference,
 * informative annex N.3.2 points at the VoIP examples in clauses N.2.3 and
 * N.2.4 when the conference must be tied to the basic call. 3GPP TS 33.108,
 * clauses 11.1.4 and 11.5; annex N.3 (informative).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfCorrelation  ::=  CHOICE
 * 
 * {
 *     correlationValues [1] CorrelationValues,
 *     correlationNumber [2] OCTET STRING,
 *     imsVoIP              [3] IMS-VoIP-Correlation,
 *     ...
 * }
 * ```
 */
export
type ConfCorrelation =
    { correlationValues: CorrelationValues } /* CHOICE_ALT_ROOT */
    | { correlationNumber: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { imsVoIP: IMS_VoIP_Correlation } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfCorrelation: $.ASN1Decoder<ConfCorrelation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfCorrelation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfCorrelation (el: _Element): ConfCorrelation {
    if (!_cached_decoder_for_ConfCorrelation) { _cached_decoder_for_ConfCorrelation = $._decode_extensible_choice<ConfCorrelation>({
    "CONTEXT 1": [ "correlationValues", $._decode_explicit<CorrelationValues>(() => _decode_CorrelationValues) ],
    "CONTEXT 2": [ "correlationNumber", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "imsVoIP", $._decode_implicit<IMS_VoIP_Correlation>(() => _decode_IMS_VoIP_Correlation) ]
}); }
    return _cached_decoder_for_ConfCorrelation(el);
}

let _cached_encoder_for_ConfCorrelation: $.ASN1Encoder<ConfCorrelation> | null = null;

/**
 * @summary Encodes a(n) ConfCorrelation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfCorrelation, encoded as an ASN.1 Element.
 */
export
function _encode_ConfCorrelation (value: ConfCorrelation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfCorrelation) { _cached_encoder_for_ConfCorrelation = $._encode_choice<ConfCorrelation>({
    "correlationValues": $._encode_explicit(_TagClass.context, 1, () => _encode_CorrelationValues, $.BER),
    "correlationNumber": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "imsVoIP": $._encode_implicit(_TagClass.context, 3, () => _encode_IMS_VoIP_Correlation, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfCorrelation(value, elGetter);
}


/* eslint-enable */
