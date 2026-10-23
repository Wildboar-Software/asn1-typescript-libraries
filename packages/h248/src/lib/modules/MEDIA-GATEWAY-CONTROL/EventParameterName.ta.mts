/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../MEDIA-GATEWAY-CONTROL/Name.ta.mjs";


/**
 * @summary EventParameterName
 * @description
 * 
 * Two-octet name of an event parameter, a `Name` (Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParameterName  ::=  Name
 * ```
 */
export
type EventParameterName = Name; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EventParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EventParameterName: $.ASN1Decoder<EventParameterName> = _decode_Name;

/**
 * @summary Encodes a(n) EventParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParameterName, encoded as an ASN.1 Element.
 */
export const _encode_EventParameterName: $.ASN1Encoder<EventParameterName> = _encode_Name;


/* eslint-enable */
