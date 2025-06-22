/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ietf_at } from "../PKCS-9/ietf-at.va.mjs";

/**
 * @summary pkcs_9_at_countryOfCitizenship
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-countryOfCitizenship     OBJECT IDENTIFIER ::= {ietf-at 4}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_countryOfCitizenship: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    ietf_at
);

/* eslint-enable */
