/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary DigitMapName
 * @description
 * 
 * Name of a digit map. A `Name`: two octets (Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitMapName  ::=  Name
 * ```
 */
export
type DigitMapName = Name; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DigitMapName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DigitMapName: $.ASN1Decoder<DigitMapName> = _decode_Name;

/**
 * @summary Encodes a(n) DigitMapName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitMapName, encoded as an ASN.1 Element.
 */
export const _encode_DigitMapName: $.ASN1Encoder<DigitMapName> = _encode_Name;


/* eslint-enable */
