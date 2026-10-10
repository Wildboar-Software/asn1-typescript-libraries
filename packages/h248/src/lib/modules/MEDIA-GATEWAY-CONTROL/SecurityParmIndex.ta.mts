/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecurityParmIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityParmIndex  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type SecurityParmIndex = OCTET_STRING; // OctetStringType
export const _decode_SecurityParmIndex = (el: _Element): SecurityParmIndex => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("SecurityParmIndex violates SIZE constraint");
    }
    return value;
};
export const _encode_SecurityParmIndex = $._encodeOctetString;


/* eslint-enable */
