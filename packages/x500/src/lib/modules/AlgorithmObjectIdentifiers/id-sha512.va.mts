/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha512               ID ::= { hashAlgs 3 }
 * ```
 *
 * @constant
 */
export const id_sha512: ID = _OID.fromParts([3], hashAlgs);

/* eslint-enable */
