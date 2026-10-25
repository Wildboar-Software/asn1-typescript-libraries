/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Quality, _decode_Quality, _encode_Quality } from "../PKIS/Quality.ta.mjs";


/**
 * @summary CryptoProcessQuality
 * @description
 *
 * Minimum process quality the subscriber commits will apply whenever
 * the key is used. Display name: "Crypto Process Quality". Unlike
 * `KeyQuality`, this is a commitment about future operations, not a
 * measurement of a key that already exists. §4.
 *
 * If `enforceQuality` is TRUE here and FALSE on `KeyQuality`, the
 * platform is not required to enforce the criteria technically; the
 * subscriber is representing that procedural controls will keep them.
 * §4.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CryptoProcessQuality  ::=  Quality
 * ```
 */
export
type CryptoProcessQuality = Quality; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CryptoProcessQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CryptoProcessQuality: $.ASN1Decoder<CryptoProcessQuality> = _decode_Quality;

/**
 * @summary Encodes a(n) CryptoProcessQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoProcessQuality, encoded as an ASN.1 Element.
 */
export const _encode_CryptoProcessQuality: $.ASN1Encoder<CryptoProcessQuality> = _encode_Quality;


/* eslint-enable */
