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
 * @summary ExpiryTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpiryTimeField  ::=  Time
 * ```
 */
export type ExpiryTimeField = Time; // DefinedType

let _cached_decoder_for_ExpiryTimeField: $.ASN1Decoder<ExpiryTimeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpiryTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpiryTimeField} The decoded data structure.
 */
export function _decode_ExpiryTimeField(el: _Element): ExpiryTimeField {
    if (!_cached_decoder_for_ExpiryTimeField) {
        _cached_decoder_for_ExpiryTimeField = _decode_Time;
    }
    return _cached_decoder_for_ExpiryTimeField(el);
}

let _cached_encoder_for_ExpiryTimeField: $.ASN1Encoder<ExpiryTimeField> | null = null;

/**
 * @summary Encodes a(n) ExpiryTimeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpiryTimeField, encoded as an ASN.1 Element.
 */
export function _encode_ExpiryTimeField(
    value: ExpiryTimeField,
    elGetter: $.ASN1Encoder<ExpiryTimeField>
): _Element {
    if (!_cached_encoder_for_ExpiryTimeField) {
        _cached_encoder_for_ExpiryTimeField = _encode_Time;
    }
    return _cached_encoder_for_ExpiryTimeField(value, elGetter);
}


/* eslint-enable */
