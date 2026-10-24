/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary ExtensionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionRequest  ::=  Extensions
 * ```
 */
export type ExtensionRequest = Extensions; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionRequest} The decoded data structure.
 */
export const _decode_ExtensionRequest: $.ASN1Decoder<ExtensionRequest> = _decode_Extensions;

/**
 * @summary Encodes a(n) ExtensionRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionRequest, encoded as an ASN.1 Element.
 */
export const _encode_ExtensionRequest: $.ASN1Encoder<ExtensionRequest> = _encode_Extensions;


/* eslint-enable */
