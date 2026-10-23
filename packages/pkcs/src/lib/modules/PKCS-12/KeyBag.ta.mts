/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PrivateKeyInfo,
    _decode_PrivateKeyInfo,
    _encode_PrivateKeyInfo,
} from "../AsymmetricKeyPackageModuleV1/PrivateKeyInfo.ta.mjs";


/**
 * @summary KeyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyBag  ::=  PrivateKeyInfo
 * ```
 */
export type KeyBag = PrivateKeyInfo; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) KeyBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyBag} The decoded data structure.
 */
export const _decode_KeyBag: $.ASN1Decoder<KeyBag> = _decode_PrivateKeyInfo;

/**
 * @summary Encodes a(n) KeyBag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyBag, encoded as an ASN.1 Element.
 */
export const _encode_KeyBag: $.ASN1Encoder<KeyBag> = _encode_PrivateKeyInfo;


/* eslint-enable */
