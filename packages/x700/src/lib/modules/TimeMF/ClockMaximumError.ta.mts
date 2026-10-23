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
 * @summary ClockMaximumError
 * @description
 *
 * Maximum error bound of the absolute value of the clock's
 * error versus UTC (§3.7.13). Syntax of `clockMaximumError`
 * in `clockSourceDetailPkg`. A correct clock has |error|
 * less than this bound (§3.7.6). ITU-T Rec. X.743 (06/98)
 * [§8.3.8](https://www.itu.int/rec/T-REC-X.743-199806-I), §3.7.13, A.2.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockMaximumError  ::=  TimeInterval
 * ```
 */
export type ClockMaximumError = TimeInterval; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ClockMaximumError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockMaximumError} The decoded data structure.
 */
export const _decode_ClockMaximumError: $.ASN1Decoder<ClockMaximumError> = _decode_TimeInterval;

/**
 * @summary Encodes a(n) ClockMaximumError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockMaximumError, encoded as an ASN.1 Element.
 */
export const _encode_ClockMaximumError: $.ASN1Encoder<ClockMaximumError> = _encode_TimeInterval;


/* eslint-enable */
