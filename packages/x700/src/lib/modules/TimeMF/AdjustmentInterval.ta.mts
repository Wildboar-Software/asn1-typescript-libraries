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
 * @summary AdjustmentInterval
 * @description
 *
 * Interval over which gradual phase adjustments to the local
 * clock are applied. Syntax of `clockAdjustmentInterval` on
 * `localClock` (`GET-REPLACE`, `SET-BY-CREATE`). ITU-T Rec. X.743 (06/98)
 * [§8.3.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.1, A.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjustmentInterval  ::=  TimeInterval
 * ```
 */
export type AdjustmentInterval = TimeInterval; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AdjustmentInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdjustmentInterval} The decoded data structure.
 */
export const _decode_AdjustmentInterval: $.ASN1Decoder<AdjustmentInterval> = _decode_TimeInterval;

/**
 * @summary Encodes a(n) AdjustmentInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjustmentInterval, encoded as an ASN.1 Element.
 */
export const _encode_AdjustmentInterval: $.ASN1Encoder<AdjustmentInterval> = _encode_TimeInterval;


/* eslint-enable */
