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
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
/**
 * @summary SubjectEDIMField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectEDIMField  ::=  EDIMIdentifier
 * ```
 */
export type SubjectEDIMField = EDIMIdentifier; // DefinedType

let _cached_decoder_for_SubjectEDIMField: $.ASN1Decoder<SubjectEDIMField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectEDIMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectEDIMField} The decoded data structure.
 */
export function _decode_SubjectEDIMField(el: _Element): SubjectEDIMField {
    if (!_cached_decoder_for_SubjectEDIMField) {
        _cached_decoder_for_SubjectEDIMField = _decode_EDIMIdentifier;
    }
    return _cached_decoder_for_SubjectEDIMField(el);
}

let _cached_encoder_for_SubjectEDIMField: $.ASN1Encoder<SubjectEDIMField> | null = null;

/**
 * @summary Encodes a(n) SubjectEDIMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectEDIMField, encoded as an ASN.1 Element.
 */
export function _encode_SubjectEDIMField(
    value: SubjectEDIMField,
    elGetter: $.ASN1Encoder<SubjectEDIMField>
): _Element {
    if (!_cached_encoder_for_SubjectEDIMField) {
        _cached_encoder_for_SubjectEDIMField = _encode_EDIMIdentifier;
    }
    return _cached_encoder_for_SubjectEDIMField(value, elGetter);
}


/* eslint-enable */
