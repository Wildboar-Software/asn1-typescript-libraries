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
 * @summary MaxSkew
 * @description
 *
 * Maximum offset error caused by skew of a local clock over
 * the interval `maximumClockAge`. Syntax of `maximumSkew`.
 * ITU-T Rec. X.743 (06/98)
 * [§B.3.8](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxSkew  ::=  TimeInterval
 * ```
 */
export type MaxSkew = TimeInterval; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MaxSkew
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxSkew} The decoded data structure.
 */
export const _decode_MaxSkew: $.ASN1Decoder<MaxSkew> = _decode_TimeInterval;

/**
 * @summary Encodes a(n) MaxSkew into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxSkew, encoded as an ASN.1 Element.
 */
export const _encode_MaxSkew: $.ASN1Encoder<MaxSkew> = _encode_TimeInterval;


/* eslint-enable */
