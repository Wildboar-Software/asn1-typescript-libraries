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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/**
 * @summary Precision
 * @description
 *
 * Smallest value by which the clock changes (§3.7.14).
 * Positive interval only (A.5). Syntax of `clockPrecision`
 * in `clockSourceDetailPkg`. ITU-T Rec. X.743 (06/98)
 * [§8.3.9](https://www.itu.int/rec/T-REC-X.743-199806-I), §3.7.14, A.2.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precision  ::=
 *   TimeInterval
 * ```
 */
export type Precision = TimeInterval; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Precision
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Precision} The decoded data structure.
 */
export const _decode_Precision: $.ASN1Decoder<Precision> = _decode_TimeInterval;

/**
 * @summary Encodes a(n) Precision into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Precision, encoded as an ASN.1 Element.
 */
export const _encode_Precision: $.ASN1Encoder<Precision> = _encode_TimeInterval;


/* eslint-enable */
