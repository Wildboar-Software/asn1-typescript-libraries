/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
/**
 * @summary AuthAttId
 * @description
 *
 * Alias of IssuerSerial identifying an AA's attribute certificate.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttId  ::=  IssuerSerial
 * ```
 */
export type AuthAttId = IssuerSerial; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AuthAttId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthAttId} The decoded data structure.
 */
export const _decode_AuthAttId: $.ASN1Decoder<AuthAttId> = _decode_IssuerSerial;

/**
 * @summary Encodes a(n) AuthAttId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAttId, encoded as an ASN.1 Element.
 */
export const _encode_AuthAttId: $.ASN1Encoder<AuthAttId> = _encode_IssuerSerial;


/* eslint-enable */
