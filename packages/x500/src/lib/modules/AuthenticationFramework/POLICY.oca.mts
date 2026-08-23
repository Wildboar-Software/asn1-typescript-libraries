/* eslint-disable */
import { TYPE_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary POLICY
 * @description
 *
 * TYPE-IDENTIFIER class for hashed policy objects (`&id` / `&Type`).
 * Implementers populate the `Policies` set; {@link HashedPolicyInfo} is
 * `POLICY.&Type`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POLICY ::= TYPE-IDENTIFIER
 * ```
 */
export type POLICY = TYPE_IDENTIFIER;

/* eslint-enable */
