/* eslint-disable */
import {
    INTEGER,
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
 * @summary InvokeldsOutstanding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeldsOutstanding  ::=  SET OF INTEGER
 * ```
 */
export type InvokeldsOutstanding = INTEGER[]; // SetOfType

let _cached_decoder_for_InvokeldsOutstanding: $.ASN1Decoder<InvokeldsOutstanding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeldsOutstanding
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeldsOutstanding} The decoded data structure.
 */
export function _decode_InvokeldsOutstanding(el: _Element) {
    if (!_cached_decoder_for_InvokeldsOutstanding) {
        _cached_decoder_for_InvokeldsOutstanding = $._decodeSetOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_InvokeldsOutstanding(el);
}

let _cached_encoder_for_InvokeldsOutstanding: $.ASN1Encoder<InvokeldsOutstanding> | null = null;

/**
 * @summary Encodes a(n) InvokeldsOutstanding into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeldsOutstanding, encoded as an ASN.1 Element.
 */
export function _encode_InvokeldsOutstanding(
    value: InvokeldsOutstanding,
    elGetter: $.ASN1Encoder<InvokeldsOutstanding>
) {
    if (!_cached_encoder_for_InvokeldsOutstanding) {
        _cached_encoder_for_InvokeldsOutstanding = $._encodeSetOf<INTEGER>(
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_InvokeldsOutstanding(value, elGetter);
}


/* eslint-enable */
