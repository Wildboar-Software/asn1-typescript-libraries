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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../IPMSInformationObjects/Time.ta.mjs';
/**
 * @summary ReplyTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyTimeField  ::=  Time
 * ```
 */
export type ReplyTimeField = Time; // DefinedType

let _cached_decoder_for_ReplyTimeField: $.ASN1Decoder<ReplyTimeField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyTimeField} The decoded data structure.
 */
export function _decode_ReplyTimeField(el: _Element) {
    if (!_cached_decoder_for_ReplyTimeField) {
        _cached_decoder_for_ReplyTimeField = _decode_Time;
    }
    return _cached_decoder_for_ReplyTimeField(el);
}

let _cached_encoder_for_ReplyTimeField: $.ASN1Encoder<ReplyTimeField> | null = null;

/**
 * @summary Encodes a(n) ReplyTimeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyTimeField, encoded as an ASN.1 Element.
 */
export function _encode_ReplyTimeField(
    value: ReplyTimeField,
    elGetter: $.ASN1Encoder<ReplyTimeField>
) {
    if (!_cached_encoder_for_ReplyTimeField) {
        _cached_encoder_for_ReplyTimeField = _encode_Time;
    }
    return _cached_encoder_for_ReplyTimeField(value, elGetter);
}


/* eslint-enable */
