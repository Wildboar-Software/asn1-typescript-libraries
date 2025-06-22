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
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary LimitValidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitValidityDate  ::=  Time
 * ```
 */
export type LimitValidityDate = Time; // DefinedType

let _cached_decoder_for_LimitValidityDate: $.ASN1Decoder<LimitValidityDate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LimitValidityDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LimitValidityDate} The decoded data structure.
 */
export function _decode_LimitValidityDate(el: _Element) {
    if (!_cached_decoder_for_LimitValidityDate) {
        _cached_decoder_for_LimitValidityDate = _decode_Time;
    }
    return _cached_decoder_for_LimitValidityDate(el);
}

let _cached_encoder_for_LimitValidityDate: $.ASN1Encoder<LimitValidityDate> | null = null;

/**
 * @summary Encodes a(n) LimitValidityDate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LimitValidityDate, encoded as an ASN.1 Element.
 */
export function _encode_LimitValidityDate(
    value: LimitValidityDate,
    elGetter: $.ASN1Encoder<LimitValidityDate>
) {
    if (!_cached_encoder_for_LimitValidityDate) {
        _cached_encoder_for_LimitValidityDate = _encode_Time;
    }
    return _cached_encoder_for_LimitValidityDate(value, elGetter);
}


/* eslint-enable */
