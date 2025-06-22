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
 * @summary OperationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationTime  ::=  Time
 * ```
 */
export type OperationTime = Time; // DefinedType

let _cached_decoder_for_OperationTime: $.ASN1Decoder<OperationTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationTime} The decoded data structure.
 */
export function _decode_OperationTime(el: _Element) {
    if (!_cached_decoder_for_OperationTime) {
        _cached_decoder_for_OperationTime = _decode_Time;
    }
    return _cached_decoder_for_OperationTime(el);
}

let _cached_encoder_for_OperationTime: $.ASN1Encoder<OperationTime> | null = null;

/**
 * @summary Encodes a(n) OperationTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationTime, encoded as an ASN.1 Element.
 */
export function _encode_OperationTime(
    value: OperationTime,
    elGetter: $.ASN1Encoder<OperationTime>
) {
    if (!_cached_encoder_for_OperationTime) {
        _cached_encoder_for_OperationTime = _encode_Time;
    }
    return _cached_encoder_for_OperationTime(value, elGetter);
}


/* eslint-enable */
