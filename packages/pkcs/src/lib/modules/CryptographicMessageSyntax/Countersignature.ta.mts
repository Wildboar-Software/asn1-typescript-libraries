/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../CryptographicMessageSyntax/SignerInfo.ta.mjs";

/**
 * @summary Countersignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Countersignature  ::=  SignerInfo
 * ```
 */
export type Countersignature = SignerInfo; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Countersignature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Countersignature} The decoded data structure.
 */
export const _decode_Countersignature: $.ASN1Decoder<Countersignature> = _decode_SignerInfo;

/**
 * @summary Encodes a(n) Countersignature into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Countersignature, encoded as an ASN.1 Element.
 */
export const _encode_Countersignature: $.ASN1Encoder<Countersignature> = _encode_SignerInfo;


/* eslint-enable */
