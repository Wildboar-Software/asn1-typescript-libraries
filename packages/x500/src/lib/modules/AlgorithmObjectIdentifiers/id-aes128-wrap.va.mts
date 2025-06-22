/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_aes128_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes128-wrap          ID ::= { aes 5 }
 * ```
 *
 * @constant
 */
export const id_aes128_wrap: ID = _OID.fromParts([5], aes);

/* eslint-enable */
