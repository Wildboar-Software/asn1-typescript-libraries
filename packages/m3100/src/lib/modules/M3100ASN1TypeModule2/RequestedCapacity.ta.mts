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
    Channel,
    _decode_Channel,
    _encode_Channel,
} from '../M3100ASN1TypeModule2/Channel.ta.mjs';
import {
    Capacity,
    _decode_Capacity,
    _encode_Capacity,
} from '../M3100ASN1TypeModule2/Capacity.ta.mjs';

/**
 * @summary RequestedCapacity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedCapacity  ::=  CHOICE {
 *   specificChannels  [1]  SEQUENCE OF Channel,
 *   capacity          [2]  Capacity
 * }
 * ```
 */
export type RequestedCapacity =
    | { specificChannels: Channel[] } /* CHOICE_ALT_ROOT */
    | { capacity: Capacity } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_RequestedCapacity: $.ASN1Decoder<RequestedCapacity> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RequestedCapacity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestedCapacity} The decoded data structure.
 */
export function _decode_RequestedCapacity(el: _Element): RequestedCapacity {
    if (!_cached_decoder_for_RequestedCapacity) {
        _cached_decoder_for_RequestedCapacity = $._decode_inextensible_choice<RequestedCapacity>(
            {
                'CONTEXT 1': [
                    'specificChannels',
                    $._decode_implicit<Channel[]>(() =>
                        $._decodeSequenceOf<Channel>(() => _decode_Channel)
                    ),
                ],
                'CONTEXT 2': [
                    'capacity',
                    $._decode_explicit<Capacity>(() => _decode_Capacity),
                ],
            }
        );
    }
    return _cached_decoder_for_RequestedCapacity(el);
}


let _cached_encoder_for_RequestedCapacity: $.ASN1Encoder<RequestedCapacity> | null = null;


/**
 * @summary Encodes a(n) RequestedCapacity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedCapacity, encoded as an ASN.1 Element.
 */
export function _encode_RequestedCapacity(
    value: RequestedCapacity,
    elGetter: $.ASN1Encoder<RequestedCapacity>
): _Element {
    if (!_cached_encoder_for_RequestedCapacity) {
        _cached_encoder_for_RequestedCapacity = $._encode_choice<RequestedCapacity>(
            {
                specificChannels: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<Channel>(
                            () => _encode_Channel,
                            $.BER
                        ),
                    $.BER
                ),
                capacity: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_Capacity,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestedCapacity(value, elGetter);
}


/* eslint-enable */
