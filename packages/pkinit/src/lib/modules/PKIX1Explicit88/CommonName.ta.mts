/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_common_name_length } from "../PKIX1Explicit88/ub-common-name-length.va.mjs";



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
export const _decode_CommonName = (el: _Element): CommonName => {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > Number(ub_common_name_length)) {
        throw new ASN1SizeError("CommonName violates SIZE constraint");
    }
    return value;
};
export const _encode_CommonName = $._encodePrintableString;


/* eslint-enable */
