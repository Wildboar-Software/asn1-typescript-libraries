/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_symmetric
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-symmetric OID ::= { id-ckm-algorithms symmetric(1) }
 * ```
 *
 * @constant
 */
export const id_ckm_symmetric: OID = _OID.fromParts(
    [/* symmetric */ 1],
    id_ckm_algorithms
);

/* eslint-enable */
