/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { namedScheme } from "../ANSI-X9-42/namedScheme.va.mjs";

/**
 * @summary dhEphem_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhEphem-sha1     OBJECT IDENTIFIER ::= { namedScheme 2 }
 * ```
 *
 * @constant
 */
export const dhEphem_sha1: OBJECT_IDENTIFIER = _OID.fromParts([2], namedScheme);

/* eslint-enable */
