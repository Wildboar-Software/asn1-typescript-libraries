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
 * @summary SupportedTOClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedTOClasses  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export type SupportedTOClasses = OBJECT_IDENTIFIER[]; // SetOfType

let _cached_decoder_for_SupportedTOClasses: $.ASN1Decoder<SupportedTOClasses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedTOClasses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedTOClasses} The decoded data structure.
 */
export function _decode_SupportedTOClasses(el: _Element) {
    if (!_cached_decoder_for_SupportedTOClasses) {
        _cached_decoder_for_SupportedTOClasses = $._decodeSetOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_SupportedTOClasses(el);
}

let _cached_encoder_for_SupportedTOClasses: $.ASN1Encoder<SupportedTOClasses> | null = null;

/**
 * @summary Encodes a(n) SupportedTOClasses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedTOClasses, encoded as an ASN.1 Element.
 */
export function _encode_SupportedTOClasses(
    value: SupportedTOClasses,
    elGetter: $.ASN1Encoder<SupportedTOClasses>
) {
    if (!_cached_encoder_for_SupportedTOClasses) {
        _cached_encoder_for_SupportedTOClasses = $._encodeSetOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedTOClasses(value, elGetter);
}


/* eslint-enable */
