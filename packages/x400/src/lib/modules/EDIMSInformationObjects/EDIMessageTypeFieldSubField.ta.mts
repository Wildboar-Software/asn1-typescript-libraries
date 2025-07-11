/* eslint-disable */
import {
    TeletexString,
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

/**
 * @summary EDIMessageTypeFieldSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMessageTypeFieldSubField  ::=  TeletexString(SIZE (1..ub-edi-message-type))
 * ```
 */
export type EDIMessageTypeFieldSubField = TeletexString; // TeletexString

let _cached_decoder_for_EDIMessageTypeFieldSubField: $.ASN1Decoder<EDIMessageTypeFieldSubField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIMessageTypeFieldSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMessageTypeFieldSubField} The decoded data structure.
 */
export function _decode_EDIMessageTypeFieldSubField(el: _Element): EDIMessageTypeFieldSubField {
    if (!_cached_decoder_for_EDIMessageTypeFieldSubField) {
        _cached_decoder_for_EDIMessageTypeFieldSubField =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_EDIMessageTypeFieldSubField(el);
}

let _cached_encoder_for_EDIMessageTypeFieldSubField: $.ASN1Encoder<EDIMessageTypeFieldSubField> | null = null;

/**
 * @summary Encodes a(n) EDIMessageTypeFieldSubField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMessageTypeFieldSubField, encoded as an ASN.1 Element.
 */
export function _encode_EDIMessageTypeFieldSubField(
    value: EDIMessageTypeFieldSubField,
    elGetter: $.ASN1Encoder<EDIMessageTypeFieldSubField>
): _Element {
    if (!_cached_encoder_for_EDIMessageTypeFieldSubField) {
        _cached_encoder_for_EDIMessageTypeFieldSubField =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_EDIMessageTypeFieldSubField(value, elGetter);
}


/* eslint-enable */
