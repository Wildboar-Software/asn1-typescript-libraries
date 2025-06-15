/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ReadResultData,
    _decode_ReadResultData,
    _encode_ReadResultData,
} from "../DirectoryAbstractService/ReadResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary ReadResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReadResult  ::=  OPTIONALLY-PROTECTED { ReadResultData }
 * ```
 */
export type ReadResult = OPTIONALLY_PROTECTED<ReadResultData>; // DefinedType

let _cached_decoder_for_ReadResult: $.ASN1Decoder<ReadResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReadResult} The decoded data structure.
 */
export function _decode_ReadResult(el: _Element) {
    if (!_cached_decoder_for_ReadResult) {
        _cached_decoder_for_ReadResult = _get_decoder_for_OPTIONALLY_PROTECTED<ReadResultData>(
            _decode_ReadResultData
        );
    }
    return _cached_decoder_for_ReadResult(el);
}

let _cached_encoder_for_ReadResult: $.ASN1Encoder<ReadResult> | null = null;

/**
 * @summary Encodes a(n) ReadResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadResult, encoded as an ASN.1 Element.
 */
export function _encode_ReadResult(
    value: ReadResult,
    elGetter: $.ASN1Encoder<ReadResult>
) {
    if (!_cached_encoder_for_ReadResult) {
        _cached_encoder_for_ReadResult = _get_encoder_for_OPTIONALLY_PROTECTED<ReadResultData>(
            _encode_ReadResultData
        );
    }
    return _cached_encoder_for_ReadResult(value, elGetter);
}


/* eslint-enable */
