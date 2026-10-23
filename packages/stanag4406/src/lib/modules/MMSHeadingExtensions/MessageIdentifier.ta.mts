/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary MessageIdentifier
 * @description
 * 
 * Optional user string that further identifies the exercise, operation,
 * project, or drill named by `TypeMessage`. STANAG 4406 (Ed. 2), Annex A,
 * A1.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageIdentifier  ::= 
 *   MilitaryString
 * ```
 */
export
type MessageIdentifier = MilitaryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MessageIdentifier: $.ASN1Decoder<MessageIdentifier> = _decode_MilitaryString;

/**
 * @summary Encodes a(n) MessageIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_MessageIdentifier: $.ASN1Encoder<MessageIdentifier> = _encode_MilitaryString;


/* eslint-enable */
