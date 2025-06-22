/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary CommitmentTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommitmentTime  ::=  CHOICE {
 *   onsiteTime          [0]  GeneralizedTime,
 *   clearedTime         [1]  GeneralizedTime,
 *   ...,
 *   estimatedClearTime  [2]  GeneralizedTime,
 *   ...
 * }
 * ```
 */
export type CommitmentTime =
    | { onsiteTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { clearedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { estimatedClearTime: GeneralizedTime } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_CommitmentTime: $.ASN1Decoder<CommitmentTime> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CommitmentTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommitmentTime} The decoded data structure.
 */
export function _decode_CommitmentTime(el: _Element) {
    if (!_cached_decoder_for_CommitmentTime) {
        _cached_decoder_for_CommitmentTime = $._decode_extensible_choice<CommitmentTime>(
            {
                'CONTEXT 0': [
                    'onsiteTime',
                    $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    ),
                ],
                'CONTEXT 1': [
                    'clearedTime',
                    $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    ),
                ],
                'CONTEXT 2': [
                    'estimatedClearTime',
                    $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CommitmentTime(el);
}


let _cached_encoder_for_CommitmentTime: $.ASN1Encoder<CommitmentTime> | null = null;


/**
 * @summary Encodes a(n) CommitmentTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommitmentTime, encoded as an ASN.1 Element.
 */
export function _encode_CommitmentTime(
    value: CommitmentTime,
    elGetter: $.ASN1Encoder<CommitmentTime>
) {
    if (!_cached_encoder_for_CommitmentTime) {
        _cached_encoder_for_CommitmentTime = $._encode_choice<CommitmentTime>(
            {
                onsiteTime: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeGeneralizedTime,
                    $.BER
                ),
                clearedTime: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeGeneralizedTime,
                    $.BER
                ),
                estimatedClearTime: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeGeneralizedTime,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CommitmentTime(value, elGetter);
}


/* eslint-enable */
