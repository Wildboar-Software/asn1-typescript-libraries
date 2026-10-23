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
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../TimeMF/GlobalTime.ta.mjs';
/**
 * @summary ClockEventTime
 * @description
 *
 * Time at which the latest system exception event occurred.
 * Syntax of `clockEventTime`. ITU-T Rec. X.743 (06/98)
 * [§8.3.6](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventTime  ::=  GlobalTime
 * ```
 */
export type ClockEventTime = GlobalTime; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ClockEventTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockEventTime} The decoded data structure.
 */
export const _decode_ClockEventTime: $.ASN1Decoder<ClockEventTime> = _decode_GlobalTime;

/**
 * @summary Encodes a(n) ClockEventTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockEventTime, encoded as an ASN.1 Element.
 */
export const _encode_ClockEventTime: $.ASN1Encoder<ClockEventTime> = _encode_GlobalTime;


/* eslint-enable */
