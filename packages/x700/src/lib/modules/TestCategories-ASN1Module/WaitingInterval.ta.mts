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
 * @summary WaitingInterval
 * @description
 *
 * Wait before transmitting the next protocol element,
 * measured from when the last element was emitted. Used instead
 * of `pDUReception` when the continuation condition is a fixed
 * interval. Alias of `Timespec`. ITU-T Rec. X.737 (11/95)
 * [§8.1.25](https://www.itu.int/rec/T-REC-X.737-199511-I), A.3
 * `waitingIntervalPackage`, A.6.26.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaitingInterval  ::=  Timespec
 * ```
 */
export type WaitingInterval = Timespec; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) WaitingInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WaitingInterval} The decoded data structure.
 */
export const _decode_WaitingInterval: $.ASN1Decoder<WaitingInterval> = _decode_Timespec;

/**
 * @summary Encodes a(n) WaitingInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WaitingInterval, encoded as an ASN.1 Element.
 */
export const _encode_WaitingInterval: $.ASN1Encoder<WaitingInterval> = _encode_Timespec;


/* eslint-enable */
