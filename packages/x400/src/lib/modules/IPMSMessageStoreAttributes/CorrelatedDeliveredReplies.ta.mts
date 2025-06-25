/* eslint-disable */
import {
    NULL,
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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary CorrelatedDeliveredReplies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelatedDeliveredReplies  ::=  CHOICE {
 *   no-reply-received  [0]  NULL,
 *   received-replies   [1]  SEQUENCE OF SequenceNumber
 * }
 * ```
 */
export type CorrelatedDeliveredReplies =
    | { no_reply_received: NULL } /* CHOICE_ALT_ROOT */
    | { received_replies: SequenceNumber[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CorrelatedDeliveredReplies: $.ASN1Decoder<CorrelatedDeliveredReplies> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedDeliveredReplies
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CorrelatedDeliveredReplies} The decoded data structure.
 */
export function _decode_CorrelatedDeliveredReplies(el: _Element): CorrelatedDeliveredReplies {
    if (!_cached_decoder_for_CorrelatedDeliveredReplies) {
        _cached_decoder_for_CorrelatedDeliveredReplies = $._decode_inextensible_choice<CorrelatedDeliveredReplies>(
            {
                'CONTEXT 0': [
                    'no_reply_received',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'received_replies',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CorrelatedDeliveredReplies(el);
}

let _cached_encoder_for_CorrelatedDeliveredReplies: $.ASN1Encoder<CorrelatedDeliveredReplies> | null = null;

/**
 * @summary Encodes a(n) CorrelatedDeliveredReplies into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedDeliveredReplies, encoded as an ASN.1 Element.
 */
export function _encode_CorrelatedDeliveredReplies(
    value: CorrelatedDeliveredReplies,
    elGetter: $.ASN1Encoder<CorrelatedDeliveredReplies>
): _Element {
    if (!_cached_encoder_for_CorrelatedDeliveredReplies) {
        _cached_encoder_for_CorrelatedDeliveredReplies = $._encode_choice<CorrelatedDeliveredReplies>(
            {
                no_reply_received: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                received_replies: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<SequenceNumber>(
                            () => _encode_SequenceNumber,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CorrelatedDeliveredReplies(value, elGetter);
}


/* eslint-enable */
