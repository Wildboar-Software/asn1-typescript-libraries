/**
 * @summary NAddress
 * @description
 *
 * Alias of NLM `NAddress` (`OCTET STRING(SIZE (0..20))`).
 * ISO/IEC 10589:2002 §11.3.1.
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
