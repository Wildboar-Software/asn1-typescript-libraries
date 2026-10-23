/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary GapOnResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapOnResource  ::= 
 *   Code
 * ```
 */
export
type GapOnResource = Code; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GapOnResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GapOnResource: $.ASN1Decoder<GapOnResource> = _decode_Code;

/**
 * @summary Encodes a(n) GapOnResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapOnResource, encoded as an ASN.1 Element.
 */
export const _encode_GapOnResource: (value: GapOnResource, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Code;


/* eslint-enable */
