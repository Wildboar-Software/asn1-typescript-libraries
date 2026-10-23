/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DSEType,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta.mjs";
/**
 * @summary SDSEType
 * @description
 *
 * Alias of `DSEType`. On receipt, bits `supr`, `xr`, `shadow`, `immSupr`,
 * and `rhob` are ignored. The consumer's DSE type is this value after
 * setting `shadow` and clearing bits not permitted in `SDSEType`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDSEType  ::=  DSEType
 * ```
 */
export type SDSEType = DSEType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SDSEType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDSEType} The decoded data structure.
 */
export const _decode_SDSEType: $.ASN1Decoder<SDSEType> = _decode_DSEType;

/**
 * @summary Encodes a(n) SDSEType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDSEType, encoded as an ASN.1 Element.
 */
export const _encode_SDSEType: $.ASN1Encoder<SDSEType> = _encode_DSEType;


/* eslint-enable */
