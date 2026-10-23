/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary ObjectOfReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectOfReference  ::= 
 *   ObjectInstance
 * ```
 */
export
type ObjectOfReference = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectOfReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ObjectOfReference: $.ASN1Decoder<ObjectOfReference> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) ObjectOfReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectOfReference, encoded as an ASN.1 Element.
 */
export const _encode_ObjectOfReference: $.ASN1Encoder<ObjectOfReference> = _encode_ObjectInstance;


/* eslint-enable */
