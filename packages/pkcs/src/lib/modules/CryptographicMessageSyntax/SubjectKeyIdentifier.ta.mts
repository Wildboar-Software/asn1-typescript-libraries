/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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
