/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary CaseIgnoreList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CaseIgnoreList  ::=  SEQUENCE OF UnboundedDirectoryString
 * ```
 */
export type CaseIgnoreList = UnboundedDirectoryString[]; // SequenceOfType

let _cached_decoder_for_CaseIgnoreList: $.ASN1Decoder<CaseIgnoreList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CaseIgnoreList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CaseIgnoreList} The decoded data structure.
 */
export function _decode_CaseIgnoreList(el: _Element): CaseIgnoreList {
    if (!_cached_decoder_for_CaseIgnoreList) {
        _cached_decoder_for_CaseIgnoreList = $._decodeSequenceOf<UnboundedDirectoryString>(
            () => _decode_UnboundedDirectoryString
        );
    }
    return _cached_decoder_for_CaseIgnoreList(el);
}

let _cached_encoder_for_CaseIgnoreList: $.ASN1Encoder<CaseIgnoreList> | null = null;

/**
 * @summary Encodes a(n) CaseIgnoreList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CaseIgnoreList, encoded as an ASN.1 Element.
 */
export function _encode_CaseIgnoreList(
    value: CaseIgnoreList,
    elGetter: $.ASN1Encoder<CaseIgnoreList>
): _Element {
    if (!_cached_encoder_for_CaseIgnoreList) {
        _cached_encoder_for_CaseIgnoreList = $._encodeSequenceOf<UnboundedDirectoryString>(
            () => _encode_UnboundedDirectoryString,
            $.DER
        );
    }
    return _cached_encoder_for_CaseIgnoreList(value, elGetter);
}


/* eslint-enable */
