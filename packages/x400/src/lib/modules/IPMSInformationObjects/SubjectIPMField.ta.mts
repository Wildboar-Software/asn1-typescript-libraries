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
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.mjs';
/**
 * @summary SubjectIPMField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectIPMField  ::=  IPMIdentifier
 * ```
 */
export type SubjectIPMField = IPMIdentifier; // DefinedType

let _cached_decoder_for_SubjectIPMField: $.ASN1Decoder<SubjectIPMField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectIPMField} The decoded data structure.
 */
export function _decode_SubjectIPMField(el: _Element) {
    if (!_cached_decoder_for_SubjectIPMField) {
        _cached_decoder_for_SubjectIPMField = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_SubjectIPMField(el);
}

let _cached_encoder_for_SubjectIPMField: $.ASN1Encoder<SubjectIPMField> | null = null;

/**
 * @summary Encodes a(n) SubjectIPMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectIPMField, encoded as an ASN.1 Element.
 */
export function _encode_SubjectIPMField(
    value: SubjectIPMField,
    elGetter: $.ASN1Encoder<SubjectIPMField>
) {
    if (!_cached_encoder_for_SubjectIPMField) {
        _cached_encoder_for_SubjectIPMField = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_SubjectIPMField(value, elGetter);
}


/* eslint-enable */
