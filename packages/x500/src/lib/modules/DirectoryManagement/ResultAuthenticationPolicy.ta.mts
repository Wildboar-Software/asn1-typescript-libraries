/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RequestAuthenticationPolicy,
    _decode_RequestAuthenticationPolicy,
    _encode_RequestAuthenticationPolicy,
} from "../DirectoryManagement/RequestAuthenticationPolicy.ta.mjs";
/**
 * @summary ResultAuthenticationPolicy
 * @description
 *
 * Same encoding as `RequestAuthenticationPolicy` (alias), but for *result*
 * authentication supported by the DSA. Do not confuse with request policy.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAuthenticationPolicy  ::=  RequestAuthenticationPolicy
 * ```
 */
export type ResultAuthenticationPolicy = RequestAuthenticationPolicy; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ResultAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAuthenticationPolicy} The decoded data structure.
 */
export const _decode_ResultAuthenticationPolicy: $.ASN1Decoder<ResultAuthenticationPolicy> = _decode_RequestAuthenticationPolicy;

/**
 * @summary Encodes a(n) ResultAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export const _encode_ResultAuthenticationPolicy: $.ASN1Encoder<ResultAuthenticationPolicy> = _encode_RequestAuthenticationPolicy;


/* eslint-enable */
