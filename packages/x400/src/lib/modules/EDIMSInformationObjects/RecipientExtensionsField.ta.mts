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
    RecipientExtensionsSubField,
    _decode_RecipientExtensionsSubField,
    _encode_RecipientExtensionsSubField,
} from '../EDIMSInformationObjects/RecipientExtensionsSubField.ta.mjs';
/**
 * @summary RecipientExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientExtensionsField  ::=  SET OF RecipientExtensionsSubField
 * ```
 */
export type RecipientExtensionsField = RecipientExtensionsSubField[]; // SetOfType

let _cached_decoder_for_RecipientExtensionsField: $.ASN1Decoder<RecipientExtensionsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientExtensionsField} The decoded data structure.
 */
export function _decode_RecipientExtensionsField(el: _Element): RecipientExtensionsField {
    if (!_cached_decoder_for_RecipientExtensionsField) {
        _cached_decoder_for_RecipientExtensionsField = $._decodeSetOf<RecipientExtensionsSubField>(
            () => _decode_RecipientExtensionsSubField
        );
    }
    return _cached_decoder_for_RecipientExtensionsField(el);
}

let _cached_encoder_for_RecipientExtensionsField: $.ASN1Encoder<RecipientExtensionsField> | null = null;

/**
 * @summary Encodes a(n) RecipientExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_RecipientExtensionsField(
    value: RecipientExtensionsField,
    elGetter: $.ASN1Encoder<RecipientExtensionsField>
): _Element {
    if (!_cached_encoder_for_RecipientExtensionsField) {
        _cached_encoder_for_RecipientExtensionsField = $._encodeSetOf<RecipientExtensionsSubField>(
            () => _encode_RecipientExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_RecipientExtensionsField(value, elGetter);
}


/* eslint-enable */
