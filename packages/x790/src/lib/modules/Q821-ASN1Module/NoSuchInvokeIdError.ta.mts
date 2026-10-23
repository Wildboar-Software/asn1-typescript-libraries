/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InvokeIDType,
    _decode_InvokeIDType,
    _encode_InvokeIDType,
} from "../CMIP-1/InvokeIDType.ta.mjs";



/**
 * @summary NoSuchInvokeIdError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoSuchInvokeIdError  ::= 
 *   InvokeIDType
 * ```
 */
export
type NoSuchInvokeIdError = InvokeIDType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchInvokeIdError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NoSuchInvokeIdError: $.ASN1Decoder<NoSuchInvokeIdError> = _decode_InvokeIDType;

/**
 * @summary Encodes a(n) NoSuchInvokeIdError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchInvokeIdError, encoded as an ASN.1 Element.
 */
export const _encode_NoSuchInvokeIdError: (value: NoSuchInvokeIdError, elGetter: $.ASN1Encoder<any>) => _Element = _encode_InvokeIDType;


/* eslint-enable */
