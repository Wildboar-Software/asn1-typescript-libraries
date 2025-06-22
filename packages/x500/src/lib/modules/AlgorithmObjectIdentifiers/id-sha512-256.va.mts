/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha512_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha512-256           ID ::= { hashAlgs 6 }
 * ```
 *
 * @constant
 */
export const id_sha512_256: ID = _OID.fromParts([6], hashAlgs);

/* eslint-enable */
