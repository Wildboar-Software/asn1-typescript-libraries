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
    Time,
    _decode_Time,
    _encode_Time,
} from '../IPMSInformationObjects/Time.ta.mjs';
/**
 * @summary ReceiptTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptTimeField  ::=  Time
 * ```
 */
export type ReceiptTimeField = Time; // DefinedType

let _cached_decoder_for_ReceiptTimeField: $.ASN1Decoder<ReceiptTimeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptTimeField} The decoded data structure.
 */
export function _decode_ReceiptTimeField(el: _Element) {
    if (!_cached_decoder_for_ReceiptTimeField) {
        _cached_decoder_for_ReceiptTimeField = _decode_Time;
    }
    return _cached_decoder_for_ReceiptTimeField(el);
}

let _cached_encoder_for_ReceiptTimeField: $.ASN1Encoder<ReceiptTimeField> | null = null;

/**
 * @summary Encodes a(n) ReceiptTimeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptTimeField, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptTimeField(
    value: ReceiptTimeField,
    elGetter: $.ASN1Encoder<ReceiptTimeField>
) {
    if (!_cached_encoder_for_ReceiptTimeField) {
        _cached_encoder_for_ReceiptTimeField = _encode_Time;
    }
    return _cached_encoder_for_ReceiptTimeField(value, elGetter);
}


/* eslint-enable */
