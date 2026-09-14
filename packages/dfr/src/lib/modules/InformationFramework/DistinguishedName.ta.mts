/**
 * Directory `DistinguishedName` (ISO/IEC 9594-2). DFR uses it as
 * initiator name, AccessId, and several *-By attributes.
 * ISO/IEC 10166-1:1991 §7.1.1, §8.1.2.
 */
export {
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    type DistinguishedName,
} from "@wildboar/x500/InformationFramework";
