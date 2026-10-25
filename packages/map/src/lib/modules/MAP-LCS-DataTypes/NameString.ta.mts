/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_USSD_String, _encode_USSD_String, type USSD_String } from "../MAP-SS-DataTypes/USSD-String.ta.mjs";



/**
 * @summary NameString
 * @description
 *
 * USSD-String SIZE (1..maxNameStringLength) (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameString  ::=  USSD-String (SIZE (1..maxNameStringLength))
 * ```
 */
export
type NameString = USSD_String; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NameString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NameString: $.ASN1Decoder<NameString> = _decode_USSD_String;

/**
 * @summary Encodes a(n) NameString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameString, encoded as an ASN.1 Element.
 */
export const _encode_NameString: $.ASN1Encoder<NameString> = _encode_USSD_String;


/* eslint-enable */
