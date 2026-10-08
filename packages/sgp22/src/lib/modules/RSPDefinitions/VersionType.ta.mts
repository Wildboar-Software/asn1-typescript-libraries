/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
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
export const _decode_VersionType = $._decodeOctetString;
export const _encode_VersionType = $._encodeOctetString;


/* eslint-enable */
