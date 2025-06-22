/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificates     ::=  [XER:BASE64] OCTET STRING
 * ```
 */
export type Certificates = OCTET_STRING; // OctetStringType




export const _decode_Certificates = $._decodeOctetString;




export const _encode_Certificates = $._encodeOctetString;


/* eslint-enable */
