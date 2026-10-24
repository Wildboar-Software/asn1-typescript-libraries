/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary InvalidBaseManagedObjectError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvalidBaseManagedObjectError  ::=  ObjectInstance
 * ```
 */
export
type InvalidBaseManagedObjectError = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InvalidBaseManagedObjectError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InvalidBaseManagedObjectError: $.ASN1Decoder<InvalidBaseManagedObjectError> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) InvalidBaseManagedObjectError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidBaseManagedObjectError, encoded as an ASN.1 Element.
 */
export const _encode_InvalidBaseManagedObjectError: $.ASN1Encoder<InvalidBaseManagedObjectError> = _encode_ObjectInstance;


/* eslint-enable */
