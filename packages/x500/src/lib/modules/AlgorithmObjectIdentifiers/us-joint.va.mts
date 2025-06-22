/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary us_joint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * us-joint                ID ::= { joint-iso-itu-t(2) country(16) us(840) }
 * ```
 *
 * @constant
 */
export const us_joint: ID = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
]);

/* eslint-enable */
