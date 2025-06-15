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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary CorrelatedDeliveredIPNs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelatedDeliveredIPNs  ::=  CHOICE {
 *   no-ipn-received  [0]  NULL,
 *   ipns-received    [1]  SEQUENCE OF SequenceNumber
 * }
 * ```
 */
export type CorrelatedDeliveredIPNs =
    | { no_ipn_received: NULL } /* CHOICE_ALT_ROOT */
    | { ipns_received: SequenceNumber[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CorrelatedDeliveredIPNs: $.ASN1Decoder<CorrelatedDeliveredIPNs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedDeliveredIPNs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CorrelatedDeliveredIPNs} The decoded data structure.
 */
export function _decode_CorrelatedDeliveredIPNs(el: _Element) {
    if (!_cached_decoder_for_CorrelatedDeliveredIPNs) {
        _cached_decoder_for_CorrelatedDeliveredIPNs = $._decode_inextensible_choice<CorrelatedDeliveredIPNs>(
            {
                'CONTEXT 0': [
                    'no_ipn_received',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'ipns_received',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CorrelatedDeliveredIPNs(el);
}

let _cached_encoder_for_CorrelatedDeliveredIPNs: $.ASN1Encoder<CorrelatedDeliveredIPNs> | null = null;

/**
 * @summary Encodes a(n) CorrelatedDeliveredIPNs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedDeliveredIPNs, encoded as an ASN.1 Element.
 */
export function _encode_CorrelatedDeliveredIPNs(
    value: CorrelatedDeliveredIPNs,
    elGetter: $.ASN1Encoder<CorrelatedDeliveredIPNs>
) {
    if (!_cached_encoder_for_CorrelatedDeliveredIPNs) {
        _cached_encoder_for_CorrelatedDeliveredIPNs = $._encode_choice<CorrelatedDeliveredIPNs>(
            {
                no_ipn_received: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                ipns_received: $._encode_implicit(
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
    return _cached_encoder_for_CorrelatedDeliveredIPNs(value, elGetter);
}


/* eslint-enable */
