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
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
/**
 * @summary ContentTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTypes  ::=  SET OF ContentType
 * ```
 */
export type ContentTypes = ContentType[]; // SetOfType

let _cached_decoder_for_ContentTypes: $.ASN1Decoder<ContentTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentTypes} The decoded data structure.
 */
export function _decode_ContentTypes(el: _Element) {
    if (!_cached_decoder_for_ContentTypes) {
        _cached_decoder_for_ContentTypes = $._decodeSetOf<ContentType>(
            () => _decode_ContentType
        );
    }
    return _cached_decoder_for_ContentTypes(el);
}

let _cached_encoder_for_ContentTypes: $.ASN1Encoder<ContentTypes> | null = null;

/**
 * @summary Encodes a(n) ContentTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentTypes, encoded as an ASN.1 Element.
 */
export function _encode_ContentTypes(
    value: ContentTypes,
    elGetter: $.ASN1Encoder<ContentTypes>
) {
    if (!_cached_encoder_for_ContentTypes) {
        _cached_encoder_for_ContentTypes = $._encodeSetOf<ContentType>(
            () => _encode_ContentType,
            $.BER
        );
    }
    return _cached_encoder_for_ContentTypes(value, elGetter);
}


/* eslint-enable */
