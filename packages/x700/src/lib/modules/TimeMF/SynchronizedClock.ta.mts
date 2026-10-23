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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary SynchronizedClock
 * @description
 *
 * Managed-object instance of the clock being synchronized by
 * this time-synchronization protocol instance. Syntax of
 * `synchronizedClock`. ITU-T Rec. X.743 (06/98)
 * [§8.3.21](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.21.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SynchronizedClock  ::=  ObjectInstance
 * ```
 */
export type SynchronizedClock = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SynchronizedClock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SynchronizedClock} The decoded data structure.
 */
export const _decode_SynchronizedClock: $.ASN1Decoder<SynchronizedClock> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) SynchronizedClock into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynchronizedClock, encoded as an ASN.1 Element.
 */
export const _encode_SynchronizedClock: $.ASN1Encoder<SynchronizedClock> = _encode_ObjectInstance;


/* eslint-enable */
