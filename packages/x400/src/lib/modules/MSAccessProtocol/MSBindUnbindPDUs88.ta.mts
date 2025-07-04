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
    Bind,
    _decode_Bind,
    _encode_Bind,
} from '@wildboar/rose';
import {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from '@wildboar/rose';
/**
 * @summary MSBindUnbindPDUs88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSBindUnbindPDUs88  ::=  CHOICE {
 *   bind    Bind{ms-access-contract-88.&connection.&bind},
 *   unbind  Unbind{ms-access-contract-88.&connection.&unbind}
 * }
 * ```
 */
export type MSBindUnbindPDUs88 =
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MSBindUnbindPDUs88: $.ASN1Decoder<MSBindUnbindPDUs88> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSBindUnbindPDUs88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSBindUnbindPDUs88} The decoded data structure.
 */
export function _decode_MSBindUnbindPDUs88(el: _Element): MSBindUnbindPDUs88 {
    if (!_cached_decoder_for_MSBindUnbindPDUs88) {
        _cached_decoder_for_MSBindUnbindPDUs88 = $._decode_inextensible_choice<MSBindUnbindPDUs88>(
            {
                'CONTEXT 16': ['bind', _decode_Bind],
                'CONTEXT 17': ['bind', _decode_Bind],
                'CONTEXT 18': ['bind', _decode_Bind],
                'CONTEXT 19': ['unbind', _decode_Unbind],
                'CONTEXT 20': ['unbind', _decode_Unbind],
                'CONTEXT 21': ['unbind', _decode_Unbind],
            }
        );
    }
    return _cached_decoder_for_MSBindUnbindPDUs88(el);
}

let _cached_encoder_for_MSBindUnbindPDUs88: $.ASN1Encoder<MSBindUnbindPDUs88> | null = null;

/**
 * @summary Encodes a(n) MSBindUnbindPDUs88 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSBindUnbindPDUs88, encoded as an ASN.1 Element.
 */
export function _encode_MSBindUnbindPDUs88(
    value: MSBindUnbindPDUs88,
    elGetter: $.ASN1Encoder<MSBindUnbindPDUs88>
): _Element {
    if (!_cached_encoder_for_MSBindUnbindPDUs88) {
        _cached_encoder_for_MSBindUnbindPDUs88 = $._encode_choice<MSBindUnbindPDUs88>(
            {
                bind: _encode_Bind,
                unbind: _encode_Unbind,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MSBindUnbindPDUs88(value, elGetter);
}


/* eslint-enable */
