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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ResultInfoFromThread,
    _decode_ResultInfoFromThread,
    _encode_ResultInfoFromThread,
} from '../CSModule/ResultInfoFromThread.ta';
export {
    ResultInfoFromThread,
    _decode_ResultInfoFromThread,
    _encode_ResultInfoFromThread,
} from '../CSModule/ResultInfoFromThread.ta';

/* START_OF_SYMBOL_DEFINITION TriggerResultInfo_resultType */
/**
 * @summary TriggerResultInfo_resultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerResultInfo-resultType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TriggerResultInfo_resultType =
    | { singleTriggerResult: ResultInfoFromThread } /* CHOICE_ALT_ROOT */
    | { sequentialTriggerResult: ResultInfoFromThread[] } /* CHOICE_ALT_ROOT */
    | { parallelTriggerResult: ResultInfoFromThread[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TriggerResultInfo_resultType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerResultInfo_resultType */
let _cached_decoder_for_TriggerResultInfo_resultType: $.ASN1Decoder<TriggerResultInfo_resultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerResultInfo_resultType */

/* START_OF_SYMBOL_DEFINITION _decode_TriggerResultInfo_resultType */
/**
 * @summary Decodes an ASN.1 element into a(n) TriggerResultInfo_resultType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerResultInfo_resultType} The decoded data structure.
 */
export function _decode_TriggerResultInfo_resultType(el: _Element) {
    if (!_cached_decoder_for_TriggerResultInfo_resultType) {
        _cached_decoder_for_TriggerResultInfo_resultType = $._decode_inextensible_choice<TriggerResultInfo_resultType>(
            {
                'UNIVERSAL 16': [
                    'singleTriggerResult',
                    _decode_ResultInfoFromThread,
                ],
                'CONTEXT 1': [
                    'sequentialTriggerResult',
                    $._decode_implicit<ResultInfoFromThread[]>(() =>
                        $._decodeSequenceOf<ResultInfoFromThread>(
                            () => _decode_ResultInfoFromThread
                        )
                    ),
                ],
                'UNIVERSAL 17': [
                    'parallelTriggerResult',
                    $._decodeSetOf<ResultInfoFromThread>(
                        () => _decode_ResultInfoFromThread
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TriggerResultInfo_resultType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TriggerResultInfo_resultType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerResultInfo_resultType */
let _cached_encoder_for_TriggerResultInfo_resultType: $.ASN1Encoder<TriggerResultInfo_resultType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerResultInfo_resultType */

/* START_OF_SYMBOL_DEFINITION _encode_TriggerResultInfo_resultType */
/**
 * @summary Encodes a(n) TriggerResultInfo_resultType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerResultInfo_resultType, encoded as an ASN.1 Element.
 */
export function _encode_TriggerResultInfo_resultType(
    value: TriggerResultInfo_resultType,
    elGetter: $.ASN1Encoder<TriggerResultInfo_resultType>
) {
    if (!_cached_encoder_for_TriggerResultInfo_resultType) {
        _cached_encoder_for_TriggerResultInfo_resultType = $._encode_choice<TriggerResultInfo_resultType>(
            {
                singleTriggerResult: _encode_ResultInfoFromThread,
                sequentialTriggerResult: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<ResultInfoFromThread>(
                            () => _encode_ResultInfoFromThread,
                            $.BER
                        ),
                    $.BER
                ),
                parallelTriggerResult: $._encodeSetOf<ResultInfoFromThread>(
                    () => _encode_ResultInfoFromThread,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TriggerResultInfo_resultType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TriggerResultInfo_resultType */

/* eslint-enable */
