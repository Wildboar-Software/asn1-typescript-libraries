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
    BuiltInContentType,
    _decode_BuiltInContentType,
    _encode_BuiltInContentType,
} from '../MTSAbstractService/BuiltInContentType.ta.mjs';
import {
    ExtendedContentType,
    _decode_ExtendedContentType,
    _encode_ExtendedContentType,
} from '../MTSAbstractService/ExtendedContentType.ta.mjs';
/**
 * @summary ContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentType  ::=  CHOICE {
 *   built-in  BuiltInContentType,
 *   extended  ExtendedContentType
 * }
 * ```
 */
export type ContentType =
    | { built_in: BuiltInContentType } /* CHOICE_ALT_ROOT */
    | { extended: ExtendedContentType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ContentType: $.ASN1Decoder<ContentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentType} The decoded data structure.
 */
export function _decode_ContentType(el: _Element) {
    if (!_cached_decoder_for_ContentType) {
        _cached_decoder_for_ContentType = $._decode_inextensible_choice<ContentType>(
            {
                'APPLICATION 6': ['built_in', _decode_BuiltInContentType],
                'UNIVERSAL 13': ['extended', _decode_ExtendedContentType],
            }
        );
    }
    return _cached_decoder_for_ContentType(el);
}

let _cached_encoder_for_ContentType: $.ASN1Encoder<ContentType> | null = null;

/**
 * @summary Encodes a(n) ContentType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentType, encoded as an ASN.1 Element.
 */
export function _encode_ContentType(
    value: ContentType,
    elGetter: $.ASN1Encoder<ContentType>
) {
    if (!_cached_encoder_for_ContentType) {
        _cached_encoder_for_ContentType = $._encode_choice<ContentType>(
            {
                built_in: _encode_BuiltInContentType,
                extended: _encode_ExtendedContentType,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContentType(value, elGetter);
}


/* eslint-enable */
