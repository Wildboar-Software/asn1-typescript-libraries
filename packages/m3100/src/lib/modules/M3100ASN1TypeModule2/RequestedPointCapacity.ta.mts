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
    NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta.mjs';
import {
    PointCapacity,
    _decode_PointCapacity,
    _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta.mjs';

/**
 * @summary RequestedPointCapacity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedPointCapacity  ::=  CHOICE {
 *   specificTPs  [1]  NWTPList,
 *   capacity     [2]  PointCapacity
 * }
 * ```
 */
export type RequestedPointCapacity =
    | { specificTPs: NWTPList } /* CHOICE_ALT_ROOT */
    | { capacity: PointCapacity } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_RequestedPointCapacity: $.ASN1Decoder<RequestedPointCapacity> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RequestedPointCapacity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestedPointCapacity} The decoded data structure.
 */
export function _decode_RequestedPointCapacity(el: _Element): RequestedPointCapacity {
    if (!_cached_decoder_for_RequestedPointCapacity) {
        _cached_decoder_for_RequestedPointCapacity = $._decode_inextensible_choice<RequestedPointCapacity>(
            {
                'CONTEXT 1': [
                    'specificTPs',
                    $._decode_implicit<NWTPList>(() => _decode_NWTPList),
                ],
                'CONTEXT 2': [
                    'capacity',
                    $._decode_explicit<PointCapacity>(
                        () => _decode_PointCapacity
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RequestedPointCapacity(el);
}


let _cached_encoder_for_RequestedPointCapacity: $.ASN1Encoder<RequestedPointCapacity> | null = null;


/**
 * @summary Encodes a(n) RequestedPointCapacity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedPointCapacity, encoded as an ASN.1 Element.
 */
export function _encode_RequestedPointCapacity(
    value: RequestedPointCapacity,
    elGetter: $.ASN1Encoder<RequestedPointCapacity>
): _Element {
    if (!_cached_encoder_for_RequestedPointCapacity) {
        _cached_encoder_for_RequestedPointCapacity = $._encode_choice<RequestedPointCapacity>(
            {
                specificTPs: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NWTPList,
                    $.BER
                ),
                capacity: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_PointCapacity,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestedPointCapacity(value, elGetter);
}


/* eslint-enable */
