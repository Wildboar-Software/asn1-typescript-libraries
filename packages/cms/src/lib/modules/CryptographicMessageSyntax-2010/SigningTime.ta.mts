/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Time,
    _decode_Time,
    _encode_Time,
} from "../CryptographicMessageSyntax-2010/Time.ta.mjs";

/**
 * @summary SigningTime
 * @description
 *
 * Time type used as the value of the signing-time attribute — the time the
 * content was signed ([RFC 5652 §11.3](https://datatracker.ietf.org/doc/html/rfc5652#section-11.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigningTime   ::=  Time
 * ```
 */
export type SigningTime = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SigningTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigningTime} The decoded data structure.
 */
export const _decode_SigningTime: $.ASN1Decoder<SigningTime> = _decode_Time;

/**
 * @summary Encodes a(n) SigningTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigningTime, encoded as an ASN.1 Element.
 */
export const _encode_SigningTime: $.ASN1Encoder<SigningTime> = _encode_Time;


/* eslint-enable */
