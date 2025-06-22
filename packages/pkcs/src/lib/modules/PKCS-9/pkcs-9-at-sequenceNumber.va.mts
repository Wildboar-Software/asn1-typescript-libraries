/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va.mjs";

/**
 * @summary pkcs_9_at_sequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-sequenceNumber           OBJECT IDENTIFIER ::= {pkcs-9-at 4}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_sequenceNumber: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    pkcs_9_at
);

/* eslint-enable */
