/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeIDList,
    _decode_AttributeIDList,
    _encode_AttributeIDList,
} from "../X790ASN1Module/AttributeIDList.ta.mjs";



/**
 * @summary TRMustBePresentAttributeMissing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TRMustBePresentAttributeMissing  ::=  AttributeIDList
 * ```
 */
export
type TRMustBePresentAttributeMissing = AttributeIDList; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TRMustBePresentAttributeMissing
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TRMustBePresentAttributeMissing: $.ASN1Decoder<TRMustBePresentAttributeMissing> = _decode_AttributeIDList;

/**
 * @summary Encodes a(n) TRMustBePresentAttributeMissing into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TRMustBePresentAttributeMissing, encoded as an ASN.1 Element.
 */
export const _encode_TRMustBePresentAttributeMissing: (value: TRMustBePresentAttributeMissing, elGetter: $.ASN1Encoder<any>) => _Element = _encode_AttributeIDList;


/* eslint-enable */
