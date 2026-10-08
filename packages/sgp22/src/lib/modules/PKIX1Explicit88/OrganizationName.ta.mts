/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import { ub_organization_name_length } from "./ub-organization-name-length.va.mjs";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OrganizationName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrganizationName  ::=  PrintableString
 *                             (SIZE (1..ub-organization-name-length))
 * ```
 */
export
type OrganizationName = PrintableString; // PrintableString
export function _decode_OrganizationName (el: _Element): OrganizationName {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > Number(ub_organization_name_length)) {
        throw new ASN1SizeError("OrganizationName violates SIZE constraint");
    }
    return value;
}
export const _encode_OrganizationName = $._encodePrintableString;


/* eslint-enable */
