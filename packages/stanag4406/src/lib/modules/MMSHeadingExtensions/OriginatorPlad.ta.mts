/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary OriginatorPlad
 * @description
 * 
 * Plain language address of the originator, as defined in ACP 127, so the same
 * reference can be used in MMHS and ACP 127 domains. Together with the extended
 * authorisation date-time group it cross-references the two identifications.
 * Transitional. Absence means there is no originator-PLAD cross-reference.
 * STANAG 4406 (Ed. 2), Annex A, A1.15 and B.117.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatorPlad  ::=  MilitaryString
 * ```
 */
export
type OriginatorPlad = MilitaryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorPlad
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_OriginatorPlad: $.ASN1Decoder<OriginatorPlad> = _decode_MilitaryString;

/**
 * @summary Encodes a(n) OriginatorPlad into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorPlad, encoded as an ASN.1 Element.
 */
export const _encode_OriginatorPlad: $.ASN1Encoder<OriginatorPlad> = _encode_MilitaryString;


/* eslint-enable */
