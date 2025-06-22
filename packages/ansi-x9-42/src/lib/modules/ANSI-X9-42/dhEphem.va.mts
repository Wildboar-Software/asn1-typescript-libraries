/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhEphem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhEphem     OBJECT IDENTIFIER ::= {scheme 2 }
 * ```
 *
 * @constant
 */
export const dhEphem: OBJECT_IDENTIFIER = _OID.fromParts([2], scheme);

/* eslint-enable */
