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
    type Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary TimeoutPeriod
 * @description
 *
 * Maximum time a test may remain instantiated. Optional on controlled and
 * uncontrolled test requests. If the period expires the test terminates and
 * outcome is timed-out (or a scheduling-conflict notification for a controlled
 * TO). ITU-T Rec. X.745 (11/93) §8.1.7, 7.2.2, 8.4.2.7.
 * [§8.1.7](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeoutPeriod  ::=  Timespec
 * ```
 */
export type TimeoutPeriod = Timespec; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TimeoutPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeoutPeriod} The decoded data structure.
 */
export const _decode_TimeoutPeriod: $.ASN1Decoder<TimeoutPeriod> = _decode_Timespec;

/**
 * @summary Encodes a(n) TimeoutPeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeoutPeriod, encoded as an ASN.1 Element.
 */
export const _encode_TimeoutPeriod: $.ASN1Encoder<TimeoutPeriod> = _encode_Timespec;


/* eslint-enable */
