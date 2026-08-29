/**
 * Sequence of RDNs forming a (possibly relative) name.
 * Used as `DistinguishedName` and as
 * `ObjectInstance.localDistinguishedName`. Re-exported
 * from `@wildboar/x500`. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 */
export {
    type RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "@wildboar/x500/InformationFramework";
