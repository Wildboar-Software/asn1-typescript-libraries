/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
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
export const _decode_EmailAddress = $._decodeIA5String;
export const _encode_EmailAddress = $._encodeIA5String;


/* eslint-enable */
