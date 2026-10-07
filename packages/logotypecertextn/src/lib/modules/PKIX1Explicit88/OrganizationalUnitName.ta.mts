/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_organizational_unit_name_length } from "../PKIX1Explicit88/ub-organizational-unit-name-length.va.mjs";



/**
 * @summary OrganizationalUnitName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrganizationalUnitName  ::=  PrintableString (SIZE
 *                     (1..ub-organizational-unit-name-length))
 * ```
 */
export
type OrganizationalUnitName = PrintableString; // PrintableString
export const _decode_OrganizationalUnitName = (el: _Element): OrganizationalUnitName => {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > Number(ub_organizational_unit_name_length)) {
        throw new ASN1SizeError("OrganizationalUnitName violates SIZE constraint");
    }
    return value;
};
export const _encode_OrganizationalUnitName = $._encodePrintableString;


/* eslint-enable */
