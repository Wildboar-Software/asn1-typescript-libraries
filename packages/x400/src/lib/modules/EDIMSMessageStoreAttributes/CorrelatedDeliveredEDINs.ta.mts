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
 * @summary CorrelatedDeliveredEDINs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelatedDeliveredEDINs  ::=  CHOICE {
 *   no-edin-received  [0]  NULL,
 *   edins-received    [1]  SEQUENCE OF SequenceNumber
 * }
 * ```
 */
export type CorrelatedDeliveredEDINs =
    | { no_edin_received: NULL } /* CHOICE_ALT_ROOT */
    | { edins_received: SequenceNumber[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CorrelatedDeliveredEDINs: $.ASN1Decoder<CorrelatedDeliveredEDINs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedDeliveredEDINs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CorrelatedDeliveredEDINs} The decoded data structure.
 */
export function _decode_CorrelatedDeliveredEDINs(el: _Element): CorrelatedDeliveredEDINs {
    if (!_cached_decoder_for_CorrelatedDeliveredEDINs) {
        _cached_decoder_for_CorrelatedDeliveredEDINs = $._decode_inextensible_choice<CorrelatedDeliveredEDINs>(
            {
                'CONTEXT 0': [
                    'no_edin_received',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'edins_received',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CorrelatedDeliveredEDINs(el);
}

let _cached_encoder_for_CorrelatedDeliveredEDINs: $.ASN1Encoder<CorrelatedDeliveredEDINs> | null = null;

/**
 * @summary Encodes a(n) CorrelatedDeliveredEDINs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedDeliveredEDINs, encoded as an ASN.1 Element.
 */
export function _encode_CorrelatedDeliveredEDINs(
    value: CorrelatedDeliveredEDINs,
    elGetter: $.ASN1Encoder<CorrelatedDeliveredEDINs>
): _Element {
    if (!_cached_encoder_for_CorrelatedDeliveredEDINs) {
        _cached_encoder_for_CorrelatedDeliveredEDINs = $._encode_choice<CorrelatedDeliveredEDINs>(
            {
                no_edin_received: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                edins_received: $._encode_implicit(
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
    return _cached_encoder_for_CorrelatedDeliveredEDINs(value, elGetter);
}


/* eslint-enable */
