/* eslint-disable */
import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary InvalidObjectInstanceError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvalidObjectInstanceError  ::= 
 *   ObjectInstance
 * ```
 */
export
type InvalidObjectInstanceError = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InvalidObjectInstanceError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InvalidObjectInstanceError: $.ASN1Decoder<InvalidObjectInstanceError> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) InvalidObjectInstanceError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidObjectInstanceError, encoded as an ASN.1 Element.
 */
export const _encode_InvalidObjectInstanceError: $.ASN1Encoder<InvalidObjectInstanceError> = _encode_ObjectInstance;


/* eslint-enable */
