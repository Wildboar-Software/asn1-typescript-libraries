/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_shake128
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake128             ID ::= { hashAlgs 11 }
 * ```
 *
 * @constant
 */
export const id_shake128: ID = _OID.fromParts([11], hashAlgs);

/* eslint-enable */
