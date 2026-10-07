/* eslint-disable */
import {
    ASN1Element as _Element,
    TeletexString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_organizational_unit_name_length } from "../PKIX1Explicit88/ub-organizational-unit-name-length.va.mjs";



/**
 * @summary TeletexOrganizationalUnitName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeletexOrganizationalUnitName  ::=  TeletexString
 *                   (SIZE (1..ub-organizational-unit-name-length))
 * ```
 */
export
type TeletexOrganizationalUnitName = TeletexString; // TeletexString
export const _decode_TeletexOrganizationalUnitName = (el: _Element): TeletexOrganizationalUnitName => {
    const value = $._decodeTeletexString(el);
    if (value.length < 1 || value.length > Number(ub_organizational_unit_name_length)) {
        throw new ASN1SizeError("TeletexOrganizationalUnitName violates SIZE constraint");
    }
    return value;
};
export const _encode_TeletexOrganizationalUnitName = $._encodeTeletexString;


/* eslint-enable */
