/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_serial_number } from "../PKIX1Explicit88/ub-serial-number.va.mjs";



/**
 * @summary X520SerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520SerialNumber  ::=     PrintableString (SIZE (1..ub-serial-number))
 * ```
 */
export
type X520SerialNumber = PrintableString; // PrintableString
export const _decode_X520SerialNumber = (el: _Element): X520SerialNumber => {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > Number(ub_serial_number)) {
        throw new ASN1SizeError("X520SerialNumber violates SIZE constraint");
    }
    return value;
};
export const _encode_X520SerialNumber = $._encodePrintableString;


/* eslint-enable */
