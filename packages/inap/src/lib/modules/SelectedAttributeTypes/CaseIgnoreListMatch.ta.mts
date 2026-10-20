/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { ub_match } from "../UpperBounds/ub-match.va.mjs";


/**
 * @summary CaseIgnoreListMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CaseIgnoreListMatch  ::=  SEQUENCE OF DirectoryString{ub-match}
 * ```
 */
export
type CaseIgnoreListMatch = DirectoryString[]; // SequenceOfType

let _cached_decoder_for_CaseIgnoreListMatch: $.ASN1Decoder<CaseIgnoreListMatch> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CaseIgnoreListMatch
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CaseIgnoreListMatch (el: _Element): CaseIgnoreListMatch {
    if (!_cached_decoder_for_CaseIgnoreListMatch) { _cached_decoder_for_CaseIgnoreListMatch = $._decodeSequenceOf<DirectoryString>(() => _decode_DirectoryString); }
    return _cached_decoder_for_CaseIgnoreListMatch(el);
}

let _cached_encoder_for_CaseIgnoreListMatch: $.ASN1Encoder<CaseIgnoreListMatch> | null = null;

/**
 * @summary Encodes a(n) CaseIgnoreListMatch into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CaseIgnoreListMatch, encoded as an ASN.1 Element.
 */
export
function _encode_CaseIgnoreListMatch (value: CaseIgnoreListMatch, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CaseIgnoreListMatch) { _cached_encoder_for_CaseIgnoreListMatch = $._encodeSequenceOf<DirectoryString>(() => _encode_DirectoryString, $.BER); }
    return _cached_encoder_for_CaseIgnoreListMatch(value, elGetter);
}


/* eslint-enable */
