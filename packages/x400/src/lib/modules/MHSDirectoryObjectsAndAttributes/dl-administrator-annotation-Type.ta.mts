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
 * @summary dl_administrator_annotation_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-administrator-annotation-Type ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type dl_administrator_annotation_Type =
    | { bmpstring: BMPString } /* CHOICE_ALT_ROOT */
    | { universalstring: UniversalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_dl_administrator_annotation_Type: $.ASN1Decoder<dl_administrator_annotation_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) dl_administrator_annotation_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {dl_administrator_annotation_Type} The decoded data structure.
 */
export function _decode_dl_administrator_annotation_Type(el: _Element): dl_administrator_annotation_Type {
    if (!_cached_decoder_for_dl_administrator_annotation_Type) {
        _cached_decoder_for_dl_administrator_annotation_Type = $._decode_inextensible_choice<dl_administrator_annotation_Type>(
            {
                'UNIVERSAL 30': ['bmpstring', $._decodeBMPString],
                'UNIVERSAL 28': ['universalstring', $._decodeUniversalString],
            }
        );
    }
    return _cached_decoder_for_dl_administrator_annotation_Type(el);
}

let _cached_encoder_for_dl_administrator_annotation_Type: $.ASN1Encoder<dl_administrator_annotation_Type> | null = null;

/**
 * @summary Encodes a(n) dl_administrator_annotation_Type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The dl_administrator_annotation_Type, encoded as an ASN.1 Element.
 */
export function _encode_dl_administrator_annotation_Type(
    value: dl_administrator_annotation_Type,
    elGetter: $.ASN1Encoder<dl_administrator_annotation_Type>
): _Element {
    if (!_cached_encoder_for_dl_administrator_annotation_Type) {
        _cached_encoder_for_dl_administrator_annotation_Type = $._encode_choice<dl_administrator_annotation_Type>(
            {
                bmpstring: $._encodeBMPString,
                universalstring: $._encodeUniversalString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_dl_administrator_annotation_Type(
        value,
        elGetter
    );
}


/* eslint-enable */
