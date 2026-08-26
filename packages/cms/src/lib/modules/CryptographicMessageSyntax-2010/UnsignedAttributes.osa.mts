/* eslint-disable */
import { aa_countersignature } from "../CryptographicMessageSyntax-2010/aa-countersignature.oa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

/**
 * @summary UnsignedAttributes
 * @description
 *
 * Object set of attributes permitted in `unsignedAttrs` (includes
 * countersignature) ([RFC 6268](https://datatracker.ietf.org/doc/html/rfc6268);
 * [RFC 5652 §11.4](https://datatracker.ietf.org/doc/html/rfc5652#section-11.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedAttributes ATTRIBUTE ::= { aa-countersignature, ... }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const UnsignedAttributes: ATTRIBUTE[] = [aa_countersignature];

/* eslint-enable */
