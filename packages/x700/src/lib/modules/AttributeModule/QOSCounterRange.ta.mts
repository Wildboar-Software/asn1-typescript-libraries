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
    QOSErrorCounter,
    _decode_QOSErrorCounter,
    _encode_QOSErrorCounter,
} from '../AttributeModule/QOSErrorCounter.ta.mjs';
/**
 * @summary QOSCounterRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QOSCounterRange  ::=  QOSErrorCounter(0..4294967296)
 * ```
 */
export type QOSCounterRange = QOSErrorCounter; // DefinedType

let _cached_decoder_for_QOSCounterRange: $.ASN1Decoder<QOSCounterRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSCounterRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QOSCounterRange} The decoded data structure.
 */
export function _decode_QOSCounterRange(el: _Element) {
    if (!_cached_decoder_for_QOSCounterRange) {
        _cached_decoder_for_QOSCounterRange = _decode_QOSErrorCounter;
    }
    return _cached_decoder_for_QOSCounterRange(el);
}

let _cached_encoder_for_QOSCounterRange: $.ASN1Encoder<QOSCounterRange> | null = null;

/**
 * @summary Encodes a(n) QOSCounterRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSCounterRange, encoded as an ASN.1 Element.
 */
export function _encode_QOSCounterRange(
    value: QOSCounterRange,
    elGetter: $.ASN1Encoder<QOSCounterRange>
) {
    if (!_cached_encoder_for_QOSCounterRange) {
        _cached_encoder_for_QOSCounterRange = _encode_QOSErrorCounter;
    }
    return _cached_encoder_for_QOSCounterRange(value, elGetter);
}


/* eslint-enable */
