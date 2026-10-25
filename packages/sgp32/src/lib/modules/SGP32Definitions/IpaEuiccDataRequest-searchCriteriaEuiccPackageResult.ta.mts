/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaEuiccDataRequest_searchCriteriaEuiccPackageResult
 * @description
 * 
 * eUICC Package Result filter, applied only when `tagList` contains `'A2'`.
 * `seqNumber` selects the stored eUICC Package Result with that sequence
 * number, when one is stored. SGP.32 v1.2, section 2.11.1.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataRequest-searchCriteriaEuiccPackageResult ::= CHOICE {
 *     seqNumber [0] INTEGER
 * }
 * ```
 */
export
type IpaEuiccDataRequest_searchCriteriaEuiccPackageResult =
    { seqNumber: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult: $.ASN1Decoder<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataRequest_searchCriteriaEuiccPackageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult (el: _Element): IpaEuiccDataRequest_searchCriteriaEuiccPackageResult {
    if (!_cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult) { _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult = $._decode_inextensible_choice<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>({
    "CONTEXT 0": [ "seqNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult(el);
}

let _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult: $.ASN1Encoder<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataRequest_searchCriteriaEuiccPackageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult (value: IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult) { _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult = $._encode_choice<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>({
    "seqNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult(value, elGetter);
}


/* eslint-enable */
