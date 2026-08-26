/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { dhpublicnumber } from "../PKIXAlgs-2009/dhpublicnumber.va.mjs";

/**
 * @summary dh_public_number
 * @description
 *
 * OID for X9.42 DH public number (`dh-public-number`) used with CMS
 * Diffie-Hellman key agreement ([RFC 3370 §4.1](https://datatracker.ietf.org/doc/html/rfc3370#section-4.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dh-public-number OBJECT IDENTIFIER ::= dhpublicnumber
 * ```
 *
 * @constant
 */
export const dh_public_number: OBJECT_IDENTIFIER = dhpublicnumber;

/* eslint-enable */
