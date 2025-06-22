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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Bandwidth,
    _decode_Bandwidth,
    _encode_Bandwidth,
} from '../M3100ASN1TypeModule2/Bandwidth.ta.mjs';

/**
 * @summary Capacity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Capacity  ::=  CHOICE {
 *   numberOfLinkConnections  [0]  INTEGER,
 *   bandwidth                [1]  Bandwidth
 * }
 * ```
 */
export type Capacity =
    | { numberOfLinkConnections: INTEGER } /* CHOICE_ALT_ROOT */
    | { bandwidth: Bandwidth } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Capacity: $.ASN1Decoder<Capacity> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Capacity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capacity} The decoded data structure.
 */
export function _decode_Capacity(el: _Element) {
    if (!_cached_decoder_for_Capacity) {
        _cached_decoder_for_Capacity = $._decode_inextensible_choice<Capacity>({
            'CONTEXT 0': [
                'numberOfLinkConnections',
                $._decode_implicit<INTEGER>(() => $._decodeInteger),
            ],
            'CONTEXT 1': [
                'bandwidth',
                $._decode_implicit<Bandwidth>(() => _decode_Bandwidth),
            ],
        });
    }
    return _cached_decoder_for_Capacity(el);
}


let _cached_encoder_for_Capacity: $.ASN1Encoder<Capacity> | null = null;


/**
 * @summary Encodes a(n) Capacity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capacity, encoded as an ASN.1 Element.
 */
export function _encode_Capacity(
    value: Capacity,
    elGetter: $.ASN1Encoder<Capacity>
) {
    if (!_cached_encoder_for_Capacity) {
        _cached_encoder_for_Capacity = $._encode_choice<Capacity>(
            {
                numberOfLinkConnections: $._encode_implicit(
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
    return _cached_encoder_for_Capacity(value, elGetter);
}


/* eslint-enable */
