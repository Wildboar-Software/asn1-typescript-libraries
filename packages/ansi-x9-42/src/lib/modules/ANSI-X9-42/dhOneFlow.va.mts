/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { scheme } from "../ANSI-X9-42/scheme.va.mjs";

/**
 * @summary dhOneFlow
 * @description
 *
 * Diffie-Hellman, one flow: initiator ephemeral, responder static,
 * one group. Store-and-forward capable. Implicit key authentication
 * to the initiator only. Parameters: `SchemeParameters`. ANS
 * X9.42-2003 §8.1.3, §A.4.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhOneFlow     OBJECT IDENTIFIER ::= {scheme 3 }
 * ```
 *
 * @constant
 */
export const dhOneFlow: OBJECT_IDENTIFIER = _OID.fromParts([3], scheme);

/* eslint-enable */
