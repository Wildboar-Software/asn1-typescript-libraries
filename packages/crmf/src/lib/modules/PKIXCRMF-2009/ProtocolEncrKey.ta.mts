/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary ProtocolEncrKey
 * @description
 *
 * `SubjectPublicKeyInfo` naming a key the CA should use to
 * encrypt a response to `CertReqMessages` (e.g. a CA-generated
 * private key) ([RFC 4211 §6.6](https://datatracker.ietf.org/doc/html/rfc4211#section-6.6)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolEncrKey  ::=  SubjectPublicKeyInfo
 * ```
 */
export type ProtocolEncrKey = SubjectPublicKeyInfo; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolEncrKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolEncrKey} The decoded data structure.
 */
export const _decode_ProtocolEncrKey: $.ASN1Decoder<ProtocolEncrKey> = _decode_SubjectPublicKeyInfo;

/**
 * @summary Encodes a(n) ProtocolEncrKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolEncrKey, encoded as an ASN.1 Element.
 */
export const _encode_ProtocolEncrKey: $.ASN1Encoder<ProtocolEncrKey> = _encode_SubjectPublicKeyInfo;


/* eslint-enable */
