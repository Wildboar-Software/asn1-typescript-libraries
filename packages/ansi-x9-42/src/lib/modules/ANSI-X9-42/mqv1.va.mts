/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary mqv1
 * @description
 *
 * Store-and-forward MQV: initiator contributes static+ephemeral keys,
 * responder a static key only (e.g. email). Forward secrecy for the
 * initiator only. Parameters: `SchemeParameters`. ANS X9.42-2003
 * §8.2.2, §7.5.2.2, §A.4.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mqv1         OBJECT IDENTIFIER ::= {scheme 8 }
 * ```
 *
 * @constant
 */
export const mqv1: OBJECT_IDENTIFIER = _OID.fromParts([8], scheme);

/* eslint-enable */
