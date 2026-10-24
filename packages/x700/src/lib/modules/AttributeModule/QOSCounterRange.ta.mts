/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * GDMO example (X.722 Annex A). Permitted and required value
 * set of the example `qOS-Error-Counter` attribute:
 * `QOSErrorCounter(0..4294967296)` (commented as a 32-bit
 * range). ITU-T Rec. X.722 (01/92)
 * [A.4](https://www.itu.int/rec/T-REC-X.722-199201-I), A.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QOSCounterRange  ::=  QOSErrorCounter(0..4294967296)
 * ```
 */
export type QOSCounterRange = QOSErrorCounter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) QOSCounterRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QOSCounterRange} The decoded data structure.
 */
export const _decode_QOSCounterRange: $.ASN1Decoder<QOSCounterRange> = _decode_QOSErrorCounter;

/**
 * @summary Encodes a(n) QOSCounterRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSCounterRange, encoded as an ASN.1 Element.
 */
export const _encode_QOSCounterRange: $.ASN1Encoder<QOSCounterRange> = _encode_QOSErrorCounter;


/* eslint-enable */
