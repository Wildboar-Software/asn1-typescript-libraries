/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
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
 * @summary DeliverId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverId  ::=  CHOICE {globalValue  OBJECT IDENTIFIER,
 *                       localValue   INTEGER
 * }
 * ```
 */
export type DeliverId =
    | { globalValue: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localValue: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeliverId: $.ASN1Decoder<DeliverId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliverId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverId} The decoded data structure.
 */
export function _decode_DeliverId(el: _Element) {
    if (!_cached_decoder_for_DeliverId) {
        _cached_decoder_for_DeliverId = $._decode_inextensible_choice<DeliverId>(
            {
                'UNIVERSAL 6': ['globalValue', $._decodeObjectIdentifier],
                'UNIVERSAL 2': ['localValue', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_DeliverId(el);
}

let _cached_encoder_for_DeliverId: $.ASN1Encoder<DeliverId> | null = null;

/**
 * @summary Encodes a(n) DeliverId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverId, encoded as an ASN.1 Element.
 */
export function _encode_DeliverId(
    value: DeliverId,
    elGetter: $.ASN1Encoder<DeliverId>
) {
    if (!_cached_encoder_for_DeliverId) {
        _cached_encoder_for_DeliverId = $._encode_choice<DeliverId>(
            {
                globalValue: $._encodeObjectIdentifier,
                localValue: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeliverId(value, elGetter);
}


/* eslint-enable */
