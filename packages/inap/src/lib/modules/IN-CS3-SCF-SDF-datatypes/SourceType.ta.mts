/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary SourceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceType  ::=  DistinguishedName
 * ```
 */
export
type SourceType = DistinguishedName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SourceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SourceType: $.ASN1Decoder<SourceType> = _decode_DistinguishedName;

/**
 * @summary Encodes a(n) SourceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SourceType, encoded as an ASN.1 Element.
 */
export const _encode_SourceType: (value: SourceType, elGetter: $.ASN1Encoder<any>) => _Element = _encode_DistinguishedName;


/* eslint-enable */
