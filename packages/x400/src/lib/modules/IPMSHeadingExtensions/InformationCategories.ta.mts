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
import * as $ from '@wildboar/asn1/functional';
import {
    InformationCategory,
    _decode_InformationCategory,
    _encode_InformationCategory,
} from '../IPMSHeadingExtensions/InformationCategory.ta.mjs';
/**
 * @summary InformationCategories
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationCategories  ::=
 *   SEQUENCE (SIZE (1..ub-information-categories)) OF InformationCategory
 * ```
 */
export type InformationCategories = InformationCategory[]; // SequenceOfType

let _cached_decoder_for_InformationCategories: $.ASN1Decoder<InformationCategories> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationCategories
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationCategories} The decoded data structure.
 */
export function _decode_InformationCategories(el: _Element) {
    if (!_cached_decoder_for_InformationCategories) {
        _cached_decoder_for_InformationCategories = $._decodeSequenceOf<InformationCategory>(
            () => _decode_InformationCategory
        );
    }
    return _cached_decoder_for_InformationCategories(el);
}

let _cached_encoder_for_InformationCategories: $.ASN1Encoder<InformationCategories> | null = null;

/**
 * @summary Encodes a(n) InformationCategories into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationCategories, encoded as an ASN.1 Element.
 */
export function _encode_InformationCategories(
    value: InformationCategories,
    elGetter: $.ASN1Encoder<InformationCategories>
) {
    if (!_cached_encoder_for_InformationCategories) {
        _cached_encoder_for_InformationCategories = $._encodeSequenceOf<InformationCategory>(
            () => _encode_InformationCategory,
            $.BER
        );
    }
    return _cached_encoder_for_InformationCategories(value, elGetter);
}


/* eslint-enable */
