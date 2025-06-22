/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { versionOne } from "../AlgorithmObjectIdentifiers/versionOne.va.mjs";
/**
 * @summary brainpoolP256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP256r1 ID ::= { versionOne 7 }
 * ```
 *
 * @constant
 */
export const brainpoolP256r1: ID = _OID.fromParts([7], versionOne);

/* eslint-enable */
