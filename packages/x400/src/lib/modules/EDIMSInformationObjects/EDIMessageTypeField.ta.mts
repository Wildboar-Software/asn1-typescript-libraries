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
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta.mjs';
/**
 * @summary EDIMessageTypeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMessageTypeField  ::=  SET OF EDIMessageTypeFieldSubField
 * ```
 */
export type EDIMessageTypeField = EDIMessageTypeFieldSubField[]; // SetOfType

let _cached_decoder_for_EDIMessageTypeField: $.ASN1Decoder<EDIMessageTypeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIMessageTypeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMessageTypeField} The decoded data structure.
 */
export function _decode_EDIMessageTypeField(el: _Element): EDIMessageTypeField {
    if (!_cached_decoder_for_EDIMessageTypeField) {
        _cached_decoder_for_EDIMessageTypeField = $._decodeSetOf<EDIMessageTypeFieldSubField>(
            () => _decode_EDIMessageTypeFieldSubField
        );
    }
    return _cached_decoder_for_EDIMessageTypeField(el);
}

let _cached_encoder_for_EDIMessageTypeField: $.ASN1Encoder<EDIMessageTypeField> | null = null;

/**
 * @summary Encodes a(n) EDIMessageTypeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMessageTypeField, encoded as an ASN.1 Element.
 */
export function _encode_EDIMessageTypeField(
    value: EDIMessageTypeField,
    elGetter: $.ASN1Encoder<EDIMessageTypeField>
): _Element {
    if (!_cached_encoder_for_EDIMessageTypeField) {
        _cached_encoder_for_EDIMessageTypeField = $._encodeSetOf<EDIMessageTypeFieldSubField>(
            () => _encode_EDIMessageTypeFieldSubField,
            $.BER
        );
    }
    return _cached_encoder_for_EDIMessageTypeField(value, elGetter);
}


/* eslint-enable */
