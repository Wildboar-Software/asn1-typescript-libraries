/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import { ub_common_name_length } from "./ub-common-name-length.va.mjs";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommonName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonName  ::=  PrintableString (SIZE (1..ub-common-name-length))
 * ```
 */
export
type CommonName = PrintableString; // PrintableString
export function _decode_CommonName (el: _Element): CommonName {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > Number(ub_common_name_length)) {
        throw new ASN1SizeError("CommonName violates SIZE constraint");
    }
    return value;
}
export const _encode_CommonName = $._encodePrintableString;


/* eslint-enable */
