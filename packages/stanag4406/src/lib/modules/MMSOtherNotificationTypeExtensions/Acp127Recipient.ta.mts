/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_military_bigstring } from "../MMSUpperBounds/ub-military-bigstring.va.mjs";



/**
 * @summary Acp127Recipient
 * @description
 * 
 * ACP 127 recipient address returned with a gateway notification. Printable
 * string of 1 to 128 characters. STANAG 4406 (Ed. 2), Annex A, A3.1, B.119, and
 * Annex K.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127Recipient  ::=  PrintableString(SIZE (1..ub-military-bigstring))
 * ```
 */
export
type Acp127Recipient = PrintableString; // PrintableString

let _cached_decoder_for_Acp127Recipient: $.ASN1Decoder<Acp127Recipient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Acp127Recipient
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Acp127Recipient (el: _Element): Acp127Recipient {
    if (!_cached_decoder_for_Acp127Recipient) { _cached_decoder_for_Acp127Recipient = $._decodePrintableString; }
    const value = _cached_decoder_for_Acp127Recipient(el);
    if (value.length < 1 || value.length > Number(ub_military_bigstring)) {
        throw new ASN1SizeError("Acp127Recipient violates SIZE constraint");
    }
    return value;
}

export const _encode_Acp127Recipient: $.ASN1Encoder<Acp127Recipient> = $._encodePrintableString;


/* eslint-enable */
