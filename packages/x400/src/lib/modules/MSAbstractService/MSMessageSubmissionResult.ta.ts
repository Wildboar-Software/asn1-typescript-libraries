/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    MSMessageSubmissionResult_mts_result,
    _decode_MSMessageSubmissionResult_mts_result,
    _encode_MSMessageSubmissionResult_mts_result,
} from '../MSAbstractService/MSMessageSubmissionResult-mts-result.ta.js';
export {
    MSMessageSubmissionResult_mts_result,
    _decode_MSMessageSubmissionResult_mts_result,
    _encode_MSMessageSubmissionResult_mts_result,
} from '../MSAbstractService/MSMessageSubmissionResult-mts-result.ta.js';
import {
    CommonSubmissionResults,
    _decode_CommonSubmissionResults,
    _encode_CommonSubmissionResults,
} from '../MSAbstractService/CommonSubmissionResults.ta.js';
export {
    CommonSubmissionResults,
    _decode_CommonSubmissionResults,
    _encode_CommonSubmissionResults,
} from '../MSAbstractService/CommonSubmissionResults.ta.js';

/* START_OF_SYMBOL_DEFINITION MSMessageSubmissionResult */
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
/* END_OF_SYMBOL_DEFINITION MSMessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSMessageSubmissionResult */
let _cached_decoder_for_MSMessageSubmissionResult: $.ASN1Decoder<MSMessageSubmissionResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSMessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _decode_MSMessageSubmissionResult */
/**
 * @summary Decodes an ASN.1 element into a(n) MSMessageSubmissionResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSMessageSubmissionResult} The decoded data structure.
 */
export function _decode_MSMessageSubmissionResult(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_MSMessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSMessageSubmissionResult */
let _cached_encoder_for_MSMessageSubmissionResult: $.ASN1Encoder<MSMessageSubmissionResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSMessageSubmissionResult */

/* START_OF_SYMBOL_DEFINITION _encode_MSMessageSubmissionResult */
/**
 * @summary Encodes a(n) MSMessageSubmissionResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSMessageSubmissionResult, encoded as an ASN.1 Element.
 */
export function _encode_MSMessageSubmissionResult(
    value: MSMessageSubmissionResult,
    elGetter: $.ASN1Encoder<MSMessageSubmissionResult>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_MSMessageSubmissionResult */

/* eslint-enable */
