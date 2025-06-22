/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary PhysicalRenditionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalRenditionAttributes  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PhysicalRenditionAttributes = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_PhysicalRenditionAttributes: $.ASN1Decoder<PhysicalRenditionAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalRenditionAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalRenditionAttributes} The decoded data structure.
 */
export function _decode_PhysicalRenditionAttributes(el: _Element) {
    if (!_cached_decoder_for_PhysicalRenditionAttributes) {
        _cached_decoder_for_PhysicalRenditionAttributes =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_PhysicalRenditionAttributes(el);
}

let _cached_encoder_for_PhysicalRenditionAttributes: $.ASN1Encoder<PhysicalRenditionAttributes> | null = null;

/**
 * @summary Encodes a(n) PhysicalRenditionAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalRenditionAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalRenditionAttributes(
    value: PhysicalRenditionAttributes,
    elGetter: $.ASN1Encoder<PhysicalRenditionAttributes>
) {
    if (!_cached_encoder_for_PhysicalRenditionAttributes) {
        _cached_encoder_for_PhysicalRenditionAttributes =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_PhysicalRenditionAttributes(value, elGetter);
}


/* eslint-enable */
