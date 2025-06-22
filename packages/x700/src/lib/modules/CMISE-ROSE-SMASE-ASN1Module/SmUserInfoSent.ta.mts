/* eslint-disable */
import {
    NULL,
    GraphicString,
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
 * @summary SmUserInfoSent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SmUserInfoSent  ::=  CHOICE {
 *   nothingSent      NULL,
 *   informationSent  GraphicString
 * }
 * ```
 */
export type SmUserInfoSent =
    | { nothingSent: NULL } /* CHOICE_ALT_ROOT */
    | { informationSent: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SmUserInfoSent: $.ASN1Decoder<SmUserInfoSent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmUserInfoSent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SmUserInfoSent} The decoded data structure.
 */
export function _decode_SmUserInfoSent(el: _Element) {
    if (!_cached_decoder_for_SmUserInfoSent) {
        _cached_decoder_for_SmUserInfoSent = $._decode_inextensible_choice<SmUserInfoSent>(
            {
                'UNIVERSAL 5': ['nothingSent', $._decodeNull],
                'UNIVERSAL 25': ['informationSent', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_SmUserInfoSent(el);
}

let _cached_encoder_for_SmUserInfoSent: $.ASN1Encoder<SmUserInfoSent> | null = null;

/**
 * @summary Encodes a(n) SmUserInfoSent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmUserInfoSent, encoded as an ASN.1 Element.
 */
export function _encode_SmUserInfoSent(
    value: SmUserInfoSent,
    elGetter: $.ASN1Encoder<SmUserInfoSent>
) {
    if (!_cached_encoder_for_SmUserInfoSent) {
        _cached_encoder_for_SmUserInfoSent = $._encode_choice<SmUserInfoSent>(
            {
                nothingSent: $._encodeNull,
                informationSent: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SmUserInfoSent(value, elGetter);
}


/* eslint-enable */
