/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CRLs
 * @description
 *
 * Revocation info choices used by SigncryptedData (ITU-T X.894 | ISO/IEC 24824-4 clause 7.1;
 * [RFC 5652 §10.2.1](https://datatracker.ietf.org/doc/html/rfc5652#section-10.2.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLs      ::=  [XER:BASE64] OCTET STRING
 * ```
 */
export type CRLs = OCTET_STRING; // OctetStringType




export const _decode_CRLs = $._decodeOctetString;




export const _encode_CRLs = $._encodeOctetString;


/* eslint-enable */
