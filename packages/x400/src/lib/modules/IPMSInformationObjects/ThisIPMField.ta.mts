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
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.mjs';
/**
 * @summary ThisIPMField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThisIPMField  ::=  IPMIdentifier
 * ```
 */
export type ThisIPMField = IPMIdentifier; // DefinedType

let _cached_decoder_for_ThisIPMField: $.ASN1Decoder<ThisIPMField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThisIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThisIPMField} The decoded data structure.
 */
export function _decode_ThisIPMField(el: _Element): ThisIPMField {
    if (!_cached_decoder_for_ThisIPMField) {
        _cached_decoder_for_ThisIPMField = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_ThisIPMField(el);
}

let _cached_encoder_for_ThisIPMField: $.ASN1Encoder<ThisIPMField> | null = null;

/**
 * @summary Encodes a(n) ThisIPMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisIPMField, encoded as an ASN.1 Element.
 */
export function _encode_ThisIPMField(
    value: ThisIPMField,
    elGetter: $.ASN1Encoder<ThisIPMField>
): _Element {
    if (!_cached_encoder_for_ThisIPMField) {
        _cached_encoder_for_ThisIPMField = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_ThisIPMField(value, elGetter);
}


/* eslint-enable */
