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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary PointerOrNull
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointerOrNull  ::=  CHOICE {pointer  ObjectInstance,
 *                           null     NULL
 * }
 * ```
 */
export type PointerOrNull =
    | { pointer: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_PointerOrNull: $.ASN1Decoder<PointerOrNull> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PointerOrNull
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointerOrNull} The decoded data structure.
 */
export function _decode_PointerOrNull(el: _Element) {
    if (!_cached_decoder_for_PointerOrNull) {
        _cached_decoder_for_PointerOrNull = $._decode_inextensible_choice<PointerOrNull>(
            {
                'CONTEXT 2': ['pointer', _decode_ObjectInstance],
                'CONTEXT 3': ['pointer', _decode_ObjectInstance],
                'CONTEXT 4': ['pointer', _decode_ObjectInstance],
                'UNIVERSAL 5': ['null_', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_PointerOrNull(el);
}


let _cached_encoder_for_PointerOrNull: $.ASN1Encoder<PointerOrNull> | null = null;


/**
 * @summary Encodes a(n) PointerOrNull into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointerOrNull, encoded as an ASN.1 Element.
 */
export function _encode_PointerOrNull(
    value: PointerOrNull,
    elGetter: $.ASN1Encoder<PointerOrNull>
) {
    if (!_cached_encoder_for_PointerOrNull) {
        _cached_encoder_for_PointerOrNull = $._encode_choice<PointerOrNull>(
            {
                pointer: _encode_ObjectInstance,
                null_: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PointerOrNull(value, elGetter);
}


/* eslint-enable */
