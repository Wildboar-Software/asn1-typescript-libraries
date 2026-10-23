/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MN, _decode_MN, _encode_MN } from "../MMSInformationObjects/MN.ta.mjs";


/**
 * @summary MRN
 * @description
 * 
 * Military receipt notification: an `MN` with the receipt fields chosen. STANAG
 * 4406 (Ed. 2), Annex A, Annex E.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MRN  ::=  MN
 * ```
 */
export
type MRN = MN; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MRN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MRN: $.ASN1Decoder<MRN> = _decode_MN;

/**
 * @summary Encodes a(n) MRN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRN, encoded as an ASN.1 Element.
 */
export const _encode_MRN: (value: MRN, elGetter: $.ASN1Encoder<any>) => _Element = _encode_MN;


/* eslint-enable */
