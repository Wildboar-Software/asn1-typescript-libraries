/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SubjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectKeyIdentifier  ::=  OCTET STRING
 * ```
 */
export type SubjectKeyIdentifier = OCTET_STRING; // OctetStringType




export const _decode_SubjectKeyIdentifier = $._decodeOctetString;




export const _encode_SubjectKeyIdentifier = $._encodeOctetString;


/* eslint-enable */
