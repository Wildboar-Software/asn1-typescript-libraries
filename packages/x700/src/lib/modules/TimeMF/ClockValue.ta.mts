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
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../TimeMF/GlobalTime.ta.mjs';
/**
 * @summary ClockValue
 * @description
 *
 * Current time of the clock. Syntax of `clockValue` (`GET`)
 * and of `clockReset` action information. ITU-T Rec. X.743 (06/98)
 * [§8.3.12](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.12, A.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockValue  ::=  GlobalTime
 * ```
 */
export type ClockValue = GlobalTime; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ClockValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockValue} The decoded data structure.
 */
export const _decode_ClockValue: $.ASN1Decoder<ClockValue> = _decode_GlobalTime;

/**
 * @summary Encodes a(n) ClockValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockValue, encoded as an ASN.1 Element.
 */
export const _encode_ClockValue: $.ASN1Encoder<ClockValue> = _encode_GlobalTime;


/* eslint-enable */
