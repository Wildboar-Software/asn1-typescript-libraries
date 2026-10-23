/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MN, _decode_MN, _encode_MN } from "../MMSInformationObjects/MN.ta.mjs";


/**
 * @summary MON
 * @description
 * 
 * Military other notification: an `MN` with the other-notification-type fields
 * chosen. ACP 127 notification responses use this alternative. STANAG 4406 (Ed.
 * 2), Annex A, Annex E, clause 8.4, and A3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MON  ::=  MN
 * ```
 */
export
type MON = MN; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MON
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MON: $.ASN1Decoder<MON> = _decode_MN;

/**
 * @summary Encodes a(n) MON into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MON, encoded as an ASN.1 Element.
 */
export const _encode_MON: (value: MON, elGetter: $.ASN1Encoder<any>) => _Element = _encode_MN;


/* eslint-enable */
