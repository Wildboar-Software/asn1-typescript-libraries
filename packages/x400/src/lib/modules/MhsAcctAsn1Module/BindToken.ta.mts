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
    BindTokenSignedData,
    _decode_BindTokenSignedData,
    _encode_BindTokenSignedData,
} from '../MTSAbstractService/BindTokenSignedData.ta.mjs';
import {
    BindTokenEncryptedData,
    _decode_BindTokenEncryptedData,
    _encode_BindTokenEncryptedData,
} from '../MTSAbstractService/BindTokenEncryptedData.ta.mjs';
/**
 * @summary BindToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindToken  ::=  CHOICE {
 *   signed     [0]  BindTokenSignedData,
 *   encrypted  [1]  BindTokenEncryptedData
 * }
 * ```
 */
export type BindToken =
    | { signed: BindTokenSignedData } /* CHOICE_ALT_ROOT */
    | { encrypted: BindTokenEncryptedData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BindToken: $.ASN1Decoder<BindToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BindToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindToken} The decoded data structure.
 */
export function _decode_BindToken(el: _Element) {
    if (!_cached_decoder_for_BindToken) {
        _cached_decoder_for_BindToken = $._decode_inextensible_choice<BindToken>(
            {
                'CONTEXT 0': [
                    'signed',
                    $._decode_implicit<BindTokenSignedData>(
                        () => _decode_BindTokenSignedData
                    ),
                ],
                'CONTEXT 1': [
                    'encrypted',
                    $._decode_implicit<BindTokenEncryptedData>(
                        () => _decode_BindTokenEncryptedData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BindToken(el);
}

let _cached_encoder_for_BindToken: $.ASN1Encoder<BindToken> | null = null;

/**
 * @summary Encodes a(n) BindToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindToken, encoded as an ASN.1 Element.
 */
export function _encode_BindToken(
    value: BindToken,
    elGetter: $.ASN1Encoder<BindToken>
) {
    if (!_cached_encoder_for_BindToken) {
        _cached_encoder_for_BindToken = $._encode_choice<BindToken>(
            {
                signed: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_BindTokenSignedData,
                    $.BER
                ),
                encrypted: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_BindTokenEncryptedData,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BindToken(value, elGetter);
}


/* eslint-enable */
