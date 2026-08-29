/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhHybridOneFlow
 * @description
 *
 * Diffie-Hellman hybrid, one flow: initiator static+ephemeral,
 * responder static only, one group. Store-and-forward. Parameters:
 * `SchemeParameters`. ANS X9.42-2003 §8.1.6, §A.4.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhHybridOneFlow OBJECT IDENTIFIER ::= {scheme 6 }
 * ```
 *
 * @constant
 */
export const dhHybridOneFlow: OBJECT_IDENTIFIER = _OID.fromParts([6], scheme);

/* eslint-enable */
