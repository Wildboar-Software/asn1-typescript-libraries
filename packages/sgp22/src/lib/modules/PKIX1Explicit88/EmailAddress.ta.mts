/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import { ub_emailaddress_length } from "./ub-emailaddress-length.va.mjs";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmailAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmailAddress  ::=          IA5String (SIZE (1..ub-emailaddress-length))
 * ```
 */
export
type EmailAddress = IA5String; // IA5String
export function _decode_EmailAddress (el: _Element): EmailAddress {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > Number(ub_emailaddress_length)) {
        throw new ASN1SizeError("EmailAddress violates SIZE constraint");
    }
    return value;
}
export const _encode_EmailAddress = $._encodeIA5String;


/* eslint-enable */
