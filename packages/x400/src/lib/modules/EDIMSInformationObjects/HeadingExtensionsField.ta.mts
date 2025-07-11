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
    HeadingExtensionsSubField,
    _decode_HeadingExtensionsSubField,
    _encode_HeadingExtensionsSubField,
} from '../EDIMSInformationObjects/HeadingExtensionsSubField.ta.mjs';
/**
 * @summary HeadingExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeadingExtensionsField  ::=  SET OF HeadingExtensionsSubField
 * ```
 */
export type HeadingExtensionsField = HeadingExtensionsSubField[]; // SetOfType

let _cached_decoder_for_HeadingExtensionsField: $.ASN1Decoder<HeadingExtensionsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeadingExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeadingExtensionsField} The decoded data structure.
 */
export function _decode_HeadingExtensionsField(el: _Element): HeadingExtensionsField {
    if (!_cached_decoder_for_HeadingExtensionsField) {
        _cached_decoder_for_HeadingExtensionsField = $._decodeSetOf<HeadingExtensionsSubField>(
            () => _decode_HeadingExtensionsSubField
        );
    }
    return _cached_decoder_for_HeadingExtensionsField(el);
}

let _cached_encoder_for_HeadingExtensionsField: $.ASN1Encoder<HeadingExtensionsField> | null = null;

/**
 * @summary Encodes a(n) HeadingExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeadingExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_HeadingExtensionsField(
    value: HeadingExtensionsField,
    elGetter: $.ASN1Encoder<HeadingExtensionsField>
): _Element {
    if (!_cached_encoder_for_HeadingExtensionsField) {
        _cached_encoder_for_HeadingExtensionsField = $._encodeSetOf<HeadingExtensionsSubField>(
            () => _encode_HeadingExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_HeadingExtensionsField(value, elGetter);
}


/* eslint-enable */
