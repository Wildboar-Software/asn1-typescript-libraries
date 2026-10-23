/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary SigParameterName
 * @description
 * 
 * Two-octet name of a signal parameter, a `Name` (Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParameterName  ::=  Name
 * ```
 */
export
type SigParameterName = Name; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SigParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SigParameterName: $.ASN1Decoder<SigParameterName> = _decode_Name;

/**
 * @summary Encodes a(n) SigParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigParameterName, encoded as an ASN.1 Element.
 */
export const _encode_SigParameterName: (value: SigParameterName, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Name;


/* eslint-enable */
