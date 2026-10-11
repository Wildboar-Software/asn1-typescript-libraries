/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Name
 * @description
 * 
 * Two-octet identifier: a package name, a digit-map name, or the package-local
 * half of a parameter name (Annex A). Digit-map names use this length as well
 * (`DigitMapName`).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Name  ::=  OCTET STRING(SIZE(2))
 * ```
 */
export
type Name = OCTET_STRING; // OctetStringType
export const _decode_Name = (el: _Element): Name => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("Name violates SIZE constraint");
    }
    return value;
};
export const _encode_Name = $._encodeOctetString;


/* eslint-enable */
