/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VersionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionType  ::=  OCTET STRING(SIZE(3))
 * ```
 */
export
type VersionType = OCTET_STRING; // OctetStringType
export function _decode_VersionType (el: _Element): VersionType {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("VersionType violates SIZE constraint");
    }
    return value;
}
export const _encode_VersionType = $._encodeOctetString;


/* eslint-enable */
