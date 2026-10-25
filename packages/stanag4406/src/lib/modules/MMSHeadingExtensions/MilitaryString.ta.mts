/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_military_string } from "../MMSUpperBounds/ub-military-string.va.mjs";



/**
 * @summary MilitaryString
 * @description
 * 
 * Printable string of 1 to 69 characters used for handling instructions,
 * message instructions, originator reference, PLADs, ACP 127 identifiers, and
 * similar military heading text. The bound is `ub-military-string`. STANAG 4406
 * (Ed. 2), Annex A, A1.4 and Annex K.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MilitaryString  ::=  PrintableString(SIZE (1..ub-military-string))
 * ```
 */
export
type MilitaryString = PrintableString; // PrintableString

let _cached_decoder_for_MilitaryString: $.ASN1Decoder<MilitaryString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MilitaryString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MilitaryString (el: _Element): MilitaryString {
    if (!_cached_decoder_for_MilitaryString) { _cached_decoder_for_MilitaryString = $._decodePrintableString; }
    const value = _cached_decoder_for_MilitaryString(el);
    if (value.length < 1 || value.length > Number(ub_military_string)) {
        throw new ASN1SizeError("MilitaryString violates SIZE constraint");
    }
    return value;
}

export const _encode_MilitaryString: $.ASN1Encoder<MilitaryString> = $._encodePrintableString;


/* eslint-enable */
