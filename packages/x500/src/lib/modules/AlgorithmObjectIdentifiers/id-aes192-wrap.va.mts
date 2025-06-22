/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_aes192_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes192-wrap          ID ::= { aes 25 }
 * ```
 *
 * @constant
 */
export const id_aes192_wrap: ID = _OID.fromParts([25], aes);

/* eslint-enable */
