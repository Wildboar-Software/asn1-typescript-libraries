/* eslint-disable */
import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RelatedObject,
    _decode_RelatedObject,
    _encode_RelatedObject,
} from "../X790ASN1Module/RelatedObject.ta.mjs";



/**
 * @summary UnavailableServicePtr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailableServicePtr  ::=  RelatedObject
 * ```
 */
export
type UnavailableServicePtr = RelatedObject; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UnavailableServicePtr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UnavailableServicePtr: $.ASN1Decoder<UnavailableServicePtr> = _decode_RelatedObject;

/**
 * @summary Encodes a(n) UnavailableServicePtr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnavailableServicePtr, encoded as an ASN.1 Element.
 */
export const _encode_UnavailableServicePtr: $.ASN1Encoder<UnavailableServicePtr> = _encode_RelatedObject;


/* eslint-enable */
