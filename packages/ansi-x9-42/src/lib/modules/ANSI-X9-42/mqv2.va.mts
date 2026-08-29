/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary mqv2
 * @description
 *
 * Interactive MQV (Menezes–Qu–Vanstone): both parties contribute
 * static and ephemeral keys on one group. `ZZ = oct(ZMQV)`. Forward
 * secrecy for both; suitable for online sessions. Parameters:
 * `SchemeParameters`. ANS X9.42-2003 §8.2.1, §7.5.2.1, §A.4.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mqv2         OBJECT IDENTIFIER ::= {scheme 7 }
 * ```
 *
 * @constant
 */
export const mqv2: OBJECT_IDENTIFIER = _OID.fromParts([7], scheme);

/* eslint-enable */
