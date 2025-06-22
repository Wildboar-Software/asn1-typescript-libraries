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
import * as $ from '@wildboar/asn1/functional';
import {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
/**
 * @summary RequestIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestIdentifier  ::=  CHOICE {
 *   number      [0]  INTEGER,
 *   invokeID    [1]  InvokeId,
 *   identifier  OPEN.&Type
 * }
 * ```
 */
export type RequestIdentifier =
    | { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { invokeID: InvokeId } /* CHOICE_ALT_ROOT */
    | { identifier: _Element } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RequestIdentifier: $.ASN1Decoder<RequestIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestIdentifier} The decoded data structure.
 */
export function _decode_RequestIdentifier(el: _Element) {
    if (!_cached_decoder_for_RequestIdentifier) {
        _cached_decoder_for_RequestIdentifier = $._decode_inextensible_choice<RequestIdentifier>(
            {
                'CONTEXT 0': [
                    'number_',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'invokeID',
                    $._decode_explicit<InvokeId>(() => _decode_InvokeId),
                ],
                '*': ['identifier', $._decodeAny],
            }
        );
    }
    return _cached_decoder_for_RequestIdentifier(el);
}

let _cached_encoder_for_RequestIdentifier: $.ASN1Encoder<RequestIdentifier> | null = null;

/**
 * @summary Encodes a(n) RequestIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RequestIdentifier(
    value: RequestIdentifier,
    elGetter: $.ASN1Encoder<RequestIdentifier>
) {
    if (!_cached_encoder_for_RequestIdentifier) {
        _cached_encoder_for_RequestIdentifier = $._encode_choice<RequestIdentifier>(
            {
                number_: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                invokeID: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_InvokeId,
                    $.BER
                ),
                identifier: $._encodeAny,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestIdentifier(value, elGetter);
}


/* eslint-enable */
