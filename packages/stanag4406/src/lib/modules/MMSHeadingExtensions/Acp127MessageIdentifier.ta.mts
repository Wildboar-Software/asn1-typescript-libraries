/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary Acp127MessageIdentifier
 * @description
 * 
 * ACP 127 format-line 3 identifier: routing indicator of the originating
 * commcen, station serial number, and filing time. The module stores those
 * components separated by spaces. Required when an ACP 127 message is tandemed
 * through MMHS, and may be used so the same identifier exists in both domains.
 * Absence means the message did not encounter an ACP 127 domain. Transitional.
 * STANAG 4406 (Ed. 2), Annex A, A1.14 and B.116.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127MessageIdentifier  ::=  MilitaryString
 * ```
 */
export
type Acp127MessageIdentifier = MilitaryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Acp127MessageIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Acp127MessageIdentifier: $.ASN1Decoder<Acp127MessageIdentifier> = _decode_MilitaryString;

/**
 * @summary Encodes a(n) Acp127MessageIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Acp127MessageIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_Acp127MessageIdentifier: $.ASN1Encoder<Acp127MessageIdentifier> = _encode_MilitaryString;


/* eslint-enable */
