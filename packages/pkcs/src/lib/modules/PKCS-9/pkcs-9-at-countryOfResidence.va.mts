/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ietf_at } from "../PKCS-9/ietf-at.va.mjs";

/**
 * @summary pkcs_9_at_countryOfResidence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-countryOfResidence       OBJECT IDENTIFIER ::= {ietf-at 5}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_countryOfResidence: OBJECT_IDENTIFIER = new _OID(
    [5],
    ietf_at
);

/* eslint-enable */
