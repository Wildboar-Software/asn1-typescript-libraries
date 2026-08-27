/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SubjectKeyIdentifier
 * @description
 *
 * OCTET STRING subject key identifier (from the certificate extension)
 * ([RFC 5652 §5.3](https://datatracker.ietf.org/doc/html/rfc5652#section-5.3)).
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
