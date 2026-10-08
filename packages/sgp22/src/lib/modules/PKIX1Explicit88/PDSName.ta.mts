/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import { ub_pds_name_length } from "./ub-pds-name-length.va.mjs";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDSName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSName  ::=  PrintableString (SIZE (1..ub-pds-name-length))
 * ```
 */
export
type PDSName = PrintableString; // PrintableString
export function _decode_PDSName (el: _Element): PDSName {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > Number(ub_pds_name_length)) {
        throw new ASN1SizeError("PDSName violates SIZE constraint");
    }
    return value;
}
export const _encode_PDSName = $._encodePrintableString;


/* eslint-enable */
