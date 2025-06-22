/* eslint-disable */
import {
    UniversalString,
    BMPString,
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

/**
 * @summary UniversalOrBMPString_character_encoding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrBMPString-character-encoding ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UniversalOrBMPString_character_encoding =
    | { two_octets: BMPString } /* CHOICE_ALT_ROOT */
    | { four_octets: UniversalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UniversalOrBMPString_character_encoding: $.ASN1Decoder<UniversalOrBMPString_character_encoding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrBMPString_character_encoding
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrBMPString_character_encoding} The decoded data structure.
 */
export function _decode_UniversalOrBMPString_character_encoding(el: _Element) {
    if (!_cached_decoder_for_UniversalOrBMPString_character_encoding) {
        _cached_decoder_for_UniversalOrBMPString_character_encoding = $._decode_inextensible_choice<UniversalOrBMPString_character_encoding>(
            {
                'UNIVERSAL 30': ['two_octets', $._decodeBMPString],
                'UNIVERSAL 28': ['four_octets', $._decodeUniversalString],
            }
        );
    }
    return _cached_decoder_for_UniversalOrBMPString_character_encoding(el);
}

let _cached_encoder_for_UniversalOrBMPString_character_encoding: $.ASN1Encoder<UniversalOrBMPString_character_encoding> | null = null;

/**
 * @summary Encodes a(n) UniversalOrBMPString_character_encoding into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrBMPString_character_encoding, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrBMPString_character_encoding(
    value: UniversalOrBMPString_character_encoding,
    elGetter: $.ASN1Encoder<UniversalOrBMPString_character_encoding>
) {
    if (!_cached_encoder_for_UniversalOrBMPString_character_encoding) {
        _cached_encoder_for_UniversalOrBMPString_character_encoding = $._encode_choice<UniversalOrBMPString_character_encoding>(
            {
                two_octets: $._encodeBMPString,
                four_octets: $._encodeUniversalString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UniversalOrBMPString_character_encoding(
        value,
        elGetter
    );
}


/* eslint-enable */
