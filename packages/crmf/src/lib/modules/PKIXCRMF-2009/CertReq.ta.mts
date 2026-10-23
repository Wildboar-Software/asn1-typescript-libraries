/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertRequest,
    _decode_CertRequest,
    _encode_CertRequest,
} from "../PKIXCRMF-2009/CertRequest.ta.mjs";

/**
 * @summary CertReq
 * @description
 *
 * Alias for `CertRequest`; type of the `regInfo-certReq` attribute
 * ([RFC 4211 §7.2](https://datatracker.ietf.org/doc/html/rfc4211#section-7.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReq  ::=  CertRequest
 * ```
 */
export type CertReq = CertRequest; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CertReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReq} The decoded data structure.
 */
export const _decode_CertReq: $.ASN1Decoder<CertReq> = _decode_CertRequest;

/**
 * @summary Encodes a(n) CertReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReq, encoded as an ASN.1 Element.
 */
export const _encode_CertReq: $.ASN1Encoder<CertReq> = _encode_CertRequest;


/* eslint-enable */
