/* eslint-disable */
import {
    GraphicString,
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
 * @summary FileLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FileLocation  ::=  SET OF GraphicString
 * ```
 */
export type FileLocation = GraphicString[]; // SetOfType

let _cached_decoder_for_FileLocation: $.ASN1Decoder<FileLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FileLocation} The decoded data structure.
 */
export function _decode_FileLocation(el: _Element) {
    if (!_cached_decoder_for_FileLocation) {
        _cached_decoder_for_FileLocation = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_FileLocation(el);
}

let _cached_encoder_for_FileLocation: $.ASN1Encoder<FileLocation> | null = null;

/**
 * @summary Encodes a(n) FileLocation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileLocation, encoded as an ASN.1 Element.
 */
export function _encode_FileLocation(
    value: FileLocation,
    elGetter: $.ASN1Encoder<FileLocation>
) {
    if (!_cached_encoder_for_FileLocation) {
        _cached_encoder_for_FileLocation = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_FileLocation(value, elGetter);
}


/* eslint-enable */
