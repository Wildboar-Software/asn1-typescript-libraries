/**
 * @summary SNPAAddress
 * @description
 *
 * Alias of NLM `SNPAAddress` (SNPA type OID plus address octets).
 * ISO/IEC 10589:2002 §11.3.1.
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
