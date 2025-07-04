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
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from '@wildboar/rose';

/**
 * @summary ConnectionAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionAS{APPLICATION-CONTEXT:ac}  ::=  CHOICE {
 *   bind    Bind{ac.&associationContract.&connection.&bind},
 *   unbind  Unbind{ac.&associationContract.&connection.&unbind}
 * }
 * ```
 */
export type ConnectionAS =
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConnectionAS: $.ASN1Decoder<ConnectionAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionAS} The decoded data structure.
 */
export function _decode_ConnectionAS(el: _Element): ConnectionAS {
    if (!_cached_decoder_for_ConnectionAS) {
        _cached_decoder_for_ConnectionAS = $._decode_inextensible_choice<ConnectionAS>(
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
    return _cached_decoder_for_ConnectionAS(el);
}

let _cached_encoder_for_ConnectionAS: $.ASN1Encoder<ConnectionAS> | null = null;

/**
 * @summary Encodes a(n) ConnectionAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionAS, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionAS(
    value: ConnectionAS,
    elGetter: $.ASN1Encoder<ConnectionAS>
): _Element {
    if (!_cached_encoder_for_ConnectionAS) {
        _cached_encoder_for_ConnectionAS = $._encode_choice<ConnectionAS>(
            {
                bind: _encode_Bind,
                unbind: _encode_Unbind,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectionAS(value, elGetter);
}


/* eslint-enable */
