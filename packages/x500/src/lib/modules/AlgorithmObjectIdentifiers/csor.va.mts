/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { usgov } from "../AlgorithmObjectIdentifiers/usgov.va.mjs";
/**
 * @summary csor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * csor                    ID ::= { usgov csor(3) }
 * ```
 *
 * @constant
 */
export const csor: ID = _OID.fromParts([/* csor */ 3], usgov);

/* eslint-enable */
