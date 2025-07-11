/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ListResultData,
    _decode_ListResultData,
    _encode_ListResultData,
} from "../DirectoryAbstractService/ListResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary ListResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListResult  ::=  OPTIONALLY-PROTECTED { ListResultData }
 * ```
 */
export type ListResult = OPTIONALLY_PROTECTED<ListResultData>; // DefinedType

let _cached_decoder_for_ListResult: $.ASN1Decoder<ListResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListResult} The decoded data structure.
 */
export function _decode_ListResult(el: _Element): ListResult {
    if (!_cached_decoder_for_ListResult) {
        _cached_decoder_for_ListResult = _get_decoder_for_OPTIONALLY_PROTECTED<ListResultData>(
            _decode_ListResultData
        );
    }
    return _cached_decoder_for_ListResult(el);
}

let _cached_encoder_for_ListResult: $.ASN1Encoder<ListResult> | null = null;

/**
 * @summary Encodes a(n) ListResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListResult, encoded as an ASN.1 Element.
 */
export function _encode_ListResult(
    value: ListResult,
    elGetter: $.ASN1Encoder<ListResult>
): _Element {
    if (!_cached_encoder_for_ListResult) {
        _cached_encoder_for_ListResult = _get_encoder_for_OPTIONALLY_PROTECTED<ListResultData>(
            _encode_ListResultData
        );
    }
    return _cached_encoder_for_ListResult(value, elGetter);
}


/* eslint-enable */
