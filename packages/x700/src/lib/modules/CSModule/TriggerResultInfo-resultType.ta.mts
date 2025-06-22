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
    ResultInfoFromThread,
    _decode_ResultInfoFromThread,
    _encode_ResultInfoFromThread,
} from '../CSModule/ResultInfoFromThread.ta.mjs';
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

let _cached_decoder_for_TriggerResultInfo_resultType: $.ASN1Decoder<TriggerResultInfo_resultType> | null = null;

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

let _cached_encoder_for_TriggerResultInfo_resultType: $.ASN1Encoder<TriggerResultInfo_resultType> | null = null;

/**
 * @summary Encodes a(n) TriggerResultInfo_resultType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
