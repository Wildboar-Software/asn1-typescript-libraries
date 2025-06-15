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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Bind,
    _decode_Bind,
    _encode_Bind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs';
import {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs';
/**
 * @summary MSBindUnbindPDUs94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSBindUnbindPDUs94  ::=  CHOICE {
 *   bind    Bind{ms-access-contract-94.&connection.&bind},
 *   unbind  Unbind{ms-access-contract-94.&connection.&unbind}
 * }
 * ```
 */
export type MSBindUnbindPDUs94 =
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MSBindUnbindPDUs94: $.ASN1Decoder<MSBindUnbindPDUs94> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSBindUnbindPDUs94
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSBindUnbindPDUs94} The decoded data structure.
 */
export function _decode_MSBindUnbindPDUs94(el: _Element) {
    if (!_cached_decoder_for_MSBindUnbindPDUs94) {
        _cached_decoder_for_MSBindUnbindPDUs94 = $._decode_inextensible_choice<MSBindUnbindPDUs94>(
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
    return _cached_decoder_for_MSBindUnbindPDUs94(el);
}

let _cached_encoder_for_MSBindUnbindPDUs94: $.ASN1Encoder<MSBindUnbindPDUs94> | null = null;

/**
 * @summary Encodes a(n) MSBindUnbindPDUs94 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSBindUnbindPDUs94, encoded as an ASN.1 Element.
 */
export function _encode_MSBindUnbindPDUs94(
    value: MSBindUnbindPDUs94,
    elGetter: $.ASN1Encoder<MSBindUnbindPDUs94>
) {
    if (!_cached_encoder_for_MSBindUnbindPDUs94) {
        _cached_encoder_for_MSBindUnbindPDUs94 = $._encode_choice<MSBindUnbindPDUs94>(
            {
                bind: _encode_Bind,
                unbind: _encode_Unbind,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MSBindUnbindPDUs94(value, elGetter);
}


/* eslint-enable */
