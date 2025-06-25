/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MSMessageSubmissionResult_mts_result,
    _decode_MSMessageSubmissionResult_mts_result,
    _encode_MSMessageSubmissionResult_mts_result,
} from '../MSAbstractService/MSMessageSubmissionResult-mts-result.ta.mjs';
import {
    CommonSubmissionResults,
    _decode_CommonSubmissionResults,
    _encode_CommonSubmissionResults,
} from '../MSAbstractService/CommonSubmissionResults.ta.mjs';
/**
 * @summary MSMessageSubmissionResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSMessageSubmissionResult  ::=  CHOICE {
 *   mts-result
 *     SET {COMPONENTS OF
 *            MessageSubmissionResult-- This imported type has IMPLICIT tags -- ,
 *          -- 1994 extension
 *          ms-message-result  [4]  CommonSubmissionResults OPTIONAL},
 *   -- 1994 extension
 *   store-draft-result  [4]  CommonSubmissionResults
 * }
 * ```
 */
export type MSMessageSubmissionResult =
    | { mts_result: MSMessageSubmissionResult_mts_result } /* CHOICE_ALT_ROOT */
    | { store_draft_result: CommonSubmissionResults } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MSMessageSubmissionResult: $.ASN1Decoder<MSMessageSubmissionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSMessageSubmissionResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSMessageSubmissionResult} The decoded data structure.
 */
export function _decode_MSMessageSubmissionResult(el: _Element): MSMessageSubmissionResult {
    if (!_cached_decoder_for_MSMessageSubmissionResult) {
        _cached_decoder_for_MSMessageSubmissionResult = $._decode_inextensible_choice<MSMessageSubmissionResult>(
            {
                'UNIVERSAL 17': [
                    'mts_result',
                    _decode_MSMessageSubmissionResult_mts_result,
                ],
                'CONTEXT 4': [
                    'store_draft_result',
                    $._decode_implicit<CommonSubmissionResults>(
                        () => _decode_CommonSubmissionResults
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MSMessageSubmissionResult(el);
}

let _cached_encoder_for_MSMessageSubmissionResult: $.ASN1Encoder<MSMessageSubmissionResult> | null = null;

/**
 * @summary Encodes a(n) MSMessageSubmissionResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSMessageSubmissionResult, encoded as an ASN.1 Element.
 */
export function _encode_MSMessageSubmissionResult(
    value: MSMessageSubmissionResult,
    elGetter: $.ASN1Encoder<MSMessageSubmissionResult>
): _Element {
    if (!_cached_encoder_for_MSMessageSubmissionResult) {
        _cached_encoder_for_MSMessageSubmissionResult = $._encode_choice<MSMessageSubmissionResult>(
            {
                mts_result: _encode_MSMessageSubmissionResult_mts_result,
                store_draft_result: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_CommonSubmissionResults,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MSMessageSubmissionResult(value, elGetter);
}


/* eslint-enable */
