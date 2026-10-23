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
 * @summary Dispersion
 * @description
 *
 * NTP dispersion (positive values only). Syntax of
 * `maximumDispersion` (maximum increment, and value assumed
 * for missing data) and `minimumDispersion` (minimum
 * increment per stratum). ITU-T Rec. X.743 (06/98)
 * [§B.3.4](https://www.itu.int/rec/T-REC-X.743-199806-I), B.3.10, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Dispersion  ::=  TimeInterval
 * ```
 */
export type Dispersion = TimeInterval; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Dispersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Dispersion} The decoded data structure.
 */
export const _decode_Dispersion: $.ASN1Decoder<Dispersion> = _decode_TimeInterval;

/**
 * @summary Encodes a(n) Dispersion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Dispersion, encoded as an ASN.1 Element.
 */
export const _encode_Dispersion: $.ASN1Encoder<Dispersion> = _encode_TimeInterval;


/* eslint-enable */
