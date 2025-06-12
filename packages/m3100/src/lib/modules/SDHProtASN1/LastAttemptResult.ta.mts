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
    RxTxAPS,
    _decode_RxTxAPS,
    _encode_RxTxAPS,
} from '../SDHProtASN1/RxTxAPS.ta.mjs';
export {
    RxTxAPS,
    _decode_RxTxAPS,
    _encode_RxTxAPS,
} from '../SDHProtASN1/RxTxAPS.ta.mjs';

/* START_OF_SYMBOL_DEFINITION LastAttemptResult */
/**
 * @summary LastAttemptResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastAttemptResult  ::=  CHOICE {
 *   success  [0]  NULL, -- default value
 *   denied   [1]  NULL,
 *   fail     [2]  RxTxAPS
 * }
 * ```
 */
export type LastAttemptResult =
    | { success: NULL } /* CHOICE_ALT_ROOT */
    | { denied: NULL } /* CHOICE_ALT_ROOT */
    | { fail: RxTxAPS } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION LastAttemptResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LastAttemptResult */
let _cached_decoder_for_LastAttemptResult: $.ASN1Decoder<LastAttemptResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LastAttemptResult */

/* START_OF_SYMBOL_DEFINITION _decode_LastAttemptResult */
/**
 * @summary Decodes an ASN.1 element into a(n) LastAttemptResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastAttemptResult} The decoded data structure.
 */
export function _decode_LastAttemptResult(el: _Element) {
    if (!_cached_decoder_for_LastAttemptResult) {
        _cached_decoder_for_LastAttemptResult = $._decode_inextensible_choice<LastAttemptResult>(
            {
                'CONTEXT 0': [
                    'success',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'denied',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 2': [
                    'fail',
                    $._decode_implicit<RxTxAPS>(() => _decode_RxTxAPS),
                ],
            }
        );
    }
    return _cached_decoder_for_LastAttemptResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LastAttemptResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LastAttemptResult */
let _cached_encoder_for_LastAttemptResult: $.ASN1Encoder<LastAttemptResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LastAttemptResult */

/* START_OF_SYMBOL_DEFINITION _encode_LastAttemptResult */
/**
 * @summary Encodes a(n) LastAttemptResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastAttemptResult, encoded as an ASN.1 Element.
 */
export function _encode_LastAttemptResult(
    value: LastAttemptResult,
    elGetter: $.ASN1Encoder<LastAttemptResult>
) {
    if (!_cached_encoder_for_LastAttemptResult) {
        _cached_encoder_for_LastAttemptResult = $._encode_choice<LastAttemptResult>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                denied: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
                fail: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_RxTxAPS,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_LastAttemptResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LastAttemptResult */

/* eslint-enable */
