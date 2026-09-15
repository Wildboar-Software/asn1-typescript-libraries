/**
 * @summary SNPAAddress
 * @description
 *
 * Alias of NLM `SNPAAddress` (SNPA type OID plus address octets). Identifies
 * the subnetwork point of attachment of a neighbour or of a next hop toward a
 * reachable prefix.
 *
 * (ISO/IEC 10589:2002 clauses 8.1, 11.2.6.4 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNPAAddress ::= NLM.SNPAAddress
 * ```
 */
export {
    SNPAAddress,
    _decode_SNPAAddress,
    _encode_SNPAAddress,
} from "@wildboar/nlm";
