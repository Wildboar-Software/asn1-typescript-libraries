/* eslint-disable */
import {
    INTEGER,
    REAL,
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
 * @summary LoopbackError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackError  ::=  CHOICE {errorBitNo  INTEGER,
 *                           percent     REAL
 * }
 * ```
 */
export type LoopbackError =
    | { errorBitNo: INTEGER } /* CHOICE_ALT_ROOT */
    | { percent: REAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LoopbackError: $.ASN1Decoder<LoopbackError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackError} The decoded data structure.
 */
export function _decode_LoopbackError(el: _Element) {
    if (!_cached_decoder_for_LoopbackError) {
        _cached_decoder_for_LoopbackError = $._decode_inextensible_choice<LoopbackError>(
            {
                'UNIVERSAL 2': ['errorBitNo', $._decodeInteger],
                'UNIVERSAL 9': ['percent', $._decodeReal],
            }
        );
    }
    return _cached_decoder_for_LoopbackError(el);
}

let _cached_encoder_for_LoopbackError: $.ASN1Encoder<LoopbackError> | null = null;

/**
 * @summary Encodes a(n) LoopbackError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackError, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackError(
    value: LoopbackError,
    elGetter: $.ASN1Encoder<LoopbackError>
) {
    if (!_cached_encoder_for_LoopbackError) {
        _cached_encoder_for_LoopbackError = $._encode_choice<LoopbackError>(
            {
                errorBitNo: $._encodeInteger,
                percent: $._encodeReal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LoopbackError(value, elGetter);
}


/* eslint-enable */
