/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Category    ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type Category = OCTET_STRING; // OctetStringType

export const _decode_Category = (el: _Element): Category => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("Category violates SIZE constraint");
    }
    return value;
};

export
const _encode_Category: $.ASN1Encoder<Category> = $._encodeOctetString;

/* eslint-enable */
