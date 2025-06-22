/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { us_joint } from "../AlgorithmObjectIdentifiers/us-joint.va.mjs";
/**
 * @summary usgov
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * usgov                   ID ::= { us-joint organization(1) gov(101) }
 * ```
 *
 * @constant
 */
export const usgov: ID = _OID.fromParts(
    [/* organization */ 1, /* gov */ 101],
    us_joint
);

/* eslint-enable */
