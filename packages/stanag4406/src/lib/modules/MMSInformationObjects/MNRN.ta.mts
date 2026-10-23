/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MN, _decode_MN, _encode_MN } from "../MMSInformationObjects/MN.ta.mjs";


/**
 * @summary MNRN
 * @description
 * 
 * Military non-receipt notification: an `MN` with the non-receipt fields
 * chosen. When auto-forwarding, the UA originates an NRN on the user's behalf
 * only if the recipient specifier requested one. STANAG 4406 (Ed. 2), Annex A,
 * Annex E and clause 12.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNRN  ::=  MN
 * ```
 */
export
type MNRN = MN; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MNRN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MNRN: $.ASN1Decoder<MNRN> = _decode_MN;

/**
 * @summary Encodes a(n) MNRN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MNRN, encoded as an ASN.1 Element.
 */
export const _encode_MNRN: (value: MNRN, elGetter: $.ASN1Encoder<any>) => _Element = _encode_MN;


/* eslint-enable */
