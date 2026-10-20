/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserError   ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type UserError = OCTET_STRING; // OctetStringType

export const _decode_UserError = (el: _Element): UserError => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("UserError violates SIZE constraint");
    }
    return value;
};

export
const _encode_UserError: $.ASN1Encoder<UserError> = $._encodeOctetString;

/* eslint-enable */
