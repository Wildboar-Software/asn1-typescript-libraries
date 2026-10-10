/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PkgdName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PkgdName  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type PkgdName = OCTET_STRING; // OctetStringType
export const _decode_PkgdName = (el: _Element): PkgdName => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("PkgdName violates SIZE constraint");
    }
    return value;
};
export const _encode_PkgdName = $._encodeOctetString;


/* eslint-enable */
