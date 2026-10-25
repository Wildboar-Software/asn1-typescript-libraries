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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../SNMPv2-PDU/Unsigned32.ta.mjs";
/**
 * @summary Gauge32
 * @description
 *
 * Alias of `Unsigned32` in the SNMPv2-PDU module
 * ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3)).
 * SMIv2 `Gauge32` shares the `unsigned-integer-value` encoding with
 * `Unsigned32`
 * ([RFC 3416 §2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-2.5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Gauge32  ::=  Unsigned32
 * ```
 */
export
type Gauge32 = Unsigned32; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Gauge32
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Gauge32} The decoded data structure.
 */
export const _decode_Gauge32: $.ASN1Decoder<Gauge32> = _decode_Unsigned32;

/**
 * @summary Encodes a(n) Gauge32 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Gauge32, encoded as an ASN.1 Element.
 */
export const _encode_Gauge32: $.ASN1Encoder<Gauge32> = _encode_Unsigned32;


/* eslint-enable */
