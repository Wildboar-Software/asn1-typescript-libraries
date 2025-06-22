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
    RecipientField,
    _decode_RecipientField,
    _encode_RecipientField,
} from '../EDIMSInformationObjects/RecipientField.ta.mjs';
/**
 * @summary NewRecipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NewRecipient  ::=  RecipientField
 * ```
 */
export type NewRecipient = RecipientField; // DefinedType

let _cached_decoder_for_NewRecipient: $.ASN1Decoder<NewRecipient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NewRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NewRecipient} The decoded data structure.
 */
export function _decode_NewRecipient(el: _Element) {
    if (!_cached_decoder_for_NewRecipient) {
        _cached_decoder_for_NewRecipient = _decode_RecipientField;
    }
    return _cached_decoder_for_NewRecipient(el);
}

let _cached_encoder_for_NewRecipient: $.ASN1Encoder<NewRecipient> | null = null;

/**
 * @summary Encodes a(n) NewRecipient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NewRecipient, encoded as an ASN.1 Element.
 */
export function _encode_NewRecipient(
    value: NewRecipient,
    elGetter: $.ASN1Encoder<NewRecipient>
) {
    if (!_cached_encoder_for_NewRecipient) {
        _cached_encoder_for_NewRecipient = _encode_RecipientField;
    }
    return _cached_encoder_for_NewRecipient(value, elGetter);
}


/* eslint-enable */
