/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_mr } from "../PKCS-9/pkcs-9-mr.va.mjs";

/**
 * @summary pkcs_9_mr_signingTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-mr-signingTimeMatch         OBJECT IDENTIFIER ::= {pkcs-9-mr 2}
 * ```
 *
 * @constant
 */
export const pkcs_9_mr_signingTimeMatch: OBJECT_IDENTIFIER = new _OID(
    [2],
    pkcs_9_mr
);

/* eslint-enable */
