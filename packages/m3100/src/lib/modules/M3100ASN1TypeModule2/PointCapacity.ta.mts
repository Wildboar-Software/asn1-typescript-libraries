/* eslint-disable */
import {
    INTEGER,
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
    Bandwidth,
    _decode_Bandwidth,
    _encode_Bandwidth,
} from '../M3100ASN1TypeModule2/Bandwidth.ta.mjs';

/**
 * @summary PointCapacity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointCapacity  ::=  CHOICE {
 *   numberOfTPs  [0]  INTEGER,
 *   bandwidth    [1]  Bandwidth
 * }
 * ```
 */
export type PointCapacity =
    | { numberOfTPs: INTEGER } /* CHOICE_ALT_ROOT */
    | { bandwidth: Bandwidth } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_PointCapacity: $.ASN1Decoder<PointCapacity> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PointCapacity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointCapacity} The decoded data structure.
 */
export function _decode_PointCapacity(el: _Element) {
    if (!_cached_decoder_for_PointCapacity) {
        _cached_decoder_for_PointCapacity = $._decode_inextensible_choice<PointCapacity>(
            {
                'CONTEXT 0': [
                    'numberOfTPs',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'bandwidth',
                    $._decode_implicit<Bandwidth>(() => _decode_Bandwidth),
                ],
            }
        );
    }
    return _cached_decoder_for_PointCapacity(el);
}


let _cached_encoder_for_PointCapacity: $.ASN1Encoder<PointCapacity> | null = null;


/**
 * @summary Encodes a(n) PointCapacity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointCapacity, encoded as an ASN.1 Element.
 */
export function _encode_PointCapacity(
    value: PointCapacity,
    elGetter: $.ASN1Encoder<PointCapacity>
) {
    if (!_cached_encoder_for_PointCapacity) {
        _cached_encoder_for_PointCapacity = $._encode_choice<PointCapacity>(
            {
                numberOfTPs: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                bandwidth: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Bandwidth,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PointCapacity(value, elGetter);
}


/* eslint-enable */
