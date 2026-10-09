/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_emailaddress_length } from "../PKIX1Explicit88/ub-emailaddress-length.va.mjs";



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
export const _decode_EmailAddress = (el: _Element): EmailAddress => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > Number(ub_emailaddress_length)) {
        throw new ASN1SizeError("EmailAddress violates SIZE constraint");
    }
    return value;
};
export const _encode_EmailAddress = $._encodeIA5String;


/* eslint-enable */
