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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary AdditionalProperties
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalProperties  ::=  SET OF ManagementExtension
 * ```
 */
export type AdditionalProperties = ManagementExtension[]; // SetOfType

let _cached_decoder_for_AdditionalProperties: $.ASN1Decoder<AdditionalProperties> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalProperties
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalProperties} The decoded data structure.
 */
export function _decode_AdditionalProperties(el: _Element) {
    if (!_cached_decoder_for_AdditionalProperties) {
        _cached_decoder_for_AdditionalProperties = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_AdditionalProperties(el);
}

let _cached_encoder_for_AdditionalProperties: $.ASN1Encoder<AdditionalProperties> | null = null;

/**
 * @summary Encodes a(n) AdditionalProperties into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalProperties, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalProperties(
    value: AdditionalProperties,
    elGetter: $.ASN1Encoder<AdditionalProperties>
) {
    if (!_cached_encoder_for_AdditionalProperties) {
        _cached_encoder_for_AdditionalProperties = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_AdditionalProperties(value, elGetter);
}


/* eslint-enable */
