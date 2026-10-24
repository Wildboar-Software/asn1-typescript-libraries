/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type InvokeIdType, _decode_InvokeIdType, _encode_InvokeIdType } from "../IN-CS-1-Datatypes/InvokeIdType.ta.mjs";
// export { InvokeIdType, _decode_InvokeIdType, _encode_InvokeIdType } from "../IN-CS-1-Datatypes/InvokeIdType.ta.mjs";


/**
 * @summary InvokeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeID  ::= 
 *   InvokeIdType
 * ```
 */
export
type InvokeID = InvokeIdType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InvokeID: $.ASN1Decoder<InvokeID> = _decode_InvokeIdType;

/**
 * @summary Encodes a(n) InvokeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeID, encoded as an ASN.1 Element.
 */
export const _encode_InvokeID: $.ASN1Encoder<InvokeID> = _encode_InvokeIdType;


/* eslint-enable */
