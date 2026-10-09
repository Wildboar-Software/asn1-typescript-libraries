/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_military_bigstring } from "../MMSUpperBounds/ub-military-bigstring.va.mjs";



/**
 * @summary Acp127Recipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127Recipient  ::=  PrintableString(SIZE (1..ub-military-bigstring))
 * ```
 */
export
type Acp127Recipient = PrintableString; // PrintableString
export function _decode_Acp127Recipient (el: _Element): Acp127Recipient {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > ub_military_bigstring) {
        throw new ASN1SizeError("Acp127Recipient violates SIZE constraint");
    }
    return value;
}
export const _encode_Acp127Recipient = $._encodePrintableString;


/* eslint-enable */
