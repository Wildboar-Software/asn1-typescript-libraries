/**
 * @summary NAddress
 * @description
 *
 * Alias of NLM `NAddress` (`OCTET STRING(SIZE (0..20))`). Used as a Network
 * Entity Title (for example `networkEntityTitle` on a destination system or
 * virtual adjacency, and the remote NET of a partition-repair virtual link).
 *
 * (ISO/IEC 10589:2002 clauses 11.2.1.2, 11.2.7 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddress ::= NLM.NAddress
 * ```
 */
export type { NAddress } from "@wildboar/nlm";
export {
    _decode_NAddress,
    _encode_NAddress,
} from "@wildboar/nlm";
