/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";


/**
 * @summary CallIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentifier  ::=  Integer4
 * ```
 */
export
type CallIdentifier = Integer4; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CallIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallIdentifier: $.ASN1Decoder<CallIdentifier> = _decode_Integer4;

/**
 * @summary Encodes a(n) CallIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_CallIdentifier: $.ASN1Encoder<CallIdentifier> = _encode_Integer4;


/* eslint-enable */
