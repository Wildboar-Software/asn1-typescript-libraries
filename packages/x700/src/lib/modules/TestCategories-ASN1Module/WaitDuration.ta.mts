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
 * @summary WaitDuration
 * @description
 *
 * Alias of `Timespec`. Wait associated with a resource-
 * boundary event or a protocol-integrity PDU: for receive, time
 * allowed until the signal; for send, delay after the previous
 * event before inserting. ITU-T Rec. X.737 (11/95)
 * [§8.1.20](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.6.2.2, A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaitDuration  ::=  Timespec
 * ```
 */
export type WaitDuration = Timespec; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) WaitDuration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WaitDuration} The decoded data structure.
 */
export const _decode_WaitDuration: $.ASN1Decoder<WaitDuration> = _decode_Timespec;

/**
 * @summary Encodes a(n) WaitDuration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WaitDuration, encoded as an ASN.1 Element.
 */
export const _encode_WaitDuration: $.ASN1Encoder<WaitDuration> = _encode_Timespec;


/* eslint-enable */
