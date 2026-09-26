import { ObjectIdentifier } from "@wildboar/asn1";
import { Buffer } from "node:buffer";
const id_at = ObjectIdentifier.fromParts([2, 5, 4]);
// Needed for parsing later.
const id_at_countryName = ObjectIdentifier.fromParts([6], id_at);
const id_at_organizationName = ObjectIdentifier.fromParts([10], id_at);
const id_at_organizationalUnitName = ObjectIdentifier.fromParts([11], id_at);
const id_at_dnQualifier = ObjectIdentifier.fromParts([46], id_at);
const id_at_stateOrProvinceName = ObjectIdentifier.fromParts([8], id_at);
const id_at_commonName = ObjectIdentifier.fromParts([3], id_at);
const id_at_serialNumber = ObjectIdentifier.fromParts([5], id_at);
const id_at_localityName = ObjectIdentifier.fromParts([7], id_at);
const id_at_title = ObjectIdentifier.fromParts([12], id_at);
const id_at_surname = ObjectIdentifier.fromParts([4], id_at);
const id_at_givenName = ObjectIdentifier.fromParts([42], id_at);
const id_at_initials = ObjectIdentifier.fromParts([43], id_at);
const id_at_pseudonym = ObjectIdentifier.fromParts([65], id_at);
const id_at_generationQualifier = ObjectIdentifier.fromParts([44], id_at);
const id_at_countryCode3c = ObjectIdentifier.fromParts([98], id_at);
const id_at_countryCode3n = ObjectIdentifier.fromParts([99], id_at);
const id_dc = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 25]);
export function distinguishedTypeToString(attributeType) {
    if (attributeType.isEqualTo(id_dc)) {
        return "dc";
    }
    const attr_type_bytes = attributeType.toBytesUnsafe();
    const firstThreeBytes = attr_type_bytes.subarray(0, 3);
    // TODO: Use ObjectIdentifier.isPrefixOf() when released
    if (attr_type_bytes.length !== 4
        || (Buffer.compare(firstThreeBytes, id_at.toBytesUnsafe()) === 0)) {
        // Unrecognized. Just return the OID as a string.
        return attributeType.toString();
    }
    const lastArc = attr_type_bytes[3];
    switch (lastArc) {
        case 6: return "c";
        case 10: return "o";
        case 11: return "ou";
        case 46: return "dnQualifier";
        case 8: return "st";
        case 3: return "cn";
        case 5: return "serialNumber";
        case 7: return "l";
        case 12: return "title";
        case 4: return "sn";
        case 42: return "gn";
        case 43: return "initials";
        case 65: return "pseudonym";
        case 44: return "generationQualifier";
        case 98: return "c3";
        case 99: return "n3";
        default:
            return attributeType.toString();
    }
}
export default distinguishedTypeToString;
