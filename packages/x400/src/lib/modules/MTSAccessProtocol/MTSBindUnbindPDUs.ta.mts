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
import * as $ from '@wildboar/asn1/functional';
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
 * @summary MTSBindUnbindPDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSBindUnbindPDUs  ::=  CHOICE {
 *   bind    Bind{mts-connect.&bind},
 *   unbind  Unbind{mts-connect.&unbind}
 * }
 * ```
 */
export type MTSBindUnbindPDUs =
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MTSBindUnbindPDUs: $.ASN1Decoder<MTSBindUnbindPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTSBindUnbindPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSBindUnbindPDUs} The decoded data structure.
 */
export function _decode_MTSBindUnbindPDUs(el: _Element) {
    if (!_cached_decoder_for_MTSBindUnbindPDUs) {
        _cached_decoder_for_MTSBindUnbindPDUs = $._decode_inextensible_choice<MTSBindUnbindPDUs>(
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
    return _cached_decoder_for_MTSBindUnbindPDUs(el);
}

let _cached_encoder_for_MTSBindUnbindPDUs: $.ASN1Encoder<MTSBindUnbindPDUs> | null = null;

/**
 * @summary Encodes a(n) MTSBindUnbindPDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSBindUnbindPDUs, encoded as an ASN.1 Element.
 */
export function _encode_MTSBindUnbindPDUs(
    value: MTSBindUnbindPDUs,
    elGetter: $.ASN1Encoder<MTSBindUnbindPDUs>
) {
    if (!_cached_encoder_for_MTSBindUnbindPDUs) {
        _cached_encoder_for_MTSBindUnbindPDUs = $._encode_choice<MTSBindUnbindPDUs>(
            {
                bind: _encode_Bind,
                unbind: _encode_Unbind,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTSBindUnbindPDUs(value, elGetter);
}


/* eslint-enable */
