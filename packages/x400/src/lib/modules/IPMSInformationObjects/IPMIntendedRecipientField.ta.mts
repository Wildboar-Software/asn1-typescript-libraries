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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
/**
 * @summary IPMIntendedRecipientField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMIntendedRecipientField  ::=  ORDescriptor
 * ```
 */
export type IPMIntendedRecipientField = ORDescriptor; // DefinedType

let _cached_decoder_for_IPMIntendedRecipientField: $.ASN1Decoder<IPMIntendedRecipientField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMIntendedRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMIntendedRecipientField} The decoded data structure.
 */
export function _decode_IPMIntendedRecipientField(el: _Element) {
    if (!_cached_decoder_for_IPMIntendedRecipientField) {
        _cached_decoder_for_IPMIntendedRecipientField = _decode_ORDescriptor;
    }
    return _cached_decoder_for_IPMIntendedRecipientField(el);
}

let _cached_encoder_for_IPMIntendedRecipientField: $.ASN1Encoder<IPMIntendedRecipientField> | null = null;

/**
 * @summary Encodes a(n) IPMIntendedRecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMIntendedRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_IPMIntendedRecipientField(
    value: IPMIntendedRecipientField,
    elGetter: $.ASN1Encoder<IPMIntendedRecipientField>
) {
    if (!_cached_encoder_for_IPMIntendedRecipientField) {
        _cached_encoder_for_IPMIntendedRecipientField = _encode_ORDescriptor;
    }
    return _cached_encoder_for_IPMIntendedRecipientField(value, elGetter);
}


/* eslint-enable */
