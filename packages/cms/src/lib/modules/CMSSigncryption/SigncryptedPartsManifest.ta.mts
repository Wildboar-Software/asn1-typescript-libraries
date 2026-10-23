/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signcrypted,
    _decode_Signcrypted,
    _encode_Signcrypted,
} from "../CMSSigncryption/Signcrypted.ta.mjs";

/**
 * @summary SigncryptedPartsManifest
 * @description
 *
 * Parameterized manifest locating signcrypted components within content
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedPartsManifest  ::=  Signcrypted{{Manifest}}
 * ```
 */
export type SigncryptedPartsManifest = Signcrypted; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedPartsManifest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedPartsManifest} The decoded data structure.
 */
export const _decode_SigncryptedPartsManifest: $.ASN1Decoder<SigncryptedPartsManifest> = _decode_Signcrypted;

/**
 * @summary Encodes a(n) SigncryptedPartsManifest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedPartsManifest, encoded as an ASN.1 Element.
 */
export const _encode_SigncryptedPartsManifest: $.ASN1Encoder<SigncryptedPartsManifest> = _encode_Signcrypted;


/* eslint-enable */
