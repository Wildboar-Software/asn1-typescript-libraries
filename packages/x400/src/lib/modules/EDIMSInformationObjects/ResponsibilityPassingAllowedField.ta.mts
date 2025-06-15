/* eslint-disable */
import {
    BOOLEAN,
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

/**
 * @summary ResponsibilityPassingAllowedField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponsibilityPassingAllowedField  ::=  BOOLEAN
 * ```
 */
export type ResponsibilityPassingAllowedField = BOOLEAN; // BooleanType

let _cached_decoder_for_ResponsibilityPassingAllowedField: $.ASN1Decoder<ResponsibilityPassingAllowedField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResponsibilityPassingAllowedField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponsibilityPassingAllowedField} The decoded data structure.
 */
export function _decode_ResponsibilityPassingAllowedField(el: _Element) {
    if (!_cached_decoder_for_ResponsibilityPassingAllowedField) {
        _cached_decoder_for_ResponsibilityPassingAllowedField =
            $._decodeBoolean;
    }
    return _cached_decoder_for_ResponsibilityPassingAllowedField(el);
}

let _cached_encoder_for_ResponsibilityPassingAllowedField: $.ASN1Encoder<ResponsibilityPassingAllowedField> | null = null;

/**
 * @summary Encodes a(n) ResponsibilityPassingAllowedField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponsibilityPassingAllowedField, encoded as an ASN.1 Element.
 */
export function _encode_ResponsibilityPassingAllowedField(
    value: ResponsibilityPassingAllowedField,
    elGetter: $.ASN1Encoder<ResponsibilityPassingAllowedField>
) {
    if (!_cached_encoder_for_ResponsibilityPassingAllowedField) {
        _cached_encoder_for_ResponsibilityPassingAllowedField =
            $._encodeBoolean;
    }
    return _cached_encoder_for_ResponsibilityPassingAllowedField(
        value,
        elGetter
    );
}


/* eslint-enable */
